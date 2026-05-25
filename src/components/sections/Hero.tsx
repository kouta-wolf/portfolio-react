import { CommonButton } from "../ui/CommonButton";
import { FaGithub } from "react-icons/fa";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-base min-h-[50vh] flex flex-col items-center justify-center gap-6 px-4 text-center"
    >
      <h1 className="text-4xl md:text-8xl font-bold">
        WelCome to My Portfolio!
      </h1>
      <p className="text-lg">
        Reactがだんだん楽しくなってきた初心者プログラマのオオカミコウタです!!
      </p>
      <CommonButton
        href="https://github.com/kouta-wolf"
        icon={FaGithub}
        brand="github"
        label="GitHub"
      />
    </section>
  );
};
