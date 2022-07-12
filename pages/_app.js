import "../styles/global.css";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import SeoConfig from "../utils/seo.config";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <DefaultSeo {...SeoConfig} />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </>
  );
}
