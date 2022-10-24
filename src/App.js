import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Header from "./Pages/Header/header";
import Home from "./Pages/Home/home";
import About from "./Pages/About/about";
import Works from "./Pages/Works/works";
import Footer from "./Pages/Footer/footer";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    color:black;
    font-family: font-family: 'Lexend Deca', sans-serif;
    text-decoration:none;
  }
  body{
    width:100%;
    background:white;
  }
`;
export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
      </Routes>
      <Footer />
    </Router>
  );
}
