import React, { useEffect, useState} from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom';
import InputField from '../InputField';


const FormEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [empid, setEmpid] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [designation, setDesignation] = useState("");


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
        setGender(res.gender);
        setDesignation(res.designation)
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
              phone: phone,
              gender: gender,
              designation: designation
          })
      }).then((res) => {
          alert("saved successfully")
          navigate("/home")
      }).catch((err) => {
          console.log("error")
      });
  }

  const genderOptions = [
    { value: "", label: "Select gender" },
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];


  return (
    <div className="flex flex-col justify-center items-center h-screen mx-8 md:mx-0">
    <form onSubmit={handleSubmit} className='w-full md:w-1/3 bg-gray-100 p-8 rounded-lg shadow-md'>
    <h2 className="text-2xl font-bold mb-4">Edit Employee Page</h2>
      {
        action ? 
         <InputField
          label="ID"
          type="text"
          name="id"
          value={empid}
          onChange={(e) => setEmpid(e.target.value)}
        /> :
      null
      }
       <InputField
          label="Name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      <InputField
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          label="Phone"
          type="number"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <InputField
          label="Gender"
          type="select"
          name="gender"
          value={gender}
          options={genderOptions}
          onChange={(e) => setGender(e.target.value)}
        />
        <InputField
          label="Designation"
          type="text"
          name="designation"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
        />
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
