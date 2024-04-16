// import React,{useState, useEffect} from "react";
// import './landingpage.css'
// import { Container, Row, Col } from "react-bootstrap";
// import LOGO from '../image/inventoryimage.webp'
// import { Link } from "react-router-dom";
// import USERICON from '../image/user icon.png'
// import INVENTORY from '../image/downloadinventory.jfif'
// import FACEBOOK from '../image/facebook1.svg'
// import WHATSAPP from '../image/whatsapp1.svg'
// import HUMBURGER from '../image/humburger.png'
// import TWITTER from '../image/twitter1.svg'


// export default function LandingPage() {
//   const [showMenu, setShowMenu] = useState(false);
//   const [signedInUser, setSignedInUser] = useState(null);

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem('signedInUser'));
//     if (user) {
//       setSignedInUser(user);
//     }
//   }, []);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   // const handleSignIn = (user) => { // Function to handle sign-in
//   //   setSignedInUser(user);
//   // };
//   // const [signedInUser, setSignedInUser] = useState(null);
//   // setSignedInUser(user);
//     return(
//         <> 
//          <Container fluid>
//           <Row>
//          <nav>
//             <h1 className="kidologo">kido inventory</h1>
//             <div className="menu-toggle"  onClick={toggleMenu}>
//               <img style={{height:'4rem'}} src={HUMBURGER} alt=""/>
//             </div>
//             <ul className={`nav-list ${showMenu ? 'show' : ''}`}>
//               <li><Link to="/" >Home</Link></li>
//               <li><Link to="/addproduct" >Add product</Link></li>
//               <li><Link to="/removeproduct" >Dashboard</Link></li>
//               <li><Link to="/purchases" >Purchases</Link></li>
//               <li><Link to="/signup" >Signup</Link></li>
//               <li className="signin">
//                 {signedInUser ? (
//                   <>
                    
//                     <span className="fristname">{signedInUser.fname.charAt(0).toUpperCase()}</span>
//                     <p className="signoutlink" >Signout</p>
//                   </>
//                 ) : (
//                   <span>
//                   <img className="signinimage" src={USERICON}  alt=""/>
//                   <Link to="/signin" >Signin</Link>
//                   </span>
//                 )}
//               </li>

//             </ul>
//           </nav>
        
//            <div className="inventory">
//               <h2 className="paragraph">The world is your marketplace,Manage and fillful orders on a go.</h2>
//               <p>Find out the volume of items that are shipped in and out from each of your warehouse. Get more insights into each item's sales in simple steps.</p>
//             </div>
//            <Col/>
//            </Row>
//            <Row>
//              <Col>
//                <div className="productimage">
//                   <img className="logoimage" src={LOGO} alt=""/>
//                   <p className="logoparagraph">Keep track of your perishable and non-prerishable goods, 
//                   so you can keep your focus on your goods when it reduces at all time.</p>
//                </div>
//                </Col>
               
//            </Row>
//            <Row>
//            <Col>
//               <div className="goodsrecord">
//               <p className="inventoryparagraph">Keep constant record of your goods and
//                providing availability of goods,to enhance worderful services to the buyer.
//                 </p>
//                 <img className="inventoryimage" src={INVENTORY} alt=""/>
//               </div>
//             </Col>
//            </Row>
           
//            <Row>
//              <Col>
//                 <footer>
//                   <h1 className="footerlogo">Kido inventory</h1>
//                   <div className="footerdiv">
//                    <div className="contact">
//                        <p style={{marginBottom:'10px'}}>Email - kidoinventory@gmail.com</p>
//                        <p style={{marginBottom:'10px'}}>Contact - 09025356723</p>
//                        <p>blogs</p>
//                    </div>
//                    <div className="policy">
//                      <p className="privacy">blog</p>
//                      <p className="cookie">about</p>
//                      <p className="service">Terms of service</p>
//                    </div>
//                    <div className="connectus">
//                     <h3>Connect With Us</h3>
//                      <div className="web">
//                       <img className="facebook" src={FACEBOOK} alt=""/>
//                       <img  className="whatsapp" src={WHATSAPP} alt=""/>
//                       <img  className="whatsapp" src={TWITTER} alt=""/>
//                      </div>
//                    </div>
//                   </div>
//                   <div className="copyright">
//                      <h2><Link to="/signout" className="signoutlink" >Signout</Link></h2>
//                      <h3>© 2024, Kido Inventory Ltd. All Rights Reserved</h3>
//                   </div>
//                 </footer>
//              </Col>
//            </Row>
//          </Container>
//         </>
//     )
// }

