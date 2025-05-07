import React from "react";
import { Link } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to our website!</p>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact-us">Contact</Link> | <Link to="/products">Products</Link>
      </nav>
    </div>
  );
};

export default App;
