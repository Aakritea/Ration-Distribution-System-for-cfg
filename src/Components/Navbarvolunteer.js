import React from 'react'
import Button from 'react-bootstrap/Button';
import {Routes,Route} from 'react-router-dom';
import logo from '../Images/logo.jpg';
import Home from './Home';
import Stats from './Stats';
import VerifiyPatient from './VerifiyPatient';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';
import { clearLoginStatus } from "../Slices/adminSlice";
import {useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";
function Navbarvolunteer() {
    let dispatch = useDispatch();
    let navigate=useNavigate();
    const handleSubmit=()=>{
         localStorage.clear();
         dispatch(clearLoginStatus());
         navigate("/login");
    }
  return (
    <div>
        <Navbar bg="light"  expand="lg">
        <Container>
          <Navbar.Brand href="/"><img src={logo} style={{height:'4rem'}}></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0" style={{fontSize:"1.3rem",maxHeight: '100px' }} navbarScroll>
            <Nav.Link><NavLink className="text-secondary " to="" style={{ textDecoration: 'none' }}>Home</NavLink></Nav.Link>
            <Nav.Link><NavLink className="text-secondary" to="/stats" style={{ textDecoration: 'none' }}>Our Statistics</NavLink></Nav.Link>
            <Nav.Link><NavLink className="text-secondary" to="/verifiypatient" style={{ textDecoration: 'none' }}>Verifiy-patient</NavLink></Nav.Link>
            <Button variant="outline-success" onClick={handleSubmit}>Logout</Button>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/stats" element={<Stats/>}/>
        <Route path="/verifiypatient" element={<VerifiyPatient/>}/>
      </Routes>
    </div>
  )
}
export default Navbarvolunteer;