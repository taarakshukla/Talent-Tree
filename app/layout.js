import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SessionWrapper from "./components/SessionWrapper";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Talent Tree - Get your project funded",
  description: "A crowdfunding platform for getting your project funded",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="  bg-slate-900 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]">
        <SessionWrapper>
          <Navbar />
          <div className="text-white min-h-screen">
            {children}
          </div>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
