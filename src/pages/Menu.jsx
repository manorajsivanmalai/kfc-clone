import React from "react";
import SideMenuBar from "../components/SideMenuBar";
import CurrentLocation from "../components/CurrentLocation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import MenuCard from "../components/MenuCard";
import styled from "styled-components";
function Menu() {
  return (
    <Container as="section" className="menu">
      <CurrentLocation />
      <div className="container">
        <div className="row">
          <div className=" stky col-lg-4">
            <SideMenuBar />
          </div>
          <div className="container stky col-lg-8">
            <div className="searchbar">
              <FontAwesomeIcon icon={faSearch} />
              <input
                type="text"
                placeholder="Search our menu"
              />
            </div>
             <MenuCard />
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  //  .stky{
  //      position: sticky;
  //      top: 0;
  //      left: 0;
  //      right: 0;
  //      bottom: 0;
  //  }
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
`;
export default Menu;
