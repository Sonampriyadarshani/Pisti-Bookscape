import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import BookList from "./Components/BookList";
import CartPage from "./pages/CartPage";
import ProtectedRoute from "./Components/ProtectedRoute";
import Register from "./pages/Register";
import AboutBook from "./Components/AboutBook";
import AuthorDetails from "./Components/AuthorDetails"; // <-- import AuthorDetails.jsx
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Register page route */}
        <Route path="/register" element={<Register />} />

        {/* Protected home page route */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        {/* Protected book list page */}
        <Route
          path="/books"
          element={
            <ProtectedRoute>
              <BookList />
            </ProtectedRoute>
          }
        />

        {/* Protected cart page */}
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />

        {/* Protected about book page */}
        <Route
          path="/book/:id"
          element={
            <ProtectedRoute>
              <AboutBook />
            </ProtectedRoute>
          }
        />

        {/* ✅ Protected author details page */}
        <Route
          path="/author/:authorSlug"
          element={
            <ProtectedRoute>
              <AuthorDetails />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
