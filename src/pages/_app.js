import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Space_Grotesk } from "next/font/google";

const font = Space_Grotesk({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={`${font.className}  dark:from-primary-dark`}>
      <ThemeProvider
        enableSystem={true}
        attribute="class"
        defaultTheme="system"
      >
        <Navbar />
        <Component {...pageProps} />
        <Footer/>
      </ThemeProvider>
    </div>
  );
}
