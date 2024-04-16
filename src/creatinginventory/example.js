import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Offcanvas } from 'react-bootstrap';
import './example.css'
// import USERICON from '../image/user icon.png'

const MyOffcanvas = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(true);

  return (
    <>
     
      <Offcanvas className ='offcanvas' show={showOffcanvas} onHide={() => setShowOffcanvas(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='title'>kido inventory</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='body'>
          <ul>
              <li> <Link to="/" className="signoutlink">Home</Link></li>
              <li><Link to="/addproduct"className="signoutlink" >Add product</Link></li>
              <li> <Link to="/removeproduct" className="signoutlink">Dashboard</Link></li>
              <li><Link to="/signup" className="signoutlink">Signup</Link></li>
                <li >
                    {/* <img className="signinimage" src={USERICON} alt=""/> */}
                    <Link to="/signin"className="signoutlink" >Signin</Link>
                </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
      <button className='offcanvasbtn' onClick={() => setShowOffcanvas(!showOffcanvas)}>Toggle Offcanvas</button>
    </>
  );
};

export default MyOffcanvas;
