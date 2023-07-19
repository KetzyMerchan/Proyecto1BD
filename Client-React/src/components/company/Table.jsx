import { AiFillDelete, BiEditAlt } from 'react-icons/all'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

export const TableBody = ({ data }) => {
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th style={{ background: '#116b89', color: 'white' }}>Nombre de la empresa</th>
                        <th style={{ background: '#116b89', color: 'white' }}>Usuario</th>
                        <th style={{ background: '#116b89', color: 'white' }}>Sector</th>
                        <th style={{ background: '#116b89', color: 'white' }}>Persona de Contacto</th>
                        <th style={{ background: '#116b89', color: 'white' }}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.sector}</td>
                            <td>{item.contactPerson}</td>
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