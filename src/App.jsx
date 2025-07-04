import { BrowserRouter, Route, Routes, NavLink, Navigate } from "react-router-dom";
import React, { useState } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Article from "./pages/Article";
import Login from "./pages/Login";
import bannerImage from './banner.jpg';


function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const articles = [
    // {
    //   id: "1",
    //   title: "Welcome to the Site",
    //   author: "Erystle",
    //   body: "WELCOME! THIS IS A SHOP WHERE KAPE IS LIFE!"
    // },
    {
      id: "2",
      title: "CAFE LATTE",
      imageUrl: "https://i.pinimg.com/736x/e3/83/f9/e383f9aba12fcabbffd116323690fb57.jpg",
      author: "PHP 80.00",
      body: "There’s magic in the morning’s first sip... Our Classic Café Latte is your warm hug in a cup — smooth, creamy, and perfectly balanced to awaken your senses. Crafted with premium espresso and steamed milk, it's the ideal pick-me-up to start your day feeling refreshed, energized, and ready to take on anything. Simplicity never tasted this good!!!"
    },
    {
      id: "3",
      title: "CAFE MOCHA",
      imageUrl: "https://i.pinimg.com/736x/22/8b/72/228b72a03cb98c19063193cf0188a6a3.jpg",
      author: "PHP 120.00",
      body: "Dark as midnight, bold and deep... Mocha is your treat!!"
    },
    {
      id: "4",
      title: "VANILLA MOCHA",
      imageUrl: "https://i.pinimg.com/736x/b2/f7/84/b2f78416d1f2732cfb367665050d800b.jpg",
      author: "PHP 120.00",
      body: "Every pour speaks warmth and ease... Combination of Mocha and Sweet Vanilla!! "
    },
  ];

  return (
    <div className="App">
      <BrowserRouter>
        {/* Banner */}
        <div className="banner">
          <img src={bannerImage} alt="Site Banner" className="banner-image" />
        </div>

        {/* Navigation */}
        {authenticated && (
          <nav>
            <h1>My Products</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        )}

        {/* Routes */}
        <Routes>
          <Route
            path="/login"
            element={<Login setAuthenticated={setAuthenticated} />}
          />
          <Route
            path="/"
            element={
              authenticated ? (
                <Home articles={articles} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="/about" element={authenticated ? <About /> : <Navigate to="/login" />} />
          <Route path="/contact" element={authenticated ? <Contact /> : <Navigate to="/login" />} />
          <Route path="/articles/:urlId" element={authenticated ? <Article articles={articles} /> : <Navigate to="/login" />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
