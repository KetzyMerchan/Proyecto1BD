import { AiFillDelete, BiEditAlt } from 'react-icons/all'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'


export const TableBody = ({ data }) => {
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th style={{ background: '#116b89', color: 'white' }}>Nombre de Usuario</th>
                        <th style={{ background: '#116b89', color: 'white' }}>Contrasena</th>
                        <th style={{ background: '#116b89', color: 'white' }}>Rol</th>
                        <th style={{ background: '#116b89', color: 'white' }}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.username}</td>
                            <td>{item.password}</td>
                            <td>{item.rol}</td>
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