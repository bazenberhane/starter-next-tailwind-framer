import "../styles/global.css";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import SeoConfig from "../utils/seo.config";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="light">
        <DefaultSeo {...SeoConfig} />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}
