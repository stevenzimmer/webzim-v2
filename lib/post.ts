import { BlogPost, Meta } from "@/types";
import {compileMDX } from "next-mdx-remote/rsc"
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings/lib";
import rehypeHighlight from "rehype-highlight/lib";
import CustomImage from "@/components/blog/CustomImage";

type Filetree = {
  "tree": [
    {
      "path": string
    }
  ]
}

export async function getPostByName(fileName: string): Promise<BlogPost | undefined> {

  const res = await fetch(`https://raw.githubusercontent.com/stevenzimmer/md-blogposts/main/${fileName}`, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      'X-Github-Api-Version':"2022-11-28" 
    }
  });

  // console.log({res});

  if (!res.ok) return undefined;

  const rawMDX = await res.text();

  if(rawMDX === "404: Not Found") return undefined;

  const { frontmatter, content } = await compileMDX<{
    title: string,
    date: string,
    tags: string[]
  }>({
    source: rawMDX,
    components: {
      CustomImage,
  },
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          rehypeHighlight,
          rehypeSlug,
          [rehypeAutolinkHeadings, {
            behavior: "wrap"
          }]
        ]
      }
    }
  });

  const id = fileName.replace(/\.mdx$/, "");

  const blogPostObj:BlogPost = {
    meta: {
      id,
      title: frontmatter.title, 
      date: frontmatter.date,
      tags: frontmatter.tags
    },
    content
  }

  return blogPostObj;

}

export async function getPostsMeta(): Promise<Meta[] | undefined> {
  const res = await fetch("https://api.github.com/repos/stevenzimmer/md-blogposts/git/trees/main?recursive=1", {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      'X-Github-Api-Version':"2022-11-28" 
    }
  });

  if (!res.ok) return undefined;

  const repoFiletree: Filetree = await res.json();

  // console.log({repoFiletree});

  const filesArray = repoFiletree.tree.map((obj) => obj.path).filter(path => path.endsWith(".mdx"));

  // console.log({filesArray});

  const posts: Meta[] = [];

  for( const file of filesArray ) {
    // console.log({file});
    const post = await getPostByName(file);
    // console.log({post})
    if(post) {
      const { meta } = post;
      posts.push(meta);
    }
  }

  return posts.sort((a,b) => a.date < b.date ? 1 : -1);



}