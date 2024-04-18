import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";


const Navbar = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <nav className="bg-black w-full justify-between align-middle px-4 py-4">
        <h1 className="text-white text-xl">Employee Table</h1>
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