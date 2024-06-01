import React, { useState } from "react";
import "./services.css";
import dandruf from "./Service Images/Dandruf Care.jpg";
import massauge from "./Service Images/Head-Massauge.jpg";
import Scalp from "./Service Images/Scalp-Treatment.jpg";
import facial from "./Service Images/Facial.jpg";
import cart from "./Service Images/icons8-cart-50.png";
import search from "./Service Images/icons8-search-128.png";
import "./HomePage.css";
import delet from "./Service Images/delete.png";
import wax from "./Service Images/wax.webp";
import hairtreatment from "./Service Images/hair-fall.jpg";
import smoothening from "./Service Images/straightening.jpg";
import hairdressing from "./Service Images/adult-hairdresser-shaving-customers-beard-hair-salon.jpg";
import nail from "./Service Images/healthy-beautiful-manicure-manicurist.jpg";
import coloring from "./Service Images/coloring.jpg";

export default function Service() {
  const serviceDetails = [
    {
      img: hairdressing,
      sName: "HairDressing",
      offer: 129,
      price: 249,
      description: "An Exclusive Offer For Men(HairCut+Shaving)",
      typee: "Men",
    },
    {
      sName: "Hair Care",
      offer: 2119,
      price: 3199,
      img: hairtreatment,
      description: "Hair-Care Treatment for both Men And Women",
      typee: "unisex",
    },
    {
      sName: "smoothening",
      offer: 1200,
      price: 2100,
      img: smoothening,
      description: "An Exclusive Offer For Men(HairCut+Shaving)",
      typee: "unisex",
    },
    {
      sName: "Nails",
      offer: 69,
      price: 110,
      img: nail,
      description: "An Exclusive Offer For Men(HairCut+Shaving)",
      typee: "unisex",
    },
    {
      sName: "coloring",
      img: coloring,
      offer: 999,
      price: 1699,
      description: "An Exclusive Offer For Men(HairCut+Shaving)",
      typee: "unisex",
    },
    {
      sName: "Waxing",
      offer: 699,
      price: 1199,
      img: wax,
      description: "An Exclusive Offer For Men(HairCut+Shaving)",
      typee: "FullBody",
    },
    {
      sName: "Facial",
      offer: 899,
      price: 1399,
      img: facial,
      description: "An Exclusive Offer For Men(HairCut+Shaving)",
      typee: "Face(unisex)",
    },
    {
      sName: "Scalp Treatment",
      offer: "Based On Patients Condition",
      price: "---",
      img: Scalp,
      description: "An Exclusive Offer For Men(HairCut+Shaving)",
      typee: "Face(unisex)",
    },{
      sName: "Head Massauge",
      offer: 159,
      price: 399,
      img: massauge,
      description: "An Exclusive Offer For Men(HairCut+Shaving)",
      typee: "12 Minutes",
    }
  ];
  const [empArr, setEmparr] = useState([]);
  const totalPrice = empArr.reduce((total, std) => total + std.offer, 0);
  const totalOffer = empArr.reduce((total, std) => total + std.price, 0);
  const [select, setSelect] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  function handleToCart() {
    let tocart = document.querySelector(".tmain");
    tocart.scrollIntoView({ behavior: "smooth" });
    if (empArr.length <= 0) {
      window.alert("No Items Availed Into Cart");
    }
  }

  function removeOne(index) {
    setEmparr((prev) => {
      const removeIt = [...prev];
      removeIt.splice(index, 1);
      return removeIt;
    });
    if (empArr.length <= 1) {
      setSelect(false);
    }
  }

  function handlingavail() {
    setSelect(true);
  }

  function handleAvail(service) {
    const availation = empArr.some((std) => std.sName === service.sName);
    if (!availation) {
      setEmparr((prev) => {
        return [...prev, service];
      });
    }
    handlingavail();
  }

  function revertItToOriginal() {
    setSelect(false);
    setEmparr([]);
  }

  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }

  const filteredServices = serviceDetails.filter((service) =>
    service.sName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="top">
        <div className="sMain">
          <h1>Our Services</h1>

          <div className="m-search">
            <div className="search">
              <input
                type="text"
                placeholder="Search For Services"
                value={searchTerm}
                onChange={handleSearch}
              />
              <img src={search} />
            </div>
            <div className="cart">
              <img src={cart} onClick={handleToCart} />
              <span className="cartnum" style={{}}>
                {empArr.length}
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {filteredServices.length < serviceDetails.length
              ? filteredServices.length === 1
                ? filteredServices.length + "Item Found"
                : filteredServices.length + "Items Found"
              : ""}
          </div>
          <div className="subMain">
            {filteredServices.length > 0 ? (
              filteredServices.map((std, keyy) => (
                <div>
                  <div className="details" key={keyy}>
                    <img src={std.img} alt={std.sName}></img>
                    <h3>{std.sName}</h3>
                    <div>{std.description}</div>
                    <div className="offer">
                      price:
                      <strike>
                        <span className="pofer">{std.price}</span>
                      </strike>
                      <span style={{ color: "green", fontWeight: "900" }}>
                        {std.offer}₹
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        handleAvail(std);
                      }}
                    >
                      Avail Now
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div>No matching words</div>
            )}
          </div>
        </div>
        <div className="tmain" style={{ display: select ? "grid" : "none" }}>
          <h2 style={{ textAlign: "center", border: "1px solid" }}>
            Availed Items
          </h2>
          {empArr.map((std, index) => (
            <div className="availed" key={index}>
              <div className="jio" style={{ position: "relative" }}>
                {index + 1}.)
              </div>
              <div>
                <img src={std.img} alt={std.sName} />
              </div>
              <div>{std.sName}</div>
              <div>Type : {std.typee}</div>
              <div>
                <div className="offer">
                  price:
                  <strike>
                    <span className="pofer">{std.price}</span>
                  </strike>
                  <span style={{ color: "green", fontWeight: "900" }}>
                    {std.offer}₹
                  </span>
                  <span className="jioo">
                    <img
                      onClick={() => {
                        removeOne(index);
                      }}
                      src={delet}
                      alt="Delete"
                    />
                  </span>
                </div>
              </div>
            </div>
          ))}
          <div className="offer">
            Total:
            <strike>
              <span className="pofer">{totalOffer}</span>
            </strike>
            <span style={{ color: "green", fontWeight: "900" }}>
              {totalPrice}₹
            </span>
          </div>
          <div className="buttons">
            <button onClick={revertItToOriginal}>←clear All</button>
            <button onClick={revertItToOriginal}>→Book Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
