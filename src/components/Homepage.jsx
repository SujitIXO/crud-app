import React, { useState, useEffect } from "react";
import axios from "axios";
import InputField from "./InputField";
import Navbar from "./Navbar";

const Homepage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [empData, setEmpData] = useState([]);
  const [editId, setEditId] = useState(-1);
  const [editedName, setEditedName] = useState("");
  const [editedEmail, setEditedEmail] = useState("");
  const [editedPhone, setEditedPhone] = useState("");
  const [editedCompany, setEditedCompany] = useState("");

  const companies = [
    { value: "", label: "Select company" },
    { value: "companyA", label: "Company A" },
    { value: "companyB", label: "Company B" },
    { value: "companyC", label: "Company C" },
  ];

  useEffect(() => {
    axios
      .get("http://localhost:8000/employees")
      .then((res) => setEmpData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/employees", { name, email, phone, company })
      .then((res) => {
        console.log(res);
        setEmpData([...empData, { name, email, phone, company }]);
        setName("");
        setEmail("");
        setPhone("");
        setCompany("");
      })
      .catch((err) => console.log(err));
  };

  const editHandler = (id) => {
    setEditId(id);
    const employee = empData.find((emp) => emp.id === id);
    if (employee) {
      setEditedName(employee.name);
      setEditedEmail(employee.email);
      setEditedPhone(employee.phone);
      setEditedCompany(employee.company);
    }
  };

  const handleUpdate = (id) => {
    axios
      .put(`http://localhost:8000/employees/${id}`, {
        name: editedName,
        email: editedEmail,
        phone: editedPhone,
        company: editedCompany
      })
      .then((res) => {
        console.log(res);
        setEditId(-1);
        setEmpData(
          empData.map((emp) =>
            emp.id === id
              ? { id, name: editedName, email: editedEmail, phone: editedPhone, company: editedCompany }
              : emp
          )
        );
        setName("");
        setEmail("");
        setPhone("");
        setEditedName("");
        setEditedEmail("");
        setEditedPhone("");
        setEditedCompany("");
      })
      .catch((err) => console.log(err));
  };

  const deleteHandler = (id) => {
    axios
      .delete(`http://localhost:8000/employees/${id}`)
      .then((res) => {
        console.log(res);
        setEmpData(empData.filter((emp) => emp.id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-slate-500 h-screen w-screen">
      <Navbar />
      <div className="w-[80%] mx-auto flex flex-col justify-center align-middle text-center mt-10">
      <h1 className="text-center font-bold text-xl">New User</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-row items-center justify-between gap-4 mt-10 mb-10"
        >
          <InputField
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1"
          />
          <InputField
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
          />
          <InputField
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="flex-1"
          />
          <InputField
            type="select"
            name="company"
            value={company}
            options={companies}
            onChange={(e) => setCompany(e.target.value)}
          />
          <button
            type="submit"
            className="flex-1 bg-green-500 text-white font-semibold py-2 px-4 rounded"
          >
            Add New User
          </button>
        </form>
      </div>
      <div className="w-[80%] mx-auto">
      <h1 className="text-center font-bold text-xl">All User</h1>
        <table className="w-full divide-y divide-gray-200 mt-10">
          <thead className="bg-black text-white">
            <tr>
              <th className="px-6 py-3 text-center text-sm font-medium">
                Name
              </th>
              <th className="px-6 py-3 text-center  text-sm font-medium">
                Email
              </th>
              <th className="px-6 py-3 text-center  text-sm font-medium">
                Phone
              </th>
              <th className="px-6 py-3 text-center  text-sm font-medium">
                Company
              </th>
              <th className="px-6 py-3 text-center  text-sm font-medium">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {empData.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 text-center text-sm font-medium text-gray-900">
                  {item.id === editId ? (
                    <input
                      type="text"
                      value={editedName}
                      onChange={(e) => setEditedName(e.target.value)}
                      className="w-full px-3 py-2 m-auto placeholder-gray-400 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  ) : (
                    item.name
                  )}
                </td>
                <td className="px-6 py-4 text-center text-sm text-gray-500">
                  {item.id === editId ? (
                    <input
                      type="text"
                      value={editedEmail}
                      onChange={(e) => setEditedEmail(e.target.value)}
                      className="w-full px-3 py-2 m-auto placeholder-gray-400 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  ) : (
                    item.email
                  )}
                </td>
                <td className="px-6 py-4 text-center text-sm text-gray-500">
                  {item.id === editId ? (
                    <input
                      type="text"
                      value={editedPhone}
                      onChange={(e) => setEditedPhone(e.target.value)}
                      className="w-full px-3 py-2 m-auto placeholder-gray-400 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  ) : (
                    item.phone
                  )}
                </td>
                <td className="px-6 py-4 text-center text-sm text-gray-500">
                  {item.id === editId ? (
                    <select
                      value={editedCompany}
                      onChange={(e) => setEditedCompany(e.target.value)}
                      className="w-full px-3 py-2 m-auto placeholder-gray-400 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      {companies.map((company) => (
                        <option key={company.value} value={company.value}>
                          {company.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    item.company
                  )}
                </td>
                <td className="px-6 py-4 text-center text-sm font-medium">
                  {item.id === editId ? (
                    <button onClick={() => handleUpdate(item.id)} className="px-4 py-2 bg-sky-400 text-center">
                      Update
                    </button>
                  ) : (
                    <div className="flex justify-between">
                      <button
                        onClick={() => editHandler(item.id)}
                        className="px-4 py-2 bg-sky-400 text-center"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => deleteHandler(item.id)}
                        className="px-4 py-2 bg-sky-400 text-center"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Homepage;
