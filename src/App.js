import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";

import AddBlog from "./components/AddBlog";

import BlogDetails from "./components/BlogDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddBlog />} />
        <Route path="/details/:id" element={<BlogDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
