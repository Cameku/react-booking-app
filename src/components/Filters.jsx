import React from "react";
import "../scss/Filters.scss";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {
  FaMoneyBillWave,
  FaMale,
  FaHeart,
  FaDog,
  FaInfo,
} from "react-icons/fa";

const Filters = () => {
  return (
    <>
      <nav className="filtersContainer">
        <div className="filterText">
          <h4>Filters</h4>
        </div>
        <div className="filter">
          <InputGroup className="mb-3">
            <InputGroup.Text className="filterIcons">
              <FaMoneyBillWave />
            </InputGroup.Text>
            <Form.Control placeholder="Low cost" className="filterInput" />
          </InputGroup>
        </div>
        <div className="filter">
          <InputGroup className="mb-3">
            <InputGroup.Text className="filterIcons">
              <FaMale />
            </InputGroup.Text>
            <Form.Control
              placeholder="Family-friendly"
              className="filterInput"
            />
          </InputGroup>
        </div>
        <div className="filter">
          <InputGroup className="mb-3">
            <InputGroup.Text className="filterIcons">
              <FaHeart />
            </InputGroup.Text>
            <Form.Control placeholder="Romatic" className="filterInput" />
          </InputGroup>
        </div>
        <div className="filter">
          <InputGroup className="mb-3">
            <InputGroup.Text className="filterIcons">
              <FaDog />
            </InputGroup.Text>
            <Form.Control placeholder="Pet allowed" className="filterInput" />
          </InputGroup>
        </div>
      </nav>
      <div className="info">
        <FaInfo className="icon" />
        More than 500 accommodations are available in this city
      </div>
    </>
  );
};

export default Filters;
