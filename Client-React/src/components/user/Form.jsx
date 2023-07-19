import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import { ModalCreate } from "../util/ModalCreate"


export const FormBody = () => {
    return (
        <Form>
            <Row className='mb-3'>
                <Form.Group as={Col} controlId='recruitmentTime'>
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>

                <Form.Group as={Col} controlId='Salary'>
                    <Form.Label>Contrasena</Form.Label>
                    <Form.Control type="password"/>
                </Form.Group>

                <Form.Group as={Col} controlId='Bank'>
                    <Form.Label>Rol</Form.Label>
                    <Form.Select aria-label="Default select example"
                        //onChange={handleInputChange}
                        name='id_bank'
                    >
                        <option>Seleccione Rol</option>
                        <option>Postulante</option>
                        <option>Contradato</option>
                        <option>Empresa</option>
                        <option>Administrador</option>
                    </Form.Select>
                </Form.Group>
            </Row>

        </Form>
    )
}

export const CreateUser = () =>{
    return(
        <ModalCreate
                Entity='Usuario'
                Body={<FormBody/>}
        />
    )
}