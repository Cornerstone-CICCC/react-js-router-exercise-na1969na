import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import ProductsLayout from "./pages/products/ProductLayout.tsx";
import ProductsList from "./pages/products/ProductsList.tsx";
import ProductDetail from "./pages/products/ProductDetail.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
      <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/products" element={<ProductsLayout />}>
          <Route index element={<ProductsList />} />
          <Route path=":id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
