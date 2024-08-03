import Image from "next/image"
import GenreDropdown from "./GenreDropdown"
import { ThemeToggler } from "./ThemeToggler"
import Link from "next/link"
import SearchInput from "./SearchInput"

const Header = () => {
  return (
    <header className="flex justify-between p-5">
      <Link href={'/'}>
        <Image
          className="cursor-pointer invert dark:invert-0 w-auto h-auto"
          src='https://static-assets.bamgrid.com/product/disneyplus/images/disney-plus-logo-white-update.f384bde4d5a7f1f455e2dc7d8d4348ae.png'
          alt="DisneyLogo"
          width={86}
          height={48}
          priority
        />
      </Link>
      <div className="flex gap-2 items-center">
        <GenreDropdown />
        <SearchInput />
        <ThemeToggler />
      </div>
    </header>
  )
}

export default Header