import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <div>

        <div className="flex items-center bg-white p-3 rounded-md shadow-md">
          <AiOutlineSearch className="text-gray-500 text-lg" />
          <input
            type="text"
            placeholder="Search People by name, email, ecode..."
            className="ml-2 w-full outline-none text-gray-700"
          />
        </div>

    </div>
  )
}

export default Navbar