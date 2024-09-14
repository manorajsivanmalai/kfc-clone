import React from "react";
import RedBar from "./RedBar";
import styled from "styled-components";
import { Link } from "react-router-dom";
function SideMenuBar(params) {

    var categeries = [
        {
          
          title: "NEW CHICKEN ROLLS",
        },
        {
         
          title: "VALUE LUNCH SPECIALS",
        },
        {
         
          title: "CHICKEN BUCKETS",
        },
        {
        
          title: "BOX MEALS",
        },
        {
          
          title: "VALUE SNACKERS",
        },
        {
          
          title: "INTERNATIONAL BURGER FEST",
        },
        {
          
          title: "RICE BOWLZ",
        },
        {
          
          title: "BURGERS",
        },
        {
          
          title: "PERI PERI CHICKEN",
        },
          {
            title: "SNACKS",
          },
      ];
    return (
        
            <Container>
                <div className="col-12 iconandtitle">
                    <RedBar hgt="40px" wdt="14px" spc="10px" clr="red"/>
                    <h4>KFC Menu</h4>
                </div>
                <div className="col-12 sidemenu">
                      <ul>
                        {categeries.map((categery) => {
                          return (
                            <li key={categery.title}>
                              <Link to={"#"+categery.title.trim().replace(/ /g,'-')}>{categery.title}</Link>
                            </li>
                          );
                        })}
                      </ul>
                </div>
           </Container>
        
    )
}

const Container = styled.div`

.iconandtitle .threebars{
  justify-content: start !important;
}
.iconandtitle h4{
 font-size:30px;
 font-weight: 900;
 
}
 .iconandtitle {
 display: flex;
 flex-direction: column;
 gap: 30px;
 padding-left: 55px;
}
 .sidemenu ul li,.sidemenu ul li a{
   list-style: none;
   padding: 10px;
   color:#494949;
   text-decoration: none;
   font-size: 16px;
   font-weight: 600;
 }
    @media only screen and (max-width:768px){
    
    .iconandtitle{
     display:none;
    }
    .sidemenu{
       overflow-y: scroll;
    }
    .sidemenu ul{
      display: flex;
      z-index: 1000;
      justify-content: start;
      align-items: center;
      text-wrap:nowrap;
    }
   
    .sidemenu ul li{
      padding: 5px;
    }
    .sidemenu ul li a{
      font-size: 14px;
    }
  
  }
`;
export default SideMenuBar;