import React, { useState } from "react";
import { Carousel, Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./Inquiry.css";

const Inquiry = () => {
 
  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [num, setNum] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async() => {
    try{
      await axios.post("http://localhost:9091/create", {
        name: name,
        num: num,
        mail: mail,
        message: message,
      }).then(() => alert("Inquery Sended"))
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div>

    <section className="contactus" id="reviews">
      <div className="backimg-testimonial py-5">
        <Container>
          <h2 className="testimonial-center">Reviews</h2>
          <hr />
          <Carousel className="my-4 ">
            <Carousel.Item>
              <div className="testi-box testi-color-1 text-white">
                <h5>"A visually arresting film..."</h5>
                <p><small>- Brady Corbet</small></p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="testi-box testi-color-2 text-white">
                <h5>"A dazzling adaptation..."</h5>
                <p><small>- Jon M. Chu</small></p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="testi-box testi-color-3 text-white">
                <h5>"A mesmerizing film..."</h5>
                <p><small>- Steve</small></p>
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>

      <div className="py-5 bg-dark text-white inquiry1">
              <Container>
                <Row className="justify-content-center inquiry">
                  <Col xs={12} md={8} lg={6}>
                    <h2 className="text-center mb-3">Need Anything? Ask Us</h2>
                    <hr />
                    <h4 className="text-center mb-4">Ask Your Queries</h4>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="tel"
                          name="num"
                          maxLength={10}
                          placeholder="Enter phone number"
                          value={num}
                          onChange={(e) => setNum(e.target.value)}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="email"
                          name="mail"
                          placeholder="Enter email"
                          value={mail}
                          onChange={(e) => setMail(e.target.value)}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Control
                          as="textarea"
                          name="message"
                          rows={3}
                          placeholder="Enter your message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                        />
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="success" type='submit'>
                          Submit
                        </Button>
                      </div>
                    </Form>
                  </Col>
                </Row>
              </Container>
              
            </div>
    </section>
    </div>
    
  );
  
};

export default Inquiry;