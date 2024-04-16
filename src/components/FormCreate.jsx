import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const FormCreate = () => {

    const [id, setid] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState(""); 
    const [designation, setDesignation] = useState(""); 
    const [action, setAction] = useState(false)

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:8000/employee", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name || "N/A",
                email: email || "N/A",
                phone: phone || "N/A",
                gender: gender || "N/A",
                designation: designation || "N/A",
            })
        }).then((res) => {
            alert("saved successfully")
            navigate("/home")
        }).catch((err) => {
            console.log("error")
        });
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen mx-8 md:mx-0">
            <form onSubmit={handleSubmit} className='w-full md:w-1/3 bg-gray-100 p-8 rounded-lg shadow-md'>
                <h2 className="text-2xl font-bold mb-4">Add new employee details</h2>
                {
                    action ? <div className="mb-4">
                        <label htmlFor="id" className="block text-gray-700 font-bold mb-2">
                            ID
                        </label>
                        <input
                            type="text"
                            id="id"
                            name="id"
                            value={id}
                            disabled
                            className="block w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                        />
                    </div>
                        : null
                }

                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="block w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="block w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
                        Phone
                    </label>
                    <input
                        type="number"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        className="block w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">
                        Gender
                    </label>
                    <select
                        id="gender"
                        name="gender"
                        value={gender}
                        onChange={e => setGender(e.target.value)}
                        className="block w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                    >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="designation" className="block text-gray-700 font-bold mb-2">
                        Designation
                    </label>
                    <input
                        type="text"
                        id="designation"
                        name="designation"
                        value={designation}
                        onChange={e => setDesignation(e.target.value)}
                        className="block w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Save
                </button>
                <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4"
                >
                    <Link to="/home">Back</Link>
                </button>
            </form>
        </div>
    )
}

export default FormCreate
