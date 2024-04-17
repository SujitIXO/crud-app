import React from 'react'
import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };
  
  return (
    <nav className="bg-black w-full justify-between align-middle px-4 py-4">
        <h1 className="text-white text-xl">Employee details</h1>
        <div>
          <button
            onClick={handleLogout}
            className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-md"
          >
            Logout
          </button>
        </div>
      </nav>
  )
}

export default Navbar