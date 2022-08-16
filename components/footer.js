import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 px-4 py-8">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <span className="footer-item">
          Starter by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://bazen.dev"
            className="hover:text-blue-600 hover:scale-125 transition-all focus:text-blue-600"
          >
            Bazen Berhane
          </a>
        </span>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/bazenberhane"
          className="footer-item hover:text-blue-600 hover:scale-125 transition-all focus:text-blue-600"
        >
          Github
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/bazenberhane"
          className="hover:text-blue-600 hover:scale-125 transition-all focus:text-blue-600"
        >
          Twitter
        </a>
      </motion.div>
    </footer>
  );
};

export default Footer;
