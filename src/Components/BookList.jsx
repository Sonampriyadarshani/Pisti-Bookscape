import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./BookList.css";

const BookList = () => {
  const books = useSelector((state) => state.books?.items || []);

  return (
    <div className="featured-books">
      <h2 className="inspiration-heading">
        A Curated Collection of Courage, Growth, and Grace
      </h2>

      <div className="book-grid">
        {books.length > 0 ? (
          books.map((book) => (
            <Link key={book.id} to={`/book/${book.id}`}>
              <img
                src={book.image}
                alt={book.title}
                className="book-img clickable-book"
              />
            </Link>
          ))
        ) : (
          <p>No books available</p>
        )}
      </div>

      {/* ✅ Author Images Marquee */}
      <div className="author-marquee">
        <div className="author-track">
          {books.map((book) => (
            <Link
              to={`/author/${book.author.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <img
                src={book.authorImage}
                alt={book.author}
                className="author-img"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookList;
