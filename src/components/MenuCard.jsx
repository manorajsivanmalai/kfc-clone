import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ch from "../assets/menu-categeries/D-K973.jpg";
import ch1 from "../assets/menu-categeries/D-K974.jpg";
import ch2 from "../assets/menu-categeries/D-PR00002324.jpg"
import ch3 from "../assets/menu-categeries/D-PR00002325.jpg"

    function MenuCard(params) {
        var menucategery = [
         
          {
             title: "NEW CHICKEN ROLLS",
              arr: [ 
                {
    
                    Name: "CHICKEN ROLL",
                    price: "$10.00",
                    catagory: "Veg",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    img:ch,
    
                },
                {
                    Name: "CHICKEN ROLL",
                    price: "$10.00",
                    catagory: "Veg",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    img: ch1,
                }]
            },
            {
                title: "NEW CHICKEN ROLLS",
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
                   }]
               }
        ]

       
        return(
            <div className="menu-card">
                <div className="container">
                  { 
                  menucategery.map((menus,i)=>{
                   return(
                       
                  
                    <div key={i}>
                 <div className="card-header" >
                        <h3>{menus.title}</h3>
                    </div>
                     <div className="row">
                     {
                         menus.arr.map((options,index)=>{
                             return(
                                    <div className="col-lg-4 col-md-6" key={index}>
                                        <div className="card">
                                            <img src={options.img} alt="" className="img-fluid" />
                                            <div className="card-body">
                                                <h5 className="card-title">{options.Name}</h5>
                                                <div className="d-flex-column">
                                                    <span>{options.catagory}</span>
                                                    <strong>{options.price}</strong>
                                                </div>
                                                <p className="card-text">{options.text}</p>
                                                <button>Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                             )
                         })
                     }
                     
                 </div>
                 </div>
                 )})
                  }
                    
                   
                </div>
            </div>
        );
    }
export default MenuCard;