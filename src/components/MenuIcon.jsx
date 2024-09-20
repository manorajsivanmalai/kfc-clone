import React from "react"
import styled from "styled-components"
import sigin from "../assets/signinicon.jpg";
import { Link } from "react-router-dom";
import menu from "../assets/menu.jpg";
import deal from "../assets/deals.jpg";
function MenuIcon({icon}) {
 console.log(icon);
    const Container=styled.div`
    overflow: hidden;
    padding: 20px;
    color: black;  
   
   .animieAdd{
    display: block;
    animation: animate 0.5s linear;
   }
    .hide{
     display: none;
    }
    @keyframes animate{
        0%{
            transform: translateX(-200px);
        }
        100%{
            transform: translateX(10px);
        }
    }
    .title{
            display: flex;
            flex-direction: column;
            gap: 20px;
            padding: 28px;
        }
      
       .title h4{
           font-weight: 900;
           font-size: 33px;
           width: 127px;
       }
     .col-12 a{
         display: flex;
         justify-content: space-between;
         align-items: center;
         background-color: #e3e3e3;
         margin-top: 10px;
         text-decoration: none;
         color: black;
      }
      .col-12 h4{
         padding: 30px;
      }   
   
    ul li,ul li a{
        list-style: none;
        margin-top: 10px;
        text-decoration: none;
        color: black;
        font-weight: 600;
      
    }
        ul{
         padding: 18px;
        }
    .footer{
      background-color: #e3e3e3;
      padding: 10px;
      margin-top: 30px
    }
    .signin{
        border:none;
        background-color: transparent;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    `;

  return (
     <Container >
        <div className={!icon.iconchange ? "animieAdd" : "hide"}>
       <div className="title">
             <h4>lets get cookin</h4>
            <div>
                <Link to="/" className="signin">
                <img src={sigin} alt="sigin" />
                <span>Sign In / sigin Up -</span>
                </Link>
            </div>     
       </div>
       
        <div className="col-12">
             <Link to={"/menu"} onClick={() => icon.seticonchange(pre=>!pre)}> <div><h4>Menu</h4></div>
             <div><img src={menu} alt="" className="img-fluid" /></div></Link>
        </div>
        <div className="col-12">
          <Link to={"/deal"} onClick={() => icon.seticonchange(pre=>!pre)}>
          <div><h4>Deal</h4></div>
          <div><img src={deal} alt="" className="img-fluid" /></div>
          </Link>
        </div>
     
       <div className="footer">
            <ul>
                <li>
                    <Link>Get Help</Link>
                </li>
                <li>
                    <Link>Contact Us</Link>
                </li>
                <li>
                    <Link>Kfc FeedBack</Link>
                </li>
                <li>
                    <Link>Privacy policy</Link>
                </li>
            </ul>
       </div>
       </div></Container>
  )

 

}
export default MenuIcon