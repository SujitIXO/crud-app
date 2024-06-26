import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const FormDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [showEmpData, setShowEmpData] = useState('')

  useEffect(() => {
    fetch(`http://localhost:8000/employee/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log("response",res);
        setShowEmpData(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md bg-white shadow-md rounded-md overflow-hidden">
        <h1 className="text-center text-xl font-bold p-4">View Details Of Employee</h1>
        <div className="p-4">
          <p className="text-xl font-bold mb-2">ID: {showEmpData.id}</p>
          <h2 className="text-lg text-gray-600 mb-2">Name: {showEmpData.name}</h2>
          <p className="text-lg text-gray-600 mb-2">Email: {showEmpData.email}</p>
          <p className="text-lg text-gray-600">Phone: {showEmpData.phone}</p>
          <p className="text-lg text-gray-600">Gender: {showEmpData.gender}</p>
          <p className="text-lg text-gray-600">Designation: {showEmpData.designation}</p>
        </div>
        <div className="px-4 py-2 bg-gray-100">
          <button onClick={() => navigate("/home")} className="text-sm text-green-700 ml-2">Back</button>
        </div>
      </div>
    </div>
  )
}

export default FormDetails