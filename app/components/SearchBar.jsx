"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { FaSearch } from 'react-icons/fa'


export default function SearchBar() {

    const[searchTerm,setSearchTerm] = useState('')
    const router = useRouter()

    const handleSubmit = ( e ) => {
        e.preventDefault()
        router.push(`/search?query=${searchTerm}`)
    }

  return (
    <div className="">
       <form 
       onSubmit={handleSubmit} 
       className="flex items-center bg-white rounded-2xl py-2 px-1 md:px-3 space-x-2"
       >
            <input 
            type="text"
            value={searchTerm}
            placeholder="Search movies..."
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-1 text-red-600 font-bold focus:outline-none"
            />
            <FaSearch
             className="text-red-600 text-xl cursor-pointer"
             onClick={handleSubmit}
             />
       </form>
    </div>
  )
}
