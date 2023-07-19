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
                    <Form.Label>Nombre de empresa</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>

                <Form.Group as={Col} controlId='Salary'>
                    <Form.Label>Nombre de usuario</Form.Label>
                    <Form.Control type="password"/>
                </Form.Group>
            </Row>

            <Row className='mb-3'>
                <Form.Group as={Col} controlId='recruitmentTime'>
                    <Form.Label>Sector</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>

                <Form.Group as={Col} controlId='Salary'>
                    <Form.Label>Persona de contacto</Form.Label>
                    <Form.Control type="password"/>
                </Form.Group>
            </Row>

        </Form>
    )
}

export const CreateCompany = () =>{

    const onSubmit =  () => {
        alert("hello word")
    }

    return(
        <ModalCreate
                Entity='Empresa'
                Body={<FormBody/>}
                onSubmit = {onSubmit}
        />
    )
}