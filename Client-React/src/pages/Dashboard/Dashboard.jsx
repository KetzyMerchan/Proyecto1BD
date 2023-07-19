import { Link, Route, Routes } from "react-router-dom";
import { MdDashboard, 
  AiOutlineUsergroupAdd, 
  AiTwotoneSetting,
  MdOutlineSupervisedUserCircle, 
  BiBuildings,
  RiLogoutBoxFill,
  AiOutlineBank,
  BsPaypal,
  BsFileEarmarkSpreadsheet,
  AiOutlineFileDone,
} from 'react-icons/all'



import logo from './../../assets/logoo.png'
import './style.css'

import { Setting } from './../../components/setting/Setting'
import { Home } from '../../components/home/Home'
import { Banks } from '../../components/banks/Banks'
import { Company} from '../../components/company/Company'
import { Vacant} from '../../components/vacant/Vacant'
import { Payroll} from '../../components/payroll/Payroll'
import { Contracts} from '../../components/contracts/Contracts'
import { User } from '../../components/user/User'
import { ReceiptPayment } from "../../components/receiprPayment/ReceiptPayment";

export const Dashboard = ({ user }) => {


  let options = { day: 'numeric', month: 'long', year: 'numeric' }
  let CurrentDate = new Date().toLocaleDateString('es-ES', options);

  const menuLinks = [
    { title: 'Inicio', rol: ['admin', 'empresa', 'contratado', 'postulante'], path: '*', icon: MdDashboard, component: Home },
    { title: 'pagos', rol: ['contratado'], path: 'pagos', icon: BsPaypal, component: ReceiptPayment },
    { title: 'Usuarios', rol: ['admin'], path: 'usuarios', icon: AiOutlineUsergroupAdd, component: User },
    { title: 'Bancos', rol: ['admin', 'empresa'], path: 'bancos', icon: AiOutlineBank, component: Banks },
    { title: 'Empresas', rol: ['admin'], path: 'empresas', icon: BiBuildings, component: Company },
    { title: 'Vacantes', rol: ['admin', 'empresa', 'postulante', 'contratado'], path: 'vacantes', icon: MdOutlineSupervisedUserCircle, component: Vacant },
    { title: 'Nomina', rol: ['empresa'], path: 'nomina', icon: BsFileEarmarkSpreadsheet, component: Payroll },
    { title: 'Contratos', rol: ['candidato','empresa'], path: 'contratos', icon: AiOutlineFileDone, component: Contracts },
    { title: 'Contancia', rol: ['contratado'], path: 'Contancia', icon: AiOutlineFileDone, component: Contracts },
    { title: 'Perfil', rol: ['admin', 'empresa', 'contratado', 'postulante'], path: 'configuracion', icon: AiTwotoneSetting, component: Setting },
    { title: 'Cerrar Seccion', rol: ['admin', 'empresa', 'contratado', 'postulante'], path: '/', icon: RiLogoutBoxFill }
  ]

  return (

    <div className="page">
      {/* ---Header Dashboard--- */}
      <header>
        <h1 style={{ fontSize: '18px', color: '#116b89', fontWeight: '600' }}>BIENVENIDO AL PANEL DE CONTROL</h1>
        <p>{CurrentDate}</p>
      </header>

      {/* ---Aside Dashboard--- */}
      <aside>
        <div className="header_aside">
          <img src={logo} alt="LogoEmpresa" style={{ maxWidth: '100%', maxHeight: '100%' }}></img>
          <span>Panel de Control</span>
        </div>
        <ul className='list_dashboard'>
          {
            menuLinks.map((link) => {
              if (link.rol.includes(user.rol)) {
                return (
                  <Link key={link.path} to={link.path}>
                    <li>
                      <a>
                        <link.icon />
                        {link.title}
                      </a>
                    </li>
                  </Link>
                );
              }
              return null;
            })
          }
        </ul>
      </aside>

      {/* ---Main Dashboard--- */}
      <main className="overflow-auto" style={{ height: '700px' }}>
        <Routes>
          {
            menuLinks.map((link) => {
              return (
                <Route path={'/' + link.path} element={<link.component />} />
              )
            })
          }
        </Routes>
      </main>
    </div>
  )
}
