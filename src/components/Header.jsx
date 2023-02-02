import React from "react";
import "../scss/Header.scss";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="header">
        <div className="vacation">
          <p className="dreamVacation">Find a place for your dream vacation</p>
          <p>Downtown or in nature</p>
        </div>
        <div className="searchBox">
          <InputGroup className="mb-3">
            <InputGroup.Text className="input-left">
              <FaMapMarkerAlt />
            </InputGroup.Text>
            <Form.Control placeholder="Marselle, France" />
            <InputGroup.Text className="input-right">Search</InputGroup.Text>
            <InputGroup.Text className="input-right-mobile">
              <FaSearch />
            </InputGroup.Text>
          </InputGroup>
        </div>
      </div>
    </div>
  );
};

export default Header;
