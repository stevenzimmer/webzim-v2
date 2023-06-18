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
        {/* <Navbar /> */}
        <div className="lg:fixed w-[200px] bg-slate-200 h-full p-6">
          <h3>Langachin Demos</h3>
        </div>
        <main className="px-12 min-h-screen max-w-6xl mx-auto pb-20">{children}</main>
        {/* <Footer /> */}
        </> 
  );
}