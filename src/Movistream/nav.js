import React from "react";


import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";

import logo from './images/logo.png';

import { IoSearch, IoNotificationsOutline, IoCaretForwardSharp } from "react-icons/io5";

import Navbar from 'react-bootstrap/Navbar';


import './nav.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";
const Main = () => {
  const [expanded, setExpanded] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     

      <Navbar
        expand="md"
        bg="dark"
        variant="dark"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
        sticky="bottom"
        className="navbar"
      >
        <Container>
          <Navbar.Brand href="#home"> <img src={logo} alt="Logo" width={90} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#popular" className="drop" onClick={() => setExpanded(false)}>Home</Nav.Link>
              <Nav.Link href="#tvshows" className="drop" onClick={() => setExpanded(false)}>TV Shows</Nav.Link>
              <Nav.Link href="#movies" className="drop" onClick={() => setExpanded(false)}>Movies</Nav.Link>
              <Nav.Link href="#anime" className="drop" onClick={() => setExpanded(false)}> Anime</Nav.Link>
              <Nav.Link href="#recent" className="drop" onClick={() => setExpanded(false)}>Recently Added</Nav.Link>
              <Nav.Link href="#webseries" className="drop" onClick={() => setExpanded(false)}>Web Series</Nav.Link>
              <Nav.Link href="/inquiry" className="drop" onClick={() => setExpanded(false)}>Inquiry</Nav.Link>
              <Nav.Link href="/login" className="drop" onClick={() => setExpanded(false)}>Logout</Nav.Link>
            </Nav>
             
              
           

          </Navbar.Collapse>
                                          
        </Container>

      </Navbar>
     
    </>
  );
};

export default Main;