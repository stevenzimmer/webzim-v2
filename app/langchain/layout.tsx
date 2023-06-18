// import "./globals.css";
import Navbar from "@/components/langchain/Navbar";
// import Footer from "./Footer";
import { instrumentSans } from "@/styles/fonts";

export const metadata = {
  title: "Langchain Demos | WebZim",
  description: "Demos on the latest AI capabilites on the web using Langchain.",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
   <>
        <Navbar />
        <main className="px-12 md:p-20 max-w-6xl mx-auto">{children}</main>
        {/* <Footer /> */}
        </> 
  );
}