import Card from 'react-bootstrap/Card';
import {
    MdDashboard,
    AiFillDollarCircle
} from 'react-icons/all'
import {vacant} from './VacantData'
import { AuthContext } from './../../application/AuthContext';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button'

export const Vacant = () => {

    const { user } = useContext(AuthContext);

    return (
        <>
            <container  className = 'container'>
                {vacant.map((item, index) => (
                    <Card style={{ minWidth: '18rem', marginBottom:'10px'}}>
                        <Card.Body>
                            <Card.Title>{item.jobTitle}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{item.profession}</Card.Subtitle>
                            <Card.Text>
                                {item.description}
                            </Card.Text>
                            <AiFillDollarCircle style={{ marginRight: '10px' }} />{item.salary}
                        </Card.Body>
                        {user.rol == 'postulante' && <Button variant="primary">Postular</Button>}
                    </Card>
                ))}
            </container>
        </>
    )
}