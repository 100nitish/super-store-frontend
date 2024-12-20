import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import AdminHeader from "./AdminHeader";
import axios from "axios";


const MainDashboard = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem("users");
    try {
      setUser(JSON.parse(storedUser) || []);
    } catch (error) {
      setUser([]);
    }
  }, []);

  const handleApproved = (index) =>{

    const updatedUsers = [...user];
    updatedUsers[index].status ="accepted"
    setUser(updatedUsers);
    localStorage.setItem("users",JSON.stringify(updatedUsers))
    alert("user can login")

  }

 

  const handleDelete = (indexToDelete)=>{
    const updatedUsers=user.filter((_,index)=>
    index !== indexToDelete);
    setUser(updatedUsers);
    localStorage.setItem("users",JSON.stringify(updatedUsers));
  }




  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        <div className="flex-1 bg-gray-100 p-6">
          <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
          <p className="mt-4 text-gray-600">This is your main content area.</p>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium">#</th>
                  <th className="px-4 py-2 text-left text-sm font-medium">
                    Name
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium">
                    Email
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium">
                    Phone
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium">
                    Password
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="text-gray-700">
                {user.length > 0 ? (
                  user.map((data, index) => (
                    <tr className="border-b hover:bg-gray-100" key={index}>
                      <td className="px-4 py-3 text-sm">{index + 1}</td>
                      <td className="px-4 py-3 text-sm">{data.name}</td>
                      <td className="px-4 py-3 text-sm">{data.email}</td>
                      <td className="px-4 py-3 text-sm">{data.phone}</td>
                      <td className="px-4 py-3 text-sm">{data.password}</td>
                      <td className="px-4 py-3">
                        <label for="status">Status:</label>

                        <select
                    name="status"
                    id={`status-${index}`}
                    value={data.status || "Pending"}
                    onChange={() => handleApproved(index)}
                    className="border rounded px-2 py-1"
                  >
                    <option value="Accepted">Accepted</option>
                    <option value="Pending">Pending</option>
                  </select>
                         
                        
                        <button className="ml-4 text-red-600 hover:text-red-800" onClick={()=>handleDelete(index)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-4 text-gray-500">
                      No user data available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
