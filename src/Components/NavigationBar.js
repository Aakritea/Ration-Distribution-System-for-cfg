import React from 'react'
import {Routes,Route} from 'react-router-dom';
import logo from '../Images/logo.jpg';
import Home from './Home';
import Login from './Login';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';
function NavigationBar() {
  return (
    <div>
        <div>
         <Navbar bg="light"  expand="lg">
        <Container>
          <Navbar.Brand href="/"><img src={logo} style={{height:'4rem'}}></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0" style={{fontSize:"1.3rem",maxHeight: '100px' }} navbarScroll>
            <Nav.Link><NavLink className="text-secondary " to="/" style={{ textDecoration: 'none' }}>Home</NavLink></Nav.Link>
            {/* <Nav.Link><NavLink className="text-secondary" to="stats" style={{ textDecoration: 'none' }}>Our Statistics</NavLink></Nav.Link> */}
            <Nav.Link><NavLink className="text-secondary" to="/login" style={{ textDecoration: 'none' }}>Login</NavLink></Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/stats" element={<Stats/>}/> */}
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
    </div>
  )
}

export default NavigationBar