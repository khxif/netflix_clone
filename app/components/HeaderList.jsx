"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation';

export default function HeaderList() {

  const pathname = usePathname()
  //console.log(pathname);

  return (
    <div className="container px-5 md:px-0 flex space-x-6 sm:space-x-8 md:space-x-10 items-center justify-center">
              <Link className={`text-sm md:text-lg font-bold  ${pathname === '/' && 'border-b-4 border-red-700 rounded-sm'}`} href='/'  >Home</Link>
              <Link className={`text-sm md:text-lg font-bold  ${pathname === '/categories/popular' && 'border-b-4 border-red-700 rounded-sm'}`} href='/categories/popular' >Popular</Link>
              <Link className={`text-sm md:text-lg font-bold  ${pathname === '/categories/top_rated' && 'border-b-4 border-red-700 rounded-sm'}`} href='/categories/top_rated' >Top Rated</Link>
              <Link className={`text-sm md:text-lg font-bold  ${pathname === '/categories/upcoming' && 'border-b-4 border-red-700 rounded-sm'}`} href='/categories/upcoming' >Upcoming</Link>
              <Link className={`text-sm md:text-lg font-bold  ${pathname === '/genre' && 'border-b-4 border-red-700 rounded-sm'}`} href='/genre' >Genres</Link>
    </div>
  )
}
