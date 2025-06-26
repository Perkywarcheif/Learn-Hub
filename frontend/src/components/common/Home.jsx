import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Nav, Button, Navbar } from 'react-bootstrap';
import AllCourses from './AllCourses';

const Home = () => {
   // Add a ref for the trending courses section
   const trendingRef = React.useRef(null);

   // Scroll handler for the Explore Courses button
   const handleExploreClick = () => {
      if (trendingRef.current) {
         trendingRef.current.scrollIntoView({ behavior: 'smooth' });
      }
   };

   return (
      <>
         <Navbar expand="lg" className="bg-gradient shadow-sm" style={{ background: 'linear-gradient(90deg, #43cea2 0%, #185a9d 100%)' }}>
            <Container fluid>
               <Navbar.Brand>
                  <h2 style={{ fontStyle: 'italic', color: 'black', letterSpacing: 2 }}> Learning Path</h2>
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="navbarScroll" />
               <Navbar.Collapse id="navbarScroll">
                  <Nav className="me-auto my-2 my-lg-0" navbarScroll />
                  <Nav>
                     <Link to={'/'}>
                        <Button variant="light" className="mx-1 fw-bold">Home</Button>
                     </Link>
                     <Link to={'/login'}>
                        <Button variant="light" className="mx-1 fw-bold">Login</Button>
                     </Link>
                     <Link to={'/register'}>
                        <Button variant="warning" className="mx-1 fw-bold">Register</Button>
                     </Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>

         <div
            id='home-container'
            className='first-container d-flex align-items-center justify-content-center'
            style={{
               minHeight: '60vh',
               background: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
               color: '#222',
               textAlign: 'center'
            }}
         >
            <div className="content-home">
               <h1 className="display-3 fw-bold mb-3" style={{ letterSpacing: 0 }}>Unleash Your Potential</h1>
               <p style={{ fontStyle: 'italic', fontSize: '1.3rem' }}>
                  Every small step counts. Start your journey with us today!
               </p>
               <Button
                  variant='warning'
                  className='m-2 px-4 py-2 fs-5 shadow'
                  size='lg'
                  style={{ borderRadius: '30px', fontWeight: 'bold' }}
                  onClick={handleExploreClick}
               >
                  Explore Courses
               </Button>
            </div>
         </div>

         <Container ref={trendingRef} className="second-container py-5">
            <h2 className="text-center my-4 fw-bold" style={{ color: '#185a9d', letterSpacing: 1 }}>
               Trending Courses
            </h2>
            <AllCourses />
         </Container>
      </>
   )
}

export default Home


