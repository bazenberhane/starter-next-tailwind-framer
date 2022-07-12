import FullLink from "./fullLink";
import Container from "./container";
import SocialBar from "./socialBar";

const Header = () => {
  return (
    <header className="bg-blue-200 z-10 absolute top-0 w-full">
      <Container styles="px-8 py-4">
        <div className="flex flex-wrap items-center">
          <FullLink
            label="Logo"
            to="/"
            a11y="Navigate to Home Page"
            styles="text-[1.8rem]"
          />
          <nav className="flex ml-auto space-x-4 text-md">
            <FullLink
              label="Home"
              to="/"
              a11y="Navigate to Home Page"
              styles="p-2"
            />
            <FullLink
              label="Info"
              to="/info"
              a11y="Navigate to Info Page"
              styles="p-2"
            />
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
