import Link from "next/link";
import SearchBar from "./SearchBar";
import HeaderList from "./HeaderList";

export default function Header() {
  return (
    <header className="bg-black text-white py-2 pb-0 sm:py-2 flex flex-col relative  px-4 md:px-0">
        <nav className="container flex justify-between items-center">
          <Link href='/'>
            <img 
              className="w-24 md:w-32" 
              src='/Netflix-Logo.wine.png'
              alt="netflix-logo"
            />
          </Link>
          <SearchBar />
        </nav>
        <HeaderList />
    </header>
  )
}
