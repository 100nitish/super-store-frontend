import React, { useEffect, useState } from "react";
import { fetchUsers, handleUserDelete } from "../utils/userControl";
import { userData } from "../API/PostApi";
import Sidebar from "./Sidebar";
import AdminHeader from "./AdminHeader";

const MainDashboard = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers(userData, setUser, setLoading);
  }, []);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        <div className="flex-1 bg-gray-100 p-6">
          <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
          <p className="mt-4 text-gray-600">This is your main content area.</p>

          {loading ? (
            <div className="text-center py-4">Loading user data...</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium">#</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">Name</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">Email</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">Status</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">Action</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {user.length > 0 ? (
                    user.map((data, index) => (
                      <tr className="border-b hover:bg-gray-100" key={data._id}>
                        <td className="px-4 py-3 text-sm">{index + 1}</td>
                        <td className="px-4 py-3 text-sm">{data.username}</td>
                        <td className="px-4 py-3 text-sm">{data.email}</td>
                        <td className="px-4 py-3">
                          <select
                            name="status"
                            id={`status-${index}`}
                            value={data.status || "Pending"}
                            onChange={(e) =>
                              handleStatusChange(index, e.target.value)
                            }
                            className="border rounded px-2 py-1"
                          >
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                            <option value="suspended">Suspended</option>
                          </select>
                        </td>
                        <td className="px-4 py-3">
                          <button
                            className="ml-4 text-red-600 hover:text-red-800"
                            onClick={() => handleUserDelete(index, user, setUser)}
                          >
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
          )}
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
