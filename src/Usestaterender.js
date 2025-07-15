import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Buttoncontrol=()=>{

  const[updateValues, setUpdateValues]=useState({

     inputfirstName:"",
     inputlastName:"",
  });

 const HandleSubmitted=(event)=>{

  event.preventDefault();
  const {inputfirstName, inputlastName} = updateValues;
console.log(inputfirstName);
console.log(inputlastName);




};
return(
  
  <>
  <Form onSubmit={HandleSubmitted} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            value={updateValues.inputfirstName}
            onChange={(event) =>{

              setUpdateValues({
                ...updateValues, inputfirstName:event.target.value
              });
            }}
            placeholder="First Name"
          />
        </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            onChange={(event) =>{
              
              setUpdateValues({
                ...updateValues, inputlastName:event.target.value
              });
            }}
            placeholder="Last Name"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>

        </Form>
  </>
  
);
}
export default Buttoncontrol