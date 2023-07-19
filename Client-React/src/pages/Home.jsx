import { AiOutlineUserAdd, BiBuildings } from 'react-icons/all'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export const Home = () => {
    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '90vh'}}>
            <div>
                <h1 style={{ marginBottom: '20px' }}>¿Que Tipo de Cuenta Quieres Crear?</h1>
                <div className="d-flex align-items-center justify-content-center" style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                    <Link to='/registration/user'>
                        <div className="card shadow d-flex align-items-center justify-content-center" style={{ width: '240px' }}>
                            <AiOutlineUserAdd size={120} style={{ color: '#808080' }} />
                            <div className="card-body">
                                <h5 className="card-title" style={{ color: '#808080' }}>Postulante</h5>
                            </div>
                        </div>
                    </Link>

                    <Link to='/registration/company'>
                        <div className="card shadow d-flex align-items-center justify-content-center" style={{ width: '240px' }}>
                            <BiBuildings size={120} style={{ color: '#808080' }} />
                            <div className="card-body">
                                <h5 className="card-title" style={{ color: '#808080' }}>Empresa</h5>
                            </div>
                        </div>
                    </Link>
                </div>
                <h2 style={{ justifyContent: 'center', display: 'flex', fontSize: '18px' }}>
                    Ya tienes una cuenta? <Link to='/login'><a style={{ background:'#06aed5', padding:'5px', borderRadius:'5px', marginLeft:'8px' }}>Iniciar Sesión</a></Link>
                </h2>
            </div>
        </Container>
    )
}