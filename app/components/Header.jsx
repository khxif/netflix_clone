import Link from "next/link";
import SearchBar from "./SearchBar";
import HeaderList from "./HeaderList";

export default function Header() {
  return (
    <header className="bg-black text-white py-2 flex flex-col relative  px-10 md:px-0">
        <nav className="container flex justify-between items-center">
          <Link href='/'>
            <img 
              className="w-32" 
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
