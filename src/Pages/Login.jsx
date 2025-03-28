import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Logo_glo from '../Assests/glo-logo-large.png';
import './Login.css';  // You can import CSS directly, no need to assign it to `styles`
import { Link } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:9090/auth/login", credentials);
      console.log("Login Response:", response.data);
      navigate("/"); // Navigate to the home page or dashboard on successful login
    } catch (error) {
      console.error("Login failed", error);
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

        <button className="mt-4 w-full bg-red-500 text-white py-2 rounded flex items-center justify-center space-x-2 hover:bg-red-600">
          <span className="text-lg">G</span>
          <span>Login with <strong>DUO</strong></span>
        </button>

        <div className="my-4 text-center text-gray-500">
          <i>or</i>
        </div>

        <div className="my-4 text-center text-gray-400">Use your Marvel / Windows credential to login</div>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={credentials.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex justify-content-center">
            <button type="submit" className="w-full bg-orange-500 m-2 text-white py-2 rounded hover:bg-orange-600">
              Sign in
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account? <Link to="/register" className="text-blue-500">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
