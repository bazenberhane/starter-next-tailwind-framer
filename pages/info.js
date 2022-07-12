import Header from "../components/header";
import Layout from "../components/layout";
import Container from "../components/container";
import Footer from "../components/footer";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
import { pageFade } from "../utils/transitions";
import SocialBar from "../components/socialBar";

const Info = () => {
  return (
    <Layout>
      <Header />
      <NextSeo title="Info" />
      <LazyMotion features={domAnimation}>
        <m.main initial="initial" animate="enter" exit="exit">
          <Container styles="flex justify-center items-center h-screen px-8">
            <m.main initial="initial" animate="enter" exit="exit">
              {/* <div>
            <a href="https://bazen.dev">Starter by Bazen Berhane</a>
          </div> */}
              <span className="fixed bottom-[33%] left-4 right-auto vert">
                Next.js - Tailwind CSS - Framer Motion
              </span>
              <m.div variants={pageFade}>
                <div className="flex flex-col md:flex-row justify-between">
                  <h1 className="text-3xl text-blue-700 mb-16">Info</h1>
                </div>

                <div className="space-y-4 max-w-3xl">
                  <h2 className="text-xl">
                    What's{" "}
                    <span className="italic underline underline-offset-4 decoration-wavy">
                      Lorem Ipsum?
                    </span>
                  </h2>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that
                    voluptatibus distinctio adipisci aut asperiores nemo
                    laudantium perspiciatis quisquam, officia officiis porro
                    possimus, libero dolores ut saepe velit assumenda tenetur
                    nesciunt! Eaque?
                  </p>
                  <h2 className="text-xl">Why do we use it?</h2>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus distinctio adipisci aut asperiores nemo
                    laudantium perspiciatis quisquam, officia officiis porro
                    possimus, libero dolores ut saepe velit assumenda tenetur
                    nesciunt! Eaque?
                  </p>
                </div>
              </m.div>
            </m.main>
          </Container>
        </m.main>
      </LazyMotion>
      <Footer />
      <SocialBar />
    </Layout>
  );
};

export default Info;