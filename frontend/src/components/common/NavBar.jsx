import React, { useContext } from 'react'
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { UserContext } from '../../App';
import { NavLink } from 'react-router-dom';

const NavBar = ({ setSelectedComponent }) => {

   const user = useContext(UserContext)

   if (!user) {
      return null
   }


   const handleLogout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/";
   }
   const handleOptionClick = (component) => {
      setSelectedComponent(component);
   };

   return (
      <Navbar expand="lg" className="bg-body-tertiary shadow-sm">
         <Container fluid>
            <Navbar.Brand>
               <h3 style={{ color: 'blue' }}>Learning Path</h3>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
               <Nav className="me-auto my-2 my-lg-0 align-items-center" style={{ maxHeight: '100px' }} navbarScroll>
                  <Button
                     variant="outline-primary"
                     className="mx-1"
                     as={NavLink}
                     to="/dashboard"
                  >
                     Home
                  </Button>
                  {user.userData.type === 'Teacher' && (
                     <Button
                        variant="outline-success"
                        className="mx-1"
                        onClick={() => handleOptionClick('addcourse')}
                     >
                        Add Course
                     </Button>
                  )}
                  {user.userData.type === 'Admin' && (
                     <Button
                        variant="outline-warning"
                        className="mx-1"
                        onClick={() => handleOptionClick('cousres')}
                     >
                        Courses
                     </Button>
                  )}
                  {user.userData.type === 'Student' && (
                     <NavLink
                        onClick={() => handleOptionClick('enrolledcourese')}
                        className="btn btn-outline-info mx-1"
                        style={{ textDecoration: 'none' }}
                     >
                        Enrolled Courses
                     </NavLink>
                  )}
               </Nav>
               <Nav className="align-items-center">
                  <span className='mx-3 fw-semibold text-secondary'>Hi! {user.userData.name}</span>
                  <Button onClick={handleLogout} size='sm' variant='danger'>
                     Log Out
                  </Button>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   )
}

export default NavBar

