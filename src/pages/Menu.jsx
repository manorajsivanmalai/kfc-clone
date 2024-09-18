import React from "react";
import SideMenuBar from "../components/SideMenuBar";
import CurrentLocation from "../components/CurrentLocation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import MenuCard from "../components/MenuCard";
import styled from "styled-components";
import {useState } from 'react';
function Menu() {

  const [search , setSearch] = useState("");

  console.log(search);
  
  return (
    <Container as="section" className="menu">
      <CurrentLocation />
      <div className="container">
        <div className="row">
          <div className="stky col-lg-4">
            <SideMenuBar />
          </div>
          <div className="container col-lg-8">
            <div className="searchbar">
              <FontAwesomeIcon icon={faSearch} />
              <input
                type="text"
                placeholder="Search our menu"
                onInput={(e) => setSearch(e.target.value)}
              />
            </div>
             <MenuCard search={search}/>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
    .stky{
          position: sticky;
          top: 174px;
          height: 100%;
    }
  .searchbar {
    padding: 39px 0px 28px 0px;
    border-bottom: 3px solid #767171;
  }
  .searchbar svg {
    position: relative;
    left: 24px;
    font-size: 13px;
    color: #767171;
  }
  .searchbar input {
    border-radius: 38px;
    outline: none;
    padding: 3px 4px 3px 32px;
    font-size: 14px;
    border: 2px solid #e3e3e3;
  }

  @media only screen and (max-width:768px){
  
      .stky{
        position: sticky;
        top: 112px;
        height: 100%;
         z-index: 10;
        background: #ffffff;
    }  
    .searchbar{
       position: sticky;
        top: 162px;
        z-index: 10;
        background: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
    
    }    
  .searchbar {
    padding: 0px 0px 10px 0px;
    border-bottom: 1px solid #767171;
  }
  .sidemenu::-webkit-scrollbar {
    display: none;
}
  }
`;
export default Menu;
