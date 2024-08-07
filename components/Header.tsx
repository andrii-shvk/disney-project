import Image from "next/image";
import GenreDropdown from "./GenreDropdown";
import { ThemeToggler } from "./ThemeToggler";
import Link from "next/link";
import SearchInput from "./SearchInput";

const Header = () => {
  return (
    <header className="fixed top-0 z-[100] flex w-full items-center justify-between bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900 p-5">
      <Link href={"/"}>
        <Image
          className="h-auto w-auto cursor-pointer invert dark:invert-0"
          src="https://static-assets.bamgrid.com/product/disneyplus/images/disney-plus-logo-white-update.f384bde4d5a7f1f455e2dc7d8d4348ae.png"
          alt="DisneyLogo"
          width={86}
          height={48}
          priority
        />
      </Link>
      <div className="flex items-center gap-2">
        <GenreDropdown />
        <SearchInput />
        <ThemeToggler />
      </div>
    </header>
  );
};

export default Header;
