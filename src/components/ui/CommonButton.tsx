import type { IconType } from "react-icons";

interface CommonButtonProps {
  href: string;
  label: string;
  brand: "github" | "zenn" | "twitter";
  icon: IconType;
}

export const CommonButton = ({ href, icon: Icon, brand, label }: CommonButtonProps) => {
  const brandClasses = {
    github: "bg-[#24292e] hover:bg-black",
    twitter: "bg-[#1da1f2] hover:bg-[#1a91da]",
    zenn: "bg-[#3ea8ff] hover:bg-[#2c96f3]",
    default: "bg-gray-600",
  };
  return (
    <a
      href={href}
      target="_blank"
      className={`flex items-center gap-2 px-4 py-2 text-white rounded ${brandClasses[brand]}`}
    >
      {Icon && <Icon size={20} />}
      <span>{label}</span>
    </a>
  );
};