import React, { useState, useEffect } from "react";
import './landingpage.css'
import { Container, Row, Col } from "react-bootstrap";
import LOGO from '../image/inventoryimage.webp'
import { Link } from "react-router-dom";
import USERICON from '../image/user icon.png'
import INVENTORY from '../image/downloadinventory.jfif'
import FACEBOOK from '../image/facebook1.svg'
import WHATSAPP from '../image/whatsapp1.svg'
import HUMBURGER from '../image/humburger.png'
import TWITTER from '../image/twitter1.svg'

export default function LandingPage() {
  const [showMenu, setShowMenu] = useState(false);
  const [signedInUser, setSignedInUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('signedInUser'));
    if (user) {
      setSignedInUser(user);
    }
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleSignOut = () => {
    localStorage.removeItem('signedInUser');
    setSignedInUser(null);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <nav>
            <h1 className="kidologo">kido inventory</h1>
            <div className="menu-toggle" onClick={toggleMenu}>
              <img style={{ height: '4rem' }} src={HUMBURGER} alt="" />
            </div>
            <ul className={`nav-list ${showMenu ? 'show' : ''}`}>
              <li><Link to="/" >Home</Link></li>
              <li><Link to="/addproduct" >Add product</Link></li>
              <li><Link to="/removeproduct" >Dashboard</Link></li>
              <li><Link to="/purchases" >Purchases</Link></li>
              <li><Link to="/signup" >Signup</Link></li>
              <li className="signin">
                {signedInUser ? (
                  <>
                    <span className="fristname">{signedInUser.fname.charAt(0).toUpperCase()}</span>
                    <p className="signoutlink" onClick={handleSignOut}>Signout</p>
                  </>
                ) : (
                  <span>
                    <img className="signinimage" src={USERICON} alt="" />
                    <Link to="/signin" >Signin</Link>
                  </span>
                )}
              </li>
            </ul>
          </nav>
          <div className="inventory">
            <h2 className="paragraph">The world is your marketplace,Manage and fulfill orders on a go.</h2>
            <p>Find out the volume of items that are shipped in and out from each of your warehouse. Get more insights into each item's sales in simple steps.</p>
          </div>
          <Col />
        </Row>
        <Row>
          <Col>
            <div className="productimage">
              <img className="logoimage" src={LOGO} alt="" />
              <p className="logoparagraph">Keep track of your perishable and non-perishable goods, 
                  so you can keep your focus on your goods when it reduces at all time.</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="goodsrecord">
              <p className="inventoryparagraph">Keep constant record of your goods and
               providing availability of goods,to enhance wonderful services to the buyer.
                </p>
              <img className="inventoryimage" src={INVENTORY} alt="" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <footer>
              <h1 className="footerlogo">Kido inventory</h1>
              <div className="footerdiv">
                <div className="contact">
                  <p style={{ marginBottom: '10px' }}>Email - kidoinventory@gmail.com</p>
                  <p style={{ marginBottom: '10px' }}>Contact - 09025356723</p>
                  <p>blogs</p>
                </div>
                <div className="policy">
                  <p className="privacy">blog</p>
                  <p className="cookie">about</p>
                  <p className="service">Terms of service</p>
                </div>
                <div className="connectus">
                  <h3>Connect With Us</h3>
                  <div className="web">
                    <img className="facebook" src={FACEBOOK} alt="" />
                    <img className="whatsapp" src={WHATSAPP} alt="" />
                    <img className="whatsapp" src={TWITTER} alt="" />
                  </div>
                </div>
              </div>
              <div className="copyright">
                {signedInUser && <h2 className="signoutlink" onClick={handleSignOut}>Signout</h2>}
                <h3>© 2024, Kido Inventory Ltd. All Rights Reserved</h3>
              </div>
            </footer>
          </Col>
        </Row>
      </Container>
    </>
  )
}
