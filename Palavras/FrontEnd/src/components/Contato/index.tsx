import React, { Fragment } from 'react'
import { Form, Button, Container} from "react-bootstrap"
import {Formik} from "formik"

function Contato() {
  return (
    <Fragment>
      <div className='headerSombraDoacao'></div>
      <Container style={{width: "70vw", marginBottom: 15}} className="mt-5">
      <Form action='mailto:eniofilho76@gmail.com' method='POST'>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label style={{color: "#00A97E"}}>Nome</Form.Label>
        <Form.Control type="text" placeholder="Digite seu Nome" required />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{color: "#00A97E"}}>Email</Form.Label>
        <Form.Control type="email" placeholder="Digite seu email" required />
         </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label style={{color: "#00A97E"}}>Mensagem</Form.Label>
        <Form.Control style={{ paddingBottom: "200px", margin: "0px"}}   type="text" placeholder="Escreva sua mensagem" required />
      </Form.Group>
          <Button variant="success" type="submit">
        Enviar
      </Button>
      
    </Form>
    </Container >

    </Fragment>
  )
}

export default Contato