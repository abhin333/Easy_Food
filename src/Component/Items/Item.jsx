import React, { useState } from "react";
import { Avatar, Pagination } from "@mui/material";
import ShortTextIcon from "@mui/icons-material/ShortText";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Item.css";
import Burger from "./Burggers/Burger";
import Categeory from "./Categeory/categeory";
import Cart from "../cart/Cart";

const Item = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div>
      <div className="main2">
        <div className="header2">
          <div className="icons2">
            <ShortTextIcon />
          </div>
          <div className="avathar">
            <Avatar
              sizes="12px"
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
            />
          </div>
        </div>
        <p>Choose the Food you love</p>
        <div className="search-input">
          <Row>
            <Col sm={5}>
              <Form className="d-flex ">
                <Form.Control
                  type="search"
                  placeholder="search for the Food Items"
                  className="custom-input me-2 rounded-pill"
                  aria-label="Search"
                  style={{ width: "320px" }}
                />
              </Form>
            </Col>
          </Row>
        </div>
        <p className="categeory">Categeory...</p>
        <div className="list-items">
          <Burger />
          <Burger />
          <Burger />

        </div>
        <span className="burgger-dis">burgger</span>
        <div className="categeory-list">
          <Categeory />
          <Categeory />
          <Categeory />
          <Categeory />
          <Categeory />
          <Categeory />
        </div>
        <div className="ecllips">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
          <div className="circle4"></div>
        </div>
        <div className="cart-pic">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Item;
