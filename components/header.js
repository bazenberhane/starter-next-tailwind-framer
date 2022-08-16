import FullLink from "./fullLink";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <header className="absolute z-10 px-8 py-4 w-full">
      <div className="flex flex-wrap items-center">
        <motion.span
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <FullLink
            label="Logo"
            to="/"
            a11y="Navigate to Home Page"
            styles="text-[1.8rem]"
          />
        </motion.span>
        <nav className="flex ml-auto space-x-4 text-md">
          <motion.span
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <button
              className=" w-[30px] md:w-[37px] h-[30px] md:h-[37px] bg-black dark:bg-white rounded-full"
              onClick={() => toggleTheme()}
              aria-label="Toggle Dark Mode"
            ></button>
          </motion.span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
