import { AiFillDelete, BiEditAlt } from 'react-icons/all'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'


export const TableBody = ({ data }) => {
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th style={{ background: '#116b89', color: 'white' }}>Candidato</th>
                        <th style={{ background: '#116b89', color: 'white' }}>Tiempo contratacion</th>
                        <th style={{ background: '#116b89', color: 'white' }}>Salario</th>
                        <th style={{ background: '#116b89', color: 'white' }}>Banco</th>
                        <th style={{ background: '#116b89', color: 'white' }}>Cuenta</th>
                        <th style={{ background: '#116b89', color: 'white' }}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.candidate}</td>
                            <td>{item.time}</td>
                            <td>{item.salary}</td>
                            <td>{item.bank}</td>
                            <td>{item.account}</td>
                            <td>
                                <Button variant="danger">
                                    <AiFillDelete />
                                </Button>
                                <Button variant="primary">
                                    <BiEditAlt />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}