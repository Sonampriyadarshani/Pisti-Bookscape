import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/authSlice";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // ✅ Get the logged-in user from Redux
  const loggedInUser = useSelector((state) => state.auth?.loggedInUser);

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    setMenu("Contact");
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/"); // Redirect to homepage after logout
    window.location.reload(); // Refresh the page to update the UI
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">
          <img src={logo} alt="Pisti Logo" className="navbar-logo" />
        </Link>
        <h1>Welcome to Pisti Bookstore</h1>
      </div>

      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </Link>
        <Link
          to="/books"
          onClick={() => setMenu("Books")}
          className={menu === "Books" ? "active" : ""}
        >
          BookList
        </Link>
        <span
          onClick={handleContactClick}
          className={menu === "Contact" ? "active" : ""}
          style={{ cursor: "pointer" }}
        >
          Contact us
        </span>
      </ul>

      <div className="nav-right">
        <Link to="/cart">
          <FaShoppingCart size={20} />
        </Link>
        {loggedInUser ? (
          <button className="navbar-button" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link to="/register">
            <button className="navbar-button">Register</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
