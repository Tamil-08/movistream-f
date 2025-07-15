
import React ,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Buttoncontrol= () => {

    const [upadatedname, Name] = useState("");
    const [updatednum, Number] = useState("");
    const [upadatedmail, Mail] = useState("");
    const [upadatedpass, Pass] = useState("");
    const [updatephnum, Ph] = useState("");
  
  
  
  const HandleTheForm = (event) => {
    event.preventDefault();
    console.log(upadatedname);
    console.log(updatednum);
    console.log(upadatedmail);
    console.log(upadatedpass);
    console.log(updatephnum);
  };
  return(
    <>
    
    <Form onSubmit={HandleTheForm}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>ENTER THE NAME </Form.Label>
          <Form.Control
           type="Text" 
           placeholder="Enter Name" 
           onChange={(event) => {
            Name(event.target.value);
           }}
           />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAddmission">
          <Form.Label>Addmission Number</Form.Label>
          <Form.Control 
          type="number" 
          placeholder="Enter addmission number" 
          onChange={(event)=>{
            Number(event.target.value);
          }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
          type="email" 
          placeholder="Enter email"
          onChange={(event)=>{
            Mail(event.target.value)
          }} 
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          
          <Form.Control
           type="password"
            placeholder="Password" 
            onChange={(event)=>{
              Pass(event.target.value);
  
              
            }} 
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control 
          type="number" 
          placeholder="Enter phone number" 
          onChange={(event)=>{
            Ph(event.target.value);
          }}
          
          />
        </Form.Group>
  
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
  }
  export default Buttoncontrol;