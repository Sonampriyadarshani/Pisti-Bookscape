import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../redux/authSlice"; // Make sure this action is correct
import "./Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Added confirm password state
  const [loading, setLoading] = useState(false); // Added loading state to handle the form submission

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector((state) => state.auth.users); // Get existing users from Redux
  const error = useSelector((state) => state.auth.error); // Get any error messages

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Check if the user already exists
    if (users.some((user) => user.email === email)) {
      alert("User already exists! Please login.");
      return;
    }

    // Register the new user by dispatching the registerUser action
    const newUser = { name, email, password };
    setLoading(true);
    dispatch(registerUser(newUser));

    // Save the new user to localStorage
    localStorage.setItem("loggedInUser", JSON.stringify(newUser));

    setLoading(false);
    alert("Registration successful! Redirecting...");
    navigate("/"); // Navigate to home page after registration
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Register</h2>
        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
