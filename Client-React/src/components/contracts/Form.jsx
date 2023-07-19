import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import { ModalCreate } from "../util/ModalCreate"


export const FormBody = () => {
    return (
        <Form>
            <Row className='mb-3'>
                <Form.Group as={Col} controlId='Candidate'>
                    <Form.Label>Seleccione al Candidato</Form.Label>
                    <Form.Select aria-label="Default select example"
                        //onChange={handleInputChange}
                        name='id_Candidat'
                    >
                        <option>Seleccione un Candidato</option>
                        <option>Candidato 1</option>
                        <option>Candidato 2</option>
                        <option>Candidato 3</option>
                        <option>Candidato 4</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId='Bank'>
                    <Form.Label>Seleccione un Banco</Form.Label>
                    <Form.Select aria-label="Default select example"
                        //onChange={handleInputChange}
                        name='id_bank'
                    >
                        <option>Seleccione un Banco</option>
                        <option>Banco 1</option>
                        <option>Banco 2</option>
                        <option>Banco 3</option>
                        <option>Banco 4</option>
                    </Form.Select>
                </Form.Group>
            </Row>

            <Row className='mb-3'>
                <Form.Group as={Col} controlId='recruitmentTime'>
                    <Form.Label>Tiempo de contratacion</Form.Label>
                    <Form.Select aria-label="Default select example"
                        //onChange={handleInputChange}
                        name='id_Candidate'
                    >
                        <option>Seleccione el tiempo</option>
                        <option>1 mes</option>
                        <option>6 meses</option>
                        <option>1 año</option>
                        <option>indifinido</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId='formSalary'>
                    <Form.Label>Salario Mensual</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>$</InputGroup.Text>
                        <Form.Control aria-label="Amount (to the nearest dollar)" />
                        <InputGroup.Text>.00</InputGroup.Text>
                    </InputGroup>
                </Form.Group>
            </Row>

            <Row className='mb-3'>
                <Form.Group as={Col} controlId='recruitmentTime'>
                    <Form.Label>Tipo de sangre</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>

                <Form.Group as={Col} controlId='Salary'>
                    <Form.Label>Persona de Contacto</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
            </Row>

            <Row className='mb-3'>
                <Form.Group as={Col} controlId='emergencyNumber'>
                    <Form.Label>Telefono de Emergencia</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>

                <Form.Group as={Col} controlId='bankAccount'>
                    <Form.Label>Cuenta</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
            </Row>
        </Form>
    )
}

export const CreateContract = () =>{
    return(
        <ModalCreate
                Entity='Contrato'
                Body={<FormBody/>}
        />
    )
}