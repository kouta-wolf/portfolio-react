import { CommonButton } from "../ui/CommonButton";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { SiZenn } from "react-icons/si";

export const Social = () => {
  return (
    <section id="social" className="bg-base min-h-[25vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold">Socialセクション</h1>
      <div className="flex flex-row gap-8 m-4">
        <CommonButton
          href="https://github.com/kouta-wolf"
          icon={FaGithub}
          brand="github"
          label="GitHub"
        />
        <CommonButton
          href="https://x.com/o_kami_code"
          icon={FaTwitter}
          brand="twitter"
          label="Twitter"
        />
        <CommonButton
          href="https://zenn.dev/ookami_dev"
          icon={SiZenn}
          brand="zenn"
          label="Zenn"
        />
      </div>
    </section>
  );
};
