import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import { ModalCreate } from "../util/ModalCreate"

export const FormBody = () => {
    return(
        <Form>
            <Form.Group as={Col} controlId='recruitmentTime'>
                    <Form.Label>Banco</Form.Label>
                    <Form.Control type="text"/>
            </Form.Group>
        </Form>
    )
}

export const CreateBank = () =>{
    return(
        <ModalCreate 
            Entity="Banco"
            Body={<FormBody/>}
        />   
    )
}