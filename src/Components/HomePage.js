import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import skin from "./Service Images/close-up-portrait-young-bearded-man.png";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";
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
      window.innerWidth >= 1100
        ? setScroll1(window.scrollY > 600 ? true : false)
        : setScroll1(window.scrollY > 530 ? true : false);
    };
    window.addEventListener("scroll", handleScroll1);
    return () => {
      window.removeEventListener("scroll", handleScroll1);
    };
  });
  useEffect(() => {
    const handleScroll = () => {
      window.innerWidth < 450
        ? setScroll(window.scrollY > 0.01 ? true : false)
        : setScroll(window.scrollY > 50 ? true : false);
      if (window.innerWidth <= 550 && window.innerWidth >= 480) {
        setScroll(window.scrollY > 0.1 ? true : false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div style={{ width: "100vw", overflow: "hidden" }}>
        <Carousel controls={true} indicators={true} interval={3000}>
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
      <br />
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
      <br></br>
      <div className="skinn">
        <div className={`skin-care ${scroll1 ? "jilo" : ""}`}>
          <div className="written">
            <div>
              <span className="space">Skin Care</span>
            </div>
            <div>
              <span className="space22">Natural Skin Care Services</span>
              <br></br>
              <span className="space11">
                Replenish,Rejuvenate And Revitalize Your Skin
              </span>
            </div>
            <button>Know More</button>
          </div>
          <div>
            <img src={skin} />
          </div>
        </div>
      </div>
    </div>
  );
}
