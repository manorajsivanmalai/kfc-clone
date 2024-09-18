import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";
import ncr from "../assets/categeries/new-chicken-roles.jpg";
import vls from "../assets/categeries/value-lunch-specials.jpg";
import cb from "../assets/categeries/chicken-buckets.jpg";
import bm from "../assets/categeries/box-meals.jpg";
import vs from "../assets/categeries/value-snackers.jpg";
import rb from "../assets/categeries/rice-bowlz.jpg";
import b from "../assets/categeries/burgers.jpg";
import fng from "../assets/categeries/finger-foods.jpg";
function Categories() {
  var categeries = [
    {
      img: ncr,
      title: "NEW CHICKEN ROLLS",
    },
    {
      img: vls,
      title: "VALUE LUNCH SPECIALS",
    },
    {
      img: cb,
      title: "CHICKEN BUCKETS",
    },
    {
      img: bm,
      title: "BOX MEALS",
    },
    {
      img: vs,
      title: "VALUE SNACKERS",
    },
    {
      img: rb,
      title: "INTERNATIONAL BURGER FEST",
    },
    {
      img: b,
      title: "RICE BOWLZ",
    },
    {
      img: fng,
      title: "BURGERS",
    },
  ];

  return (
    <Container>
      <div className="container">
        <div className="row">
          {categeries.map((categery) => {
            return (
              <div className="col-lg-3 col-6 pt-3 pb-3" key={categery.title}>
                <Link className="text-decoration-none">
                  <div>
                    <img src={categery.img} alt="" className="img-fluid" />
                  </div>
                  <div className="cate-title">
                    <h5>{categery.title}</h5>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .cate-title {
    height: 60px;
    background: #f8f7f5;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cate-title h5 {
    text-align: center;
    font-style: normal;
    font-weight: 900;
    font-size: 15px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #202124;
  }

  @media only screen and (max-width: 600px) {
    .cate-title h5 {
      font-size: 10px;
      letter-spacing: 0px;
    }
    .cate-title {
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default Categories;
