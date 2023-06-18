"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { FaSearch } from 'react-icons/fa'


export default function SearchBar() {

    const[searchTerm,setSearchTerm] = useState('')
    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()
        router.push(`/search?query=${searchTerm}`)
        setSearchTerm('')
    }

  return (
    <div className="">
       <form 
       onSubmit={handleSubmit} 
       className="flex items-center bg-white rounded-2xl py-2 px-2 md:px-3 space-x-2 "
       >
            <input 
            type="text"
            value={searchTerm}
            placeholder="Search movies..."
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-1 md:py-1 w-20 sm:w-28 md:w-auto text-red-600 text-xs md:text-base font-bold focus:outline-none"
            />
            <FaSearch
             className="text-red-600 text-xl cursor-pointer"
             onClick={handleSubmit}
             />
       </form>
    </div>
  )
}
