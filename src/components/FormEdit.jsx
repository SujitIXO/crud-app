import React, { useEffect, useState} from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom';


const FormEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [empid, setEmpid] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [action, setAction] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:8000/employee/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log("response",res);
        setEmpid(res.id);
        setName(res.name);
        setEmail(res.email);
        setPhone(res.phone);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);




  const handleSubmit = (e) => {
      e.preventDefault();

      fetch(`http://localhost:8000/employee/${id}`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              name: name,
              email: email,
              phone: phone
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
    <h2 className="text-2xl font-bold mb-4">Edit Employee Page</h2>
      {
        action ?  <div className="mb-4">
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
      </div> :
      null
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

export default FormEdit