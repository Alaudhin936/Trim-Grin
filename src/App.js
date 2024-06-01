import React, { useEffect, useState } from "react";
import { Route, Routes, Link, BrowserRouter, Navigate } from "react-router-dom";
import "./Components/services.css";
import Service from "./Components/Service";
import down from "./Components/down-arrow.png";
import cancel from "./Components/cancel.png";
import list from "./Components/list.png";
import Logo from "./Components/Logo.png";
import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";

export default function App() {
  const [view, SetView] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleView() {
    SetView(!view);
  }

  function handleScroll() {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  return (
    <BrowserRouter>
      <div>
        <div
          className="navigation-bar"
          style={{ backgroundColor: scrolled ? "rgb(169, 153, 133)" : "white" }}
        >
          <div>
            <img src={Logo} alt="Logo" />
          </div>
          <nav className={scrolled ? "ma" : "mo"}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/toAbout">About</Link>
              </li>
              <li className="downn">
                <Link to="/toService">Services</Link>
                <img src={down} alt="down arrow" />
                <ul className={scrolled ? "dai" : "dai"}>
                  <li>HairDressing</li>
                  <li>Beauty</li>
                  <li>Nails</li>
                  <li>Colouring</li>
                  <li>Smoothening</li>
                  <li>Straightening</li>
                  <li>Hair-Care</li>
                  <li>Scalp Treatment</li>
                  <li>Waxing</li>
                  <li>Skin Care</li>
                  <li>Dandruff Care</li>
                  <li>Facial</li>
                  <li>Hair Care Products</li>
                  <li>Head Massage</li>
                </ul>
              </li>
              <li>
                <Link to="/toAbout">Pricing</Link>
              </li>
              <li>
                <Link to="/toAbout">Salon Locator</Link>
              </li>
              <li>
                <Link to="/toAbout">Blog</Link>
              </li>
              <li>
                <Link to="/toAbout">Contact Us</Link>
              </li>
            </ul>
          </nav>
          <div className="mobileview">
            <img
              src={view ? cancel : list}
              onClick={handleView}
              style={{ width: "40px" }}
              alt="menu toggle"
            />
            <div style={{ display: view ? "block" : "none" }}>
              <ul className="mob-nav">
                <li>
                  <Link to="/toAbout" onClick={handleView}>About</Link>
                </li>
                <li>
                  <Link to="/toService" onClick={handleView}>Services</Link>
                </li>
                <li>
                  <Link to="/toAbout" onClick={handleView}>Pricing</Link>
                </li>
                <li>
                  <Link to="/toAbout" onClick={handleView}>Salon Locator</Link>
                </li>
                <li>
                  <Link to="/toAbout" onClick={handleView}>Blog</Link>
                </li>
                <li>
                  <Link to="/toAbout" onClick={handleView}>Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="routes">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/toAbout" element={<AboutPage />} />
            <Route path="/toService" element={<Service />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
