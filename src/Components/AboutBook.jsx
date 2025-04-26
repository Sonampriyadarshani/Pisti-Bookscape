import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";
import "./AboutBook.css";
import { motion } from "framer-motion"; // for animation

const AboutBook = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const book = useSelector((state) =>
    state.books.items.find((b) => b.id === id)
  );

  const cartItem = useSelector((state) =>
    state.cart.items.find((item) => item.id === id)
  );

  const handleAddToCart = () => {
    dispatch(addToCart(book));
  };

  if (!book) return <p>Book not found.</p>;

  return (
    <motion.div
      className="book-details-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src={book.image} alt={book.title} className="book-details-img" />
      <div className="book-details-info">
        <h2>{book.title}</h2>
        <h4>by {book.author}</h4>
        <p>{book.Genre}</p>
        <p>{book.Language}</p>
        <p>{book.Format}</p>
        <p>{book.Publisher}</p>
        <p>{book.PublicationYear}</p>
        <p>{book.description}</p>
        <h3 style={{ color: "#e91e63" }}>
          {typeof book.price === "number"
            ? `${book.price.toFixed(2)}`
            : "Price not available"}
        </h3>

        {cartItem ? (
          <div className="quantity-controls">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => dispatch(decreaseQuantity(book.id))}
            >
              −
            </motion.button>
            <span>{cartItem.quantity}</span>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => dispatch(increaseQuantity(book.id))}
            >
              +
            </motion.button>
          </div>
        ) : (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className="add-to-cart-btn"
          >
            Add to Cart
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default AboutBook;
