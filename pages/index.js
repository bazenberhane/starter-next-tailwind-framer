import Header from "../components/header";
import Layout from "../components/layout";
import Footer from "../components/footer";
import { LazyMotion, domAnimation, m, motion } from "framer-motion";
import { NextSeo } from "next-seo";
import Div100vh from "react-div-100vh";
import { headerEnter } from "../utils/transitions";

export default function Home() {
  return (
    <Layout>
      <NextSeo title="Home" />
      <LazyMotion features={domAnimation}>
        <Header />
        <Div100vh>
          <div className="flex justify-center items-center h-screen px-8">
            <motion.h1
              variants={headerEnter}
              initial="hidden"
              animate="visible"
              className="text-base md:text-2xl uppercase"
            >
              Next.js, Tailwind and Framer Motion Starter
            </motion.h1>
          </div>
        </Div100vh>
        <Footer />
      </LazyMotion>
    </Layout>
  );
}
