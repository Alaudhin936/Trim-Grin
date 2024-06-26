import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import skin from "./Service Images/close-up-portrait-young-bearded-man.png";
import linkedIn from "./SliderImages/icons8-linkedin-100.png";
import facebbok from "./SliderImages/icons8-facebook-100.png";
import youtube from "./SliderImages/icons8-youtube-100.png";
import twitter from "./SliderImages/icons8-twitter-100.png";
import instagram from "./SliderImages/icons8-instagram-100.png";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css"; // Ensure the CSS file is imported
import bride from "./SliderImages/Bride.jpg";
import bdayOff from "./SliderImages/Bday-offer.jpg";
import mainImg1 from "./SliderImages/ShopImg.jpg";
import mainImg2 from "./SliderImages/Haircutshave.jpg";
import mainImg3 from "./SliderImages/WomenCut.jpg";
import mainImg4 from "./SliderImages/pexels-asadphoto-1654834.jpg";
import mainImg5 from "./SliderImages/MenBeard.jpg";

export default function HomePage() {
  const coroDetails = [
    {
      imagee: mainImg1,
      Caption1: "A Startup Unisex Salon",
      Caption2: "Experience the Future of Hair and Beauty",
    },
    {
      imagee: mainImg2,
      Caption1: "Haircut + Shaving For Men",
      Caption2: "At Just Rs 139/-",
    },
    {
      imagee: mainImg3,
      Caption1: "Womens Special",
      Caption2: "Experience With Experienced Women Hair Designer",
    },
    {
      imagee: mainImg4,
      Caption1: "Facial and Smoothening For Women",
      Caption2: "At Just Rs 1999/-",
    },
    {
      imagee: mainImg5,
      Caption1: "Beard Treatment For men",
      Caption2: "Master the Beard, Master the Look",
    },
  ];

  const [scroll, setScroll] = useState(false);
  const [scroll1, setScroll1] = useState(false);

  useEffect(() => {
    const handleScroll1 = () => {
      if (window.innerHeight < 900) {
        window.innerWidth >= 1100
          ? setScroll1(window.scrollY > 580 ? true : false)
          : setScroll1(window.scrollY > 450 ? true : false);
      } else {
        window.innerWidth >= 1100
          ? setScroll1(window.scrollY > 600 ? true : false)
          : setScroll1(window.scrollY > 500 ? true : false);
      }
    };
    window.addEventListener("scroll", handleScroll1);
    return () => {
      window.removeEventListener("scroll", handleScroll1);
    };
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight > 900) {
        window.innerWidth < 480
          ? setScroll(window.scrollY >= 20 ? true : false)
          : setScroll(window.scrollY > 10 ? true : false);
        if (window.innerWidth <= 550 && window.innerWidth >= 480) {
          setScroll(window.scrollY > 0.1 ? true : false);
        }
      } else {
        window.innerWidth < 480
          ? setScroll(window.scrollY > 10 ? true : false)
          : setScroll(window.scrollY > 150 ? true : false);
        if (window.innerWidth <= 550 && window.innerWidth >= 480) {
          setScroll(window.scrollY > 0.1 ? true : false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div style={{ width: "100vw", overflow: "hidden" }} className="carousel">
        <Carousel
          className="Carousel"
          controls={true}
          indicators={true}
          interval={3000}
        >
          {coroDetails.map((std, index) => (
            <Carousel.Item key={index}>
              <img src={std.imagee} className="d-block" alt={std.Caption1} />
              <Carousel.Caption className="carousel-caption">
                <Link to="/toService" style={{ textDecoration: "none" }}>
                  <h3 className="adah3">{std.Caption1}</h3>
                </Link>
                <p>{std.Caption2}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <hr />
      <br />

      <div className="whatcando">
        <div className="look">Look Mirror, See Yourself</div>
        <h1>What Our Stylist Engineers Can Do For You</h1>
        <div className={`bride ${scroll ? "animate" : ""}`}>
          <div>
            <img src={bride} alt="Bridal" />
          </div>
          <div className="abtbride">
            <div className="space">EXCLUSIVE BRIDAL</div>
            <div>
              <span className="space1"> Bespoke bridal looks </span>
              <span className="spacee">
                for brides that cover all services.
              </span>
            </div>
            <button>Know More</button>
          </div>
        </div>
      </div>
      <br />
      <div className="skinn">
        <div className={`skin-care ${scroll1 ? "jilo" : ""}`}>
          <div className="written">
            <div>
              <span className="space">Skin Care</span>
            </div>
            <div>
              <span className="space22">Natural Skin Care Services</span>
              <br />
              <span className="space11">
                Replenish, Rejuvenate And Revitalize Your Skin
              </span>
            </div>
            <button>Know More</button>
          </div>
          <div>
            <img src={skin} alt="Skin Care" />
          </div>
        </div>
      </div>
      <br />
      <footer>
        <div>
          <div className="agadi">Quick Links</div>
          <br />
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/toAbout">
            <li>About</li>
          </Link>
          <li>Service</li>
          <li>Salon Locator</li>
          <li>Contact Us</li>
        </div>
        <div>
          <div className="agadi">Our Services</div>
          <br />
          <li>Hair Care</li>
          <li>Skin Care</li>
          <li>Body Care</li>
          <li>Events</li>
          <li>Locate Us</li>
        </div>
        <div>
          <div className="agadi">Contact</div>
          <br />
          <b>Trim&Grin Salon Pvt Ltd</b>
          <br />
          <p>
            123 & 124, 3rd Floor, Ispahani Centre,<br></br>Nungambakkam High
            Rd,Thousand Lights<br></br> Chennai,Tamil Nadu 600034
          </p>
        </div>
        <div>
          <div className="agadi">Get In Touch</div>
          <br />
          <b>+91 9361303772</b>
          <li>
            {" "}
            <a href="mailto:ralaudhin1@gmail.com">ralaudhin1@gmail.com</a>
          </li>
          <div
            className="smImg"
            style={{
              position: "relative",
              left: "-10px",
              flexDirection: "row",
            }}
          >
            <img src={linkedIn} />
            <img src={facebbok}></img>
            <img src={twitter}></img>
            <img src={youtube}></img>
            <img src={instagram}></img>
          </div>
        </div>
      </footer>
    </div>
  );
}
