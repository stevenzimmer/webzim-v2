import Image from "next/image"
import Link from "next/link"
import { footerLinks } from "@/lib/carhub"

export default function Footer() {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100 mt-12 padding-x padding-y max-width">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
         <div className="flex flex-col justify-start items-start gap-6">
          <Image 
            src="/images/carhub/logo.svg"
            alt="Carhub logo"
            width={150}
            height={50}
            className="object-contain"

          />
          <p className="text-base text-gray-700">
            Car Hub 2023. All rights reserved &copy;
          </p>
         </div>
         <div className="footer__links">
            {footerLinks.map((link, i) => (
              <div key={i} className="footer__link">
                <h3 className="text-base font-bold">{link.title}</h3>
                {link.links.map((item, j) => (
                  <Link className=" text-gray-500" key={j} href={item.url}>
                     {item.title}
                  </Link>
                ))}
              </div>
            ))}

        <div className="flex justify-between mt-10  border-gray-100 sm:px-16 px-6 py-2">
          <div className="footer__copyrights-link">
            <Link href="/terms">
              Privacy Policy
            </Link>
            <Link href="/terms">
             Terms of Use
            </Link>
            
          </div>
          </div>

         </div>
         
      </div>
    </footer>
  )
}
