import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Shared/Navbar";
import Hero from "./components/Shared/Hero";
import Footer from "./components/Shared/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Contacts from "./pages/Contacts";
import Prize from "./pages/prize";
import SingleBlogPage from "./pages/SingleBlogPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/prize" element={<Prize />} />
        <Route path="/singleblog" element={<SingleBlogPage />} />
      </Routes>
    </BrowserRouter>
  );
}
