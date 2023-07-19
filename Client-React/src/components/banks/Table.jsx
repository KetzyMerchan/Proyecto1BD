import { AiFillDelete, BiEditAlt } from 'react-icons/all'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

export const TableBody = ({ data }) => {
    return(
        <Table striped bordered hover>
                <thead>
                    <tr>
                        <th style={{ background: '#116b89', color: 'white' }}>Bancos</th>
                        <th style={{ background: '#116b89', color: 'white' }}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
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
    )
}