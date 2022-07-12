import Container from "./container";
import FullLink from "./fullLink";

const Footer = () => {
  return (
    <footer>
      <Container styles="footer">
        <FullLink
          label="Starter by Bazen Berhane"
          to="https://bazen.dev"
          a11y="Navigate to Bazen's Portfolio"
          styles=""
        />
      </Container>
    </footer>
  );
};

export default Footer;
