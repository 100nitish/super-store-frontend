import React, { useState } from "react";
import axios from "axios";
import { postRegister } from "../API/PostApi";

const UserForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    status: "active",
    userType: "User", 
    secretKey: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.userType === "Admin" && formData.secretKey !== "NitishS") {
      setMessage("Invalid secret key for Admin! Please try again.");
      return;
    }

    setMessage("");

    try {
      const response = await postRegister(formData, {
        headers: { "Content-Type": "application/json" },
      });

      // const response = await axios.post("http://localhost:8000/api/auth/register", formData, {
      //   headers: { "Content-Type": "application/json" },
      // });

      setMessage("User created successfully!");
      console.log("Response:", response.data);

      
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

      
      setFormData({
        username: "",
        email: "",
        password: "",
        status: "active",
        userType: "User",
        secretKey: "",
      });
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Error creating user. Please try again.";
      setMessage(errorMsg);
      console.error("Error Response:", error.response || error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Create User</h1>
        {message && (
          <p
            className={`text-center mb-4 ${
              message.includes("successfully") ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Register As
            </label>
            <div className="flex items-center space-x-4">
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="User"
                  checked={formData.userType === "User"}
                  onChange={handleChange}
                  className="mr-2"
                />
                User
              </label>
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="Admin"
                  checked={formData.userType === "Admin"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Admin
              </label>
            </div>
          </div>

          {formData.userType === "Admin" && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Secret Key
              </label>
              <input
                type="text"
                name="secretKey"
                placeholder="Enter Secret Key"
                value={formData.secretKey}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="suspended">Suspended</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
