import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from "./pages/Login"
import { Dashboard } from './pages/Dashboard/Dashboard'
import { Home } from './pages/Home'
import { Registration } from './pages/Registration';
import { RegistrationUser } from './pages/RegistrationUser';
import { AuthContext } from './application/AuthContext';
import { useContext } from 'react';


function App() {
  const { user } = useContext(AuthContext);


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration/company" element={<Registration />} />
          <Route path="/registration/user" element={<RegistrationUser />} />
          <Route path="/dashboard/*" element={<Dashboard user={user}/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
