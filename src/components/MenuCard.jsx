import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ch from "../assets/menu-categeries/D-K973.jpg";
import ch1 from "../assets/menu-categeries/D-K974.jpg";
import ch2 from "../assets/menu-categeries/D-PR00002324.jpg";
import ch3 from "../assets/menu-categeries/D-PR00002325.jpg";
import Slider from "react-slick";
import { useState } from "react";

function MenuCard(params) {
  const [currentIndex, setIndex] = useState(0);
  var settings = {
    dots: false,
    infinite: false,
    focusOnSelect: true,
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: function (index) {
      setIndex(index + 1);
    },
  };
 const [curmove, setmove] = useState(0);
  var menucategery = [
    {
      title: "NEW CHICKEN ROLLS",
      arr: [
        {
          Name: "CHICKEN ROLL",
          price: "$10.00",
          catagory: "Veg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: ch,
        },
        {
          Name: "CHICKEN ROLL",
          price: "$10.00",
          catagory: "Veg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: ch1,
        },
        {
          Name: "CHICKEN ROLL",
          price: "$10.00",
          catagory: "Veg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: ch,
        },
        {
          Name: "CHICKEN ROLL",
          price: "$10.00",
          catagory: "Veg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: ch1,
        },
        {
          Name: "CHICKEN ROLL",
          price: "$10.00",
          catagory: "Veg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: ch,
        },
        {
          Name: "CHICKEN ROLL",
          price: "$10.00",
          catagory: "Veg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: ch1,
        },
        {
          Name: "CHICKEN ROLL",
          price: "$10.00",
          catagory: "Veg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: ch,
        },
        {
          Name: "CHICKEN ROLL",
          price: "$10.00",
          catagory: "Veg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: ch1,
        },
        {
          Name: "CHICKEN ROLL",
          price: "$10.00",
          catagory: "Veg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: ch,
        },
        {
          Name: "CHICKEN ROLL",
          price: "$10.00",
          catagory: "Veg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: ch1,
        },
        {
          Name: "CHICKEN ROLL",
          price: "$10.00",
          catagory: "Veg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: ch1,
        },
      ],
    },
    {
      title: "VALUE LUNCH SPECIALS",
      arr: [
        {
          Name: "CHICKEN ROLL",
          price: "$10.00",
          catagory: "Veg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: ch2,
        },
        {
          Name: "CHICKEN ROLL",
          price: "$10.00",
          catagory: "Veg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: ch3,
        },
        {
          Name: "CHICKEN ROLL",
          price: "$10.00",
          catagory: "Veg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: ch2,
        },
        {
          Name: "CHICKEN ROLL",
          price: "$10.00",
          catagory: "Veg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: ch3,
        },
        {
          Name: "CHICKEN ROLL",
          price: "$10.00",
          catagory: "Veg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: ch2,
        },
        {
          Name: "CHICKEN ROLL",
          price: "$10.00",
          catagory: "Veg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: ch3,
        },
        {
          Name: "CHICKEN ROLL",
          price: "$10.00",
          catagory: "Veg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: ch2,
        },
        {
          Name: "CHICKEN ROLL",
          price: "$10.00",
          catagory: "Veg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: ch3,
        },
        {
          Name: "CHICKEN ROLL",
          price: "$10.00",
          catagory: "Veg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: ch2,
        },
        {
          Name: "CHICKEN ROLL",
          price: "$10.00",
          catagory: "Veg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: ch3,
        },
        {
          Name: "CHICKEN ROLL",
          price: "$10.00",
          catagory: "Veg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: ch2,
        },
        {
          Name: "CHICKEN ROLL",
          price: "$10.00",
          catagory: "Veg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: ch3,
        },
        {
          Name: "CHICKEN ROLL",
          price: "$10.00",
          catagory: "Veg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: ch2,
        },
        {
          Name: "CHICKEN ROLL",
          price: "$10.00",
          catagory: "Veg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: ch3,
        },
      ],
    },
    {
      title: "CHICKEN BUCKETS",
      arr: [
        {
          Name: "CHICKEN ROLL",
          price: "$10.00",
          catagory: "Veg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: ch2,
        },
        {
          Name: "CHICKEN ROLL",
          price: "$10.00",
          catagory: "Veg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: ch3,
        },
        {
          Name: "CHICKEN ROLL",
          price: "$10.00",
          catagory: "Veg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: ch2,
        },
        {
          Name: "CHICKEN ROLL",
          price: "$10.00",
          catagory: "Veg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: ch3,
        },
        {
          Name: "CHICKEN ROLL",
          price: "$10.00",
          catagory: "Veg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: ch2,
        },
        {
          Name: "CHICKEN ROLL",
          price: "$10.00",
          catagory: "Veg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: ch3,
        },
        {
          Name: "CHICKEN ROLL",
          price: "$10.00",
          catagory: "Veg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: ch2,
        },
        {
          Name: "CHICKEN ROLL",
          price: "$10.00",
          catagory: "Veg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: ch3,
        },
        {
          Name: "CHICKEN ROLL",
          price: "$10.00",
          catagory: "Veg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: ch2,
        },
        {
          Name: "CHICKEN ROLL",
          price: "$10.00",
          catagory: "Veg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: ch3,
        },
        {
          Name: "CHICKEN ROLL",
          price: "$10.00",
          catagory: "Veg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: ch2,
        },
        {
          Name: "CHICKEN ROLL",
          price: "$10.00",
          catagory: "Veg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: ch3,
        },
        {
          Name: "CHICKEN ROLL",
          price: "$10.00",
          catagory: "Veg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: ch2,
        },
        {
          Name: "CHICKEN ROLL",
          price: "$10.00",
          catagory: "Veg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          img: ch3,
        },
      ],
    },
  ];
  const [view, setView] = useState(true);
  return (
    <Container className="menu-card">
      <div className="menu-content pt-5 pb-4">
        {menucategery.map((menus, i) => {
          return (
            <div key={i} style={{ backgroundColor: i === 0 ? "#f8f7f5" : "" }}>
              <div className={i === 0 ? "card-header p-4" : "card-header"}>
                <h3 id={menus.title.trim().replace(/ /g, "-")}>
                  {menus.title}
                </h3>
                <div>{i===curmove?currentIndex + "/" + menus.arr.length:""}</div>
              </div>

              <div className="row">
                {window.innerWidth <= 768 || view ? (
                  <Slider {...settings}>
                    {menus.arr.map((options, index) => {
                      return (
                        <div className="col-lg-4 col-md-6 card-box" key={index} onTouchMove={()=>setmove(i)}>
                          <div
                            className="card"
                            style={
                              i === 0 && window.innerWidth > 768
                                ? {
                                    width: "90%",
                                    backgroundColor: "#f8f7f5",
                                    border: "none",
                                  }
                                : {}
                            }
                          >
                            <img
                              src={options.img}
                              alt=""
                              className="img-fluid"
                            />
                            <div className="card-body">
                              <h5 className="card-title">{options.Name}</h5>
                              <div className="d-flex pt-1">
                                <span className="card-text1 pb-2">
                                  <img
                                    className="menu-vegOrNonVeg-icon"
                                    alt=" "
                                    src="https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg"
                                  />{" "}
                                  {options.catagory}
                                </span>
                                <strong>{options.price}</strong>
                              </div>
                              <p className="card-text">{options.text}</p>
                              <button onClick={() => setView(!view)}>
                                Add to cart{" "}
                                <img
                                  src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
                                  alt=""
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </Slider>
                ) : (
                  menus.arr.map((options, index) => {
                    return (
                      <div
                        className={
                          i === 0
                            ? "col-lg-6 col-md-6"
                            : "col-lg-4 col-md-6 card-box"
                        }
                        key={index}
                      >
                        <div
                          className="card"
                          style={
                            i === 0
                              ? {
                                  width: "90%",
                                  backgroundColor: "#f8f7f5",
                                  border: "none",
                                }
                              : {}
                          }
                        >
                          <img src={options.img} alt="" className="img-fluid" />
                          <div className="card-body">
                            <h5 className="card-title">{options.Name}</h5>
                            <div className="d-flex pt-1">
                              <span className="card-text1 pb-2">
                                <img
                                  className="menu-vegOrNonVeg-icon"
                                  alt=" "
                                  src="https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg"
                                />{" "}
                                {options.catagory}
                              </span>
                              <strong>{options.price}</strong>
                            </div>
                            <p className="card-text">{options.text}</p>
                            <button>
                              Add to cart{" "}
                              <img
                                src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
                                alt=""
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
const Container = styled.div`
  overflow: hidden;
  .card-header {
    padding: 18px 0px;
  }

  .menu-content .row .col-lg-6 {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card-box {
    padding: 10px;
  }

  .menu-content .row .card button {
    background: red;
    border: none;
    padding: 9px 32px;
    border-radius: 30px;
    color: #ffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 11px;
    margin-left: 25px;
  }
  .card-body > div {
    flex-direction: column;
    justify-content: space-between;
  }
  .card {
    box-shadow: 0 2px 29px rgba(0, 0, 0, 0.15);
  }
  @media only screen and (max-width: 768px) {
    .card-text1 {
      display: flex;
      justify-content: space-evenly;
      gap: 10px;
    }
    .card-body > div {
      flex-direction: row-reverse;
      justify-content: space-between;
    }
    .menu-content .row .card button {
      padding: 10px 22px;
      gap: 10px;
      margin-left: 10px;
    }
    .card-title {
      font-size: 15px;
      font-weight: 700;
    }
    .card-header {
      font-size: 18px;
      font-weight: 700;
    }
    .menu-content .row {
      width: 120%;
    }
    .card-header {
      display: flex;
      justify-content: space-around;
    }
  }
`;

export default MenuCard;
