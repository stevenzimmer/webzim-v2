// import "./globals.css";
import Navbar from "@/components/langchain/Navbar";
// import Footer from "./Footer";
import { instrumentSans } from "@/styles/fonts";

export const metadata = {
  title: "Langchain JavaScript",
  description: "Learn  the latest AI technologies from Shawn Esquivel.",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
   <>
        <Navbar />
        <main className="flex flex-col pt-20 px-20">{children}</main>
        {/* <Footer /> */}
        </> 
  );
}