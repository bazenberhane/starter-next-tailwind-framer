import Image from "next/image";
import Twitter from "../public/icons/twitter.svg";
import Github from "../public/icons/github.svg";
const SocialBar = () => {
  return (
    <div className="hidden md:flex flex-col fixed right-0 bottom-0 z-10 pr-8  items-center">
      <div className="flex flex-row sm:flex-col">
        <div className="hover:scale-125 transition-all">
          <a href="https://github.com/bazenberhane">
            <Image src={Github} alt="Github Logo" />
          </a>
        </div>
        <div className="hover:scale-125 transition-all">
          <a href="https://twitter.com/bazenberhane">
            <Image src={Twitter} alt="Twitter Logo" />
          </a>
        </div>
      </div>
      <div className="hidden md:block w-[1px] h-20 bg-black"></div>
    </div>
  );
};

export default SocialBar;
