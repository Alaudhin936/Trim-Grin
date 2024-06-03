import React, { useEffect, useState } from "react";
import { Route, Routes, Link, BrowserRouter, Navigate } from "react-router-dom";
import whiteCancel from "./Components/icons8-cancel-100.png";
import whitemenu from "./Components/white menu.png";
import "./Components/services.css";
import Service from "./Components/Service";
import down from "./Components/down-arrow.png";
import cancel from "./Components/cancel.png";
import list from "./Components/list.png";
import Logo from "./Components/Logo.png";
import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";
import Spinner from "./Components/Spinner";
import top from "./Components/top.png";

export default function App() {
  const [view, setView] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleView() {
    setView(!view);
  }

  function handleScroll() {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  const handleRouteChange = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  function handleToTop() {
    window.scrollBy({
      top: -100000,
      behavior: "smooth",
    });
  }
  return (
    <BrowserRouter>
      <div>
        <img
          onClick={handleToTop}
          src={top}
          style={{ display: scrolled ? "block" : "none" }}
          className="toupimg"
        />
        <div
          className="navigation-bar"
          style={{ backgroundColor: scrolled ? "rgb(41, 32, 24)" : "white" }}
        >
          <div>
            <img src={Logo} alt="Logo" />
          </div>
          <nav className={scrolled ? "ma" : "mo"}>
            <ul>
              <li>
                <Link to="/" onClick={handleRouteChange}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/toAbout" onClick={handleRouteChange}>
                  About
                </Link>
              </li>
              <li className="downn">
                <Link to="/toService" onClick={handleRouteChange}>
                  Services
                </Link>
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
                <Link to="/toAbout" onClick={handleRouteChange}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/toAbout" onClick={handleRouteChange}>
                  Salon Locator
                </Link>
              </li>
              <li>
                <Link to="/toAbout" onClick={handleRouteChange}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/toAbout" onClick={handleRouteChange}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
          <div className="mobileview">
            <img
              src={
                view
                  ? scrolled
                    ? whiteCancel
                    : cancel
                  : scrolled
                  ? whitemenu
                  : list
              }
              onClick={handleView}
              style={{ width: "40px" }}
              alt="menu toggle"
            />
            <div style={{ display: view ? "block" : "none" }}>
              <ul className="mob-nav">
                <li>
                  <Link
                    to="/"
                    onClick={() => {
                      handleView();
                      handleRouteChange();
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/toAbout"
                    onClick={() => {
                      handleView();
                      handleRouteChange();
                    }}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/toService"
                    onClick={() => {
                      handleView();
                      handleRouteChange();
                    }}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/toAbout"
                    onClick={() => {
                      handleView();
                      handleRouteChange();
                    }}
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/toAbout"
                    onClick={() => {
                      handleView();
                      handleRouteChange();
                    }}
                  >
                    Salon Locator
                  </Link>
                </li>
                <li>
                  <Link
                    to="/toAbout"
                    onClick={() => {
                      handleView();
                      handleRouteChange();
                    }}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/toAbout"
                    onClick={() => {
                      handleView();
                      handleRouteChange();
                    }}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="routes">
          {loading ? (
            <Spinner />
          ) : (
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/toAbout" element={<AboutPage />} />
              <Route path="/toService" element={<Service />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}
