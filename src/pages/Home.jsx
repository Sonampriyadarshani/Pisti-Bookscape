import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

// Images
import bannerImg from "../assets/banner-3.jpg";
import dance from "../assets/dance.jpg";
import book1 from "../assets/book-1.jpg";
import book2 from "../assets/book-2.jpg";
import book3 from "../assets/book-3.jpg";
import book4 from "../assets/book-4.jpg";
import book5 from "../assets/book-5.jpg";
import book6 from "../assets/book-6.jpg";
import book7 from "../assets/book-7.jpg";
import footerImage from "../assets/footer.jpg";

// ✅ New Sale Banners
import saleBanner1 from "../assets/sale-1.jpg";
import saleBanner2 from "../assets/offer-1.jpg";
import saleBanner3 from "../assets/sale-2.jpg";

const Home = () => {
  return (
    <div className="home-page">
      {/* ✅ Banner Section */}
      <div className="book-banner">
        <img src={bannerImg} alt="Banner" className="banner-img" />
      </div>

      {/* ✅ Offer Section */}
      <div className="offer-section">
        <img src={dance} alt="Special Offer" className="offer-img" />
        <div className="offer-text">
          <h2>🔥 Special Offer!</h2>
          <p>
            Celebrate the beauty of tradition with a soulful Odissi dance
            performance. Join us as we spin stories of our roots through
            graceful movements, vibrant expressions, and timeless rhythms. An
            evening of culture, art, and connection — free for everyone!
          </p>
          <Link to="/books">
            <button className="shop-now-button">Shop Now</button>
          </Link>
        </div>
      </div>

      {/* ✅ Sale Banners Section */}
      <div className="sale-banners">
        <img
          src={saleBanner1}
          alt="Sale Banner 1"
          className="sale-banner-img"
        />
        <img
          src={saleBanner2}
          alt="Sale Banner 2"
          className="sale-banner-img"
        />
        <img
          src={saleBanner3}
          alt="Sale Banner 3"
          className="sale-banner-img"
        />
      </div>
      <h2 className="banner-subtext">
        Explore books that inspire every woman.
      </h2>

      {/* ✅ Featured Books Section */}
      <div className="featured-books">
        <div className="book-grid">
          <Link to="/book/1">
            <img src={book1} alt="Book 1" className="book-img clickable-book" />
          </Link>
          <Link to="/book/2">
            <img src={book2} alt="Book 2" className="book-img clickable-book" />
          </Link>
          <Link to="/book/3">
            <img src={book3} alt="Book 3" className="book-img clickable-book" />
          </Link>
          <Link to="/book/4">
            <img src={book4} alt="Book 4" className="book-img clickable-book" />
          </Link>
          <Link to="/book/5">
            <img src={book5} alt="Book 5" className="book-img clickable-book" />
          </Link>
          <Link to="/book/6">
            <img src={book6} alt="Book 6" className="book-img clickable-book" />
          </Link>
          <Link to="/book/7">
            <img src={book7} alt="Book 7" className="book-img clickable-book" />
          </Link>
        </div>
      </div>

      {/* ✅ Footer Section */}
      <footer className="footer" id="contact">
        <p>© 2025 Pisti Bookstore | Empowering Through Stories</p>
        <p>Contact: info@pistibooks.com</p>
        <img
          src={footerImage}
          alt="Footer Business Card"
          className="footer-image"
        />
      </footer>
    </div>
  );
};

export default Home;
