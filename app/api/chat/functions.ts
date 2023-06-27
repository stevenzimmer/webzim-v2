export const functions: {
  name: FunctionNames;
  description: string;
  parameters: object;
}[] = [
  {
    name: "get_top_stories",
    description: "Get the top stories from Hacker News. Also returns the Hacker news URL to each story.",
    parameters: {
      type: "object",
      properties: {
        limit: {
          type: "number",
          description: "The number of stories to return. Default is 10."
        },
      },
      required: [],
    },
  },
  {
    name: "get_story",
    description: "Get a story from Hacker News. Also returns the Hacker news URL to the story.",
    parameters: {
      type: "object",
      properties: {
        id: {
          type: "number",
          description: "The id of the story to return."
        },
      },
      required: ["id"],
    },
  },
  {
    name: "get_story_with_comments",
    description: "Get a story from Hacker News with comments. Also returns the Hacker news URL to the story and each comment.",
    parameters: {
      type: "object",
      properties: {
        id: {
          type: "number",
          description: "The id of the story."
        },
      },
      required: ["id"],
    },
  },
  {
    name: "summarize_top_story",
    description: "Summarize the top story from Hacker News, including both the story and its comments. Also returns the Hacker News URL to the story and its comments.",
    parameters: {
      type: "object",
      properties: {},
      required: [],
    },
  }
]


async function get_top_stories(limit: number = 10) {
  const response = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json");

  const ids = await response.json();

  const stories = await Promise.all(
    ids.slice(0, limit).map(async (id: number) => get_story(id))
  );

  return stories;
}
