import Container from "./container";
import FullLink from "./fullLink";

const Footer = () => {
  return (
    <footer>
      <Container styles="footer">
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
      </Container>
    </footer>
  );
};

export default Footer;
