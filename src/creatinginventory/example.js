import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Offcanvas } from 'react-bootstrap';
import './example.css'
import USERICON from '../image/user icon.png'

const MyOffcanvas = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(true);
  const [signedInUser, setSignedInUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('signedInUser'));
    if (user) {
      setSignedInUser(user);
    }
  }, []);

  

  const handleSignOut = () => {
    localStorage.removeItem('signedInUser');
    setSignedInUser(null);
  };

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
              <li className="signin">
                {signedInUser ? (
                  <>
                    <span className="fristname">{signedInUser.fname.charAt(0).toUpperCase()}</span>
                    <p className="signoutpara" onClick={handleSignOut}>Signout</p>
                  </>
                ) : (
                  <span className='signinspan'>
                    <img className="signinimags" src={USERICON} alt="" />
                    <Link to="/signin" className='link'>Signin</Link>
                  </span>
                )}
              </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
      <button className='offcanvasbtn' onClick={() => setShowOffcanvas(!showOffcanvas)}>Toggle Offcanvas</button>
    </>
  );
};

export default MyOffcanvas;
