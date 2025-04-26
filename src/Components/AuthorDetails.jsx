import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import "./AuthorDetails.css"; // (Optional, if you want to add styles)

const AuthorDetails = () => {
  const { authorSlug } = useParams();

  // Find the first book that matches the author
  const book = useSelector((state) =>
    state.books.items.find(
      (b) => b.author.toLowerCase().replace(/\s+/g, "-") === authorSlug
    )
  );

  if (!book) {
    return <p>Author not found.</p>;
  }

  return (
    <motion.div
      className="author-details-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={book.authorImage}
        alt={book.author}
        className="author-profile-img"
      />
      <div className="author-info">
        <h2>{book.author}</h2>
        <p>
          <strong>Known for:</strong> {book.title}
        </p>
        {book.Genre && (
          <p>
            <strong>Genre:</strong> {book.Genre}
          </p>
        )}
        {book.Publisher && (
          <p>
            <strong>Publisher:</strong> {book.Publisher}
          </p>
        )}
        {book.PublicationYear && (
          <p>
            <strong>Publication Year:</strong> {book.PublicationYear}
          </p>
        )}
        <p>
          <strong>About the Book:</strong> {book.description}
        </p>
      </div>
    </motion.div>
  );
};

export default AuthorDetails;
