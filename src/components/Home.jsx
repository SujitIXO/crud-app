import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [empdata, setEmpData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/employee")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log("response", res);
        setEmpData(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };

  const viewHandler = (id) => {
    navigate(`/home/employee/detail/${id}`);
  };

  const editHandler = (id) => {
    navigate(`/home/employee/edit/${id}`);
  };

  const deleteHandler = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch(`http://localhost:8000/employee/${id}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.ok) {
            setEmpData(empdata.filter((employee) => employee.id !== id));
          } else {
            throw new Error("Failed to delete.");
          }
        })
        .catch((err) => {
          console.log(err.message);
          alert("Failed to delete.");
        });
    }
  };

  return (
    <>
      <nav className="bg-black w-full justify-between align-middle px-4 py-4">
        <h1 className="text-white text-xl">Employee details</h1>
        <button
          onClick={handleLogout}
          className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-md"
        >
          Logout
        </button>
      </nav>
      <div className="mt-6 ml-6">
        <Link
          to="employee/create"
          className="text-white px-2 py-2 rounded-md bg-green-500"
        >
          Add New User
        </Link>
      </div>
      <div>
        <div className="mx-10 my-8 overflow-x-auto">
          <table className="w-full sm:w-auto text-sm sm:text-base text-left text-gray-500 border-2 border-black shadow-md">
            <thead className="text-xs sm:text-sm text-gray-700 uppercase border-b-2 border-black">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 sm:py-4 border-r-2 border-black"
                >
                  ID
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 sm:py-4 border-r-2 border-black"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 sm:py-4 border-r-2 border-black"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 sm:py-4 border-r-2 border-black"
                >
                  Phone
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 sm:py-4 border-r-2 border-black"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="align-middle">
              {empdata &&
                empdata.map((item) => (
                  <tr key={item.id} className="border-b-2 border-black">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border-r-2 border-black"
                    >
                      {item.id}
                    </th>
                    <td className="px-6 py-4 border-r-2 border-black">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 border-r-2 border-black">
                      {item.email}
                    </td>
                    <td className="px-6 py-4 border-r-2 border-black">
                      {item.phone}
                    </td>
                    <td className="justify-center align-middle items-center">
                      <a
                        onClick={() => viewHandler(item.id)}
                        className="text-white px-2 py-2 rounded-md bg-blue-500 cursor-pointer ml-4"
                      >
                        View
                      </a>
                      <a
                        onClick={() => deleteHandler(item.id)}
                        className="text-white px-2 py-2 rounded-md bg-red-500 cursor-pointer ml-4"
                      >
                        Delete
                      </a>
                      <a
                        onClick={() => editHandler(item.id)}
                        className="text-white px-2 py-2 rounded-md bg-green-500 cursor-pointer ml-4"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <footer className="bg-black w-full justify-between align-middle px-4 py-4 fixed bottom-0">
        <span className="text-white text-center align-middle text-lg">
          sujit mishra @ all copy right reserved
        </span>
      </footer>
    </>
  );
};

export default Home;
