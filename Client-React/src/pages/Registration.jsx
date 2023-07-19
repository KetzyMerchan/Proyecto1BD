import { AuthContext } from './../application/AuthContext';
import { useContext, useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import logo from './../assets/Logoo.png'
import { useNavigate } from 'react-router-dom';
import { URL_AUTH } from '../endpoint/EndPoint';
import axios from 'axios'


export const Registration = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = {
        username:'Ketzy Merchan',
        password:'123456879',
        rol:'empresa'
      }
      login(user)
      navigate('/dashboard/*')
    } catch (error) {
      console.log("error");
    }
    
  };

    return (
        <Card className="w-25 mx-auto mt-5 shadow p-3 mb-5 bg-body rounded" style={{ height: "600px"}}>
        <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
          <img src={logo} alt="LogoEmpresa" style={{ maxWidth: '50%', maxHeight: '50%', background:'#06aed5', padding: '5px', borderRadius:'50%' }}></img>
          <Card.Title style ={{marginTop:'10px'}} className='mb-4 text-center'>Crear Cuenta de Empresa</Card.Title>
          <Form>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>Nombre de la Empresa</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Nombre de la empresa" 
                name = 'email'
                //onChange={handleInputChange}
              />
              <Form.Text className="text-muted">
                Nunca compartiremos tu datos privados.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control 
                type="password"
                placeholder="Contraseña"
                name = 'password'
                //onChange={handleInputChange}  
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Confirmar Contrasena</Form.Label>
              <Form.Control 
                type="password"
                placeholder="Confirmar Contraseña"
                name = 'password'
                //onChange={handleInputChange}  
              />
            </Form.Group>

            <Button onClick={handleSubmit} className="d-flex justify-content-center" variant="primary" type="submit">
              Crear Cuenta
            </Button>
          </Form>
        </Card.Body>
      </Card>
    )

}