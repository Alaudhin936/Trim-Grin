import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";
import bdayOff from "./SliderImages/Bday-offer.jpg";
import mainImg1 from "./SliderImages/ShopImg.jpg";
import mainImg2 from "./SliderImages/Haircutshave.jpg";
import mainImg3 from "./SliderImages/WomenCut.jpg";
import mainImg4 from "./SliderImages/pexels-asadphoto-1654834.jpg";
import mainImg5 from "./SliderImages/MenBeard.jpg";

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

export default function HomePage() {
  return (
    <div>
      <div style={{ width: "100vw", overflow: "hidden" }}>
        <Carousel controls={true} indicators={true} interval={3000}>
          {coroDetails.map((std, index) => (
            <Carousel.Item key={index}>
                <img src={std.imagee} className="d-block w-100" alt={std.Caption1} />
              <Carousel.Caption className="carousel-caption">
              <Link to="/toService" style={{textDecoration:"none"}}>   <h3 className="adah3">{std.Caption1}</h3></Link>
                <p>{std.Caption2}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <br />
      <hr />
      <br />

      
      <div className="bday">
        <h1 style={{ textAlign: "center", fontWeight: "400" }}>
          Exclusive BirthDay Offer <span style={{ color: "green", fontSize: "small" }}>Limited Offer</span>
        </h1>
        <div className="bday-offer">
          <div>
            Welcome to Trim and Grin Salon, where we're excited to introduce a special opening offer to celebrate our launch! As a token of our appreciation for your support, we are delighted to offer a fantastic deal exclusively for birthday boys. For the first two months, if you visit us on your birthday, you can enjoy a remarkable 50% discount on any of our services. Whether you're looking for a fresh haircut, a rejuvenating facial, or a professional shave, this offer allows you to indulge in premium grooming services at half the price. Join us at Trim and Grin and experience top-notch beauty and grooming treatments while celebrating your special day in style. Don't miss out on this limited-time opportunity to look and feel your best at an unbeatable price!
            <br />
            <br />
            <span style={{ color: "red" }}>Conditions :</span>
            <br />
            To take advantage of our exclusive birthday offer at Trim and Grin, customers need to fulfill a couple of simple requirements. Firstly, please bring a valid Aadhar card as proof of your birthdate to verify eligibility for the 50% discount. Additionally, to qualify for this special offer, you must have visited our salon at least once before. This ensures that our loyal customers are rewarded with this fantastic deal. We value your patronage and look forward to celebrating your special day with premium grooming services at an unbeatable price. Join us and make your birthday extra special with Trim and Grin!
          </div>
          <div>
            <img src={bdayOff} alt="Bday Offer" />
          </div>
        </div>
      </div>
    </div>
  );
}
