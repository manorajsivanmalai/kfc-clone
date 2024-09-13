import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Card(params) {
    return (
        <Container >
            
                    <div className="card-main">
                        <div className="card">
                            <img src={params.img} alt="" className="img-fluid" />
                            <div className="card-body">
                                <h5 className="card-title">{params.title}</h5>
                                <p className="card-text">{params.text}</p>
                            </div>
                            <div className="card-footer">
                                <Link>View Details</Link>
                                <button className="card-btn">Apply Offer</button>
                            </div>
                        </div>
                 
            </div>
        </Container>
    );
}

const Container = styled.div`

    .card-title{
      
        font-family: "National 2 Condensed";
        font-size: 27px;
        font-weight: 700;
        line-height: 43px;
        color: #e4002b;
        text-transform: uppercase;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
  .card-text{
     text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
         display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
  }
    .card-footer{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .card-btn{
        outline: none;
        border-radius: 30px;
        background: transparent;
        padding: 10px 20px;
    }
        .card-btn:hover{
            background: black;
            color: white;
        }  
            .card-main{
            padding: 10px;
            }

         @media only screen and (max-width: 768px) {
            
            .card-main{
               padding: 4px;
            }
               .card-btn{
             padding: 8px 13px;
             font-size: 11px;
            }
            .card-footer{
                font-size: 14px;
                } 
         }   
`;
export default Card;