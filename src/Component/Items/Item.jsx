import React, { useState, useLayoutEffect } from "react";
import { Avatar, Pagination } from "@mui/material";
import ShortTextIcon from "@mui/icons-material/ShortText";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Item.css";
import Burger from "./Burggers/Burger";
import Categeory from "./Categeory/categeory";
import Cart from "../cart/Cart";
import { logo_api, imgapi } from "../../api";
import { useNavigate } from "react-router-dom";
import { db } from "../../Firebase/Config/Config";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const Item = () => {

  
  const navigate = useNavigate();

  const logOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then((res) => {
        alert("do you want to logout");
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const user_name = () => {};

  const viewCart = () => {
    console.log("ddd");
    navigate("/view");
  };
  const [logo, setLogo] = useState(logo_api);
  const [image, setImage] = useState(imgapi);
  const [searchTerm, setSearchTerm] = useState("");
  const [name, setName] = useState("Burgger");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const categeoryHandle = (name) => {
    console.log("name", name);
    setName(name);
  };
  return (
    <div>
      <div className="main2">
        <div className="header2">
          <div className="icons2">
            <ShortTextIcon />
          </div>
          <div className="avathar" onClick={logOut}>
            <Avatar
              sizes="12px"
              sx={{ fontSize: "12px" }}
              alt="Remy Sharp"
              // src="/static/images/avatar/1.jpg"
            >
              
            </Avatar>
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
          {logo.map((event, index) => {
            const url = event.url;
            const name = event.name;
            return (
              <div onClick={() => categeoryHandle(name)}>
                <Burger url={url} name={name} />
              </div>
            );
          })}
        </div>
        <span className="burgger-dis">{name}</span>
        <div className="categeory-list" onClick={viewCart}>
          {image.map((event, index) => {
            const url = event.url;
            const name = event.name;
            return (
              <>
                <Categeory url={url} name={name} />
              </>
            );
          })}
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
