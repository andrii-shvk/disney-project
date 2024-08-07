import { footerLinks } from "@/lib/getFooterLinks";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-bgFooter mt-[100px] w-full">
      <div className="flex flex-col items-center">
        <Image
          className="h-auto w-auto cursor-pointer pt-5 invert dark:invert-0"
          src="https://static-assets.bamgrid.com/product/disneyplus/images/disney-plus-logo-white-update.f384bde4d5a7f1f455e2dc7d8d4348ae.png"
          alt="DisneyLogo"
          width={86}
          height={48}
          priority
        />
        <div className="flex flex-wrap justify-center">
          {footerLinks.map((footerLink) => (
            <Link
              href={footerLink.link}
              className="mx-[5px] my-[11px] text-[12px] -tracking-[0.1px] px-[6px]"
            >
              {footerLink.title}
            </Link>
          ))}
        </div>
        <p className="pb-6 pt-2 text-[12px] text-[#cacaca]">
          &copy; Disney. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
