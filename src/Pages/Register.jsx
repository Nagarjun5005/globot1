import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";  // Import useNavigate
import Logo_glo from "../Assests/glo-logo-large.png";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate(); // Use the hook to navigate
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Concatenate first and last name to create the name field
    const fullName = `${formData.firstName} ${formData.lastName}`;

    // Create a new form data object to send
    const dataToSend = {
      email: formData.email,
      name: fullName,
      password: formData.password
    };

    try {
      const response = await axios.post("http://localhost:9090/auth/register", dataToSend);
      console.log("Registration successful:", response.data);
      
      // After successful registration, navigate to the login page
      navigate("/login"); // Programmatic navigation to /login page
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <img src={Logo_glo} alt="Logo" className="w-20 mb-4 bg-black p-3 py-4 rounded-full" />
          <h2 className="text-lg font-semibold text-gray-700 text-center">
            Marvel’s Social Collaboration Platform
          </h2>
        </div>
        <div className="my-4 text-center text-gray-500 styles.or-seperator"> <i>Register with your details</i> </div>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="w-1/2 p-2 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="w-1/2 p-2 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full p-2 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
          >
            Register
          </button>
        </form>
        <p className="text-sm text-gray-600 text-center mt-4">
          Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
