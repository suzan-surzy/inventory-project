// import React, { useState,useEffect } from "react";
// import { Form } from "react-bootstrap";
// import './signup.css';
// import { useNavigate } from 'react-router-dom';
// import { Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import USERICON from '../image/user icon.png'
// import HUMBURGER from '../image/humburger.png'
// import FACEBOOK from '../image/facebook1.svg'
// import WHATSAPP from '../image/whatsapp1.svg'
// import TWITTER from '../image/twitter1.svg'

// export default function Signup() {
//    const [showMenu, setShowMenu] = useState(false);
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

//   const handleSignOut = () => {
//     localStorage.removeItem('signedInUser');
//     setSignedInUser(null);
//   };
//    const navigate = useNavigate();
//    const [detail, setDetail] = useState({
//       fname: '',
//       surname: '',
//       email: '',
//       password: '',
//       number: ''
//    });
//    const [errors,setErrors] =useState({})
//    const [submitting,setSubmitting] = useState(false)
//    // const [click,setClick] = useState({})
//    const handleChange = (e) => {
//       setDetail({...detail,[e.target.name]:e.target.value})
//    }
//    const validateValue = (inputValue) =>{
//       let errors = {};
//       if(inputValue.fname.lenth > 15) {
//          errors.fname = 'your name is too long'
//       }
//       if(inputValue.surname.lenth > 15) {
//          errors.fname = 'your name is too long'
//       }
//       if(inputValue.email.lenth < 16) {
//          errors.fname = 'your name is too long'
//       }
//       if(inputValue.password.lenth < 8) {
//          errors.fname = 'your name is too long'
//       }
//       if(inputValue.number.lenth > 11) {
//          errors.fname = 'your name is too long'
//       }
//       return errors;
//    }
//    const handleSubmit = (event) => {
//       event.preventDefault();
//       setErrors(validateValue(detail));
//       // setClick(handleClick(detail))
//       setSubmitting(true)
//       navigate('/');
//    }
//    const FinishSubmit = () => {
//       console.log(detail)
//    }
//    useEffect(()=> {
//       if (Object.keys(errors).length === 0 && submitting){
//          FinishSubmit()
//       }
//    },[FinishSubmit(),submitting,errors])
//    // const users = JSON.parse(localStorage.getItem('users')) || [];

//    const handleClick = () => {
//       const users = JSON.parse(localStorage.getItem('users')) || [];
//       users.push(detail);
//       localStorage.setItem('users', JSON.stringify(users));
      
//       alert('You Have Successfully Sign Up');
//       navigate('/');
//    }
   

//    return (
//       <Container fluid>
//           <Row>
//             <Col>
//             <nav>
//               <h1 className="kidologo">kido inventory</h1>
//               <div className="menu-toggle"  onClick={toggleMenu}><img style={{height:'4rem'}} src={HUMBURGER} alt=""/></div>
//               <ul className={`nav-list ${showMenu ? 'show' : ''}`}>
//                   <li><Link to="/" >Home</Link></li>
//                   <li><Link to="/addproduct" >add product</Link></li>
//                   <li><Link to="/removeproduct" >Dashboard</Link></li>
//                   <li><Link to="/purchases" >Sales</Link></li>
//                   <li><Link to="/signup" >Signup</Link></li>
//                   <li className="signin">
//                 {signedInUser ? (
//                   <>
//                     <span className="fristname">{signedInUser.fname.charAt(0).toUpperCase()}</span>
//                     <p className="signoutlink" onClick={handleSignOut}>Signout</p>
//                   </>
//                 ) : (
//                   <span>
//                     <img className="signinimage" src={USERICON} alt="" />
//                     <Link to="/signin" >Signin</Link>
//                   </span>
//                 )}
//               </li>
//               </ul>
//            </nav>
//            </Col>
//           </Row>
//           <Row>
//             <Col>
//                   <div className="detail">
//                      {Object.keys(errors).length === 0 && submitting ?(
//                         <span className="success">successfully</span>
//                      ) :null}
//                      <Form className="formdetail" onSubmit={handleSubmit}>
//                         <h1 className="signupheader">Sign-Up</h1>
//                         <label>
//                            First Name:
//                            <input
//                               type="text"
//                               name="fname"
//                               className="inputdata"
//                               placeholder="Your Answer"
//                               value={detail.fname}
//                               onChange={handleChange}
//                            />
//                         </label>
//                         <br />
//                         <label>
//                            Surname:
//                            <input
//                               type="text"
//                               name="surname"
//                               placeholder="Your Answer"
//                               value={detail.surname}
//                               className="inputdata"
//                               onChange={handleChange}
//                            />
//                         </label>
//                         <br />
//                         <label>
//                            Email Address:
//                            <input
//                               type="email"
//                               name="email"
//                               placeholder="Your Answer"
//                               className="inputdata"
//                               value={detail.email}
//                               onChange={handleChange}
//                            />
//                         </label>
//                         <br />
//                         <label>
//                            Password:
//                            <input
//                               type="password"
//                               name="password"
//                               placeholder="Your Answer"
//                               value={detail.password}
//                               className="inputdata"
//                               onChange={handleChange}
//                            />
//                         </label>
//                         <br />
//                         <label>
//                           Phone Number:
//                            <input
//                               type="number"
//                               name="number"
//                               placeholder="Your Answer"
//                               value={detail.number}
//                               className="inputdata"
//                               onChange={handleChange}
//                            />
//                         </label>
//                          <p className="formparagraph">Already have an account ?<Link to="/signin">sign-in</Link></p>
//                         <br />
//                         <button className="submit" type="submit" >Register</button>
//                      </Form>
//                   </div>
//              </Col>
//            </Row>
//            <Row>
//              <Col>
//                 <footer>
//                   <h1 className="footerlogo">Kido inventory</h1>
//                   <div className="footerdiv">
//                    <div className="contact">
//                        <p style={{marginBottom:'10px'}}>Email -kidoinventory@gmail.com</p>
//                        <p style={{marginBottom:'10px'}}>Contact - 09025356723</p>
//                        <p>blog</p>
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
//                   {signedInUser && <h2 className="signoutlink" onClick={handleSignOut}>Signout</h2>}
//                      <h3>© 2024, Kido Inventory Ltd. All Rights Reserved</h3>
//                   </div>
//                 </footer>
//              </Col>
//            </Row>
//        </Container>
//    )
// }



import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import './signup.css';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import USERICON from '../image/user icon.png';
import HUMBURGER from '../image/humburger.png';
import FACEBOOK from '../image/facebook1.svg';
import WHATSAPP from '../image/whatsapp1.svg';
import TWITTER from '../image/twitter1.svg';

export default function Signup() {
  const [showMenu, setShowMenu] = useState(false);
  const [signedInUser, setSignedInUser] = useState(null);
  const [detail, setDetail] = useState({
    fname: '',
    surname: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetail({ ...detail, [name]: value });
  };

  const validateValues = (inputValues) => {
    const errors = {};
    if (inputValues.fname.length < 3) {
      errors.fname = 'First name is too short';
    }
    if (inputValues.surname.length < 3) {
      errors.surname = 'Surname is too short';
    }
    if (inputValues.email.length < 6) {
      errors.email = 'Email is too short';
    }
    if (inputValues.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }
    return errors;
  };

  const handleSubmit = (event) => {
  event.preventDefault();
  const formErrors = validateValues(detail);
  setErrors(formErrors);

  if (Object.keys(formErrors).length === 0) {
    // No errors, proceed with user registration
    handleUserRegistration();
  } else {
    // Inform the user about the errors
    alert('Please correct the highlighted errors and try again.');
  }
};


  const handleUserRegistration = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(detail);
    localStorage.setItem('users', JSON.stringify(users));
    alert('You have successfully signed up!');
    navigate('/');
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <nav>
            <h1 className="kidologo">Kido Inventory</h1>
            <div className="menu-toggle" onClick={toggleMenu}><img style={{ height: '4rem' }} src={HUMBURGER} alt="Menu" /></div>
            <ul className={`nav-list ${showMenu ? 'show' : ''}`}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/addproduct">Add Product</Link></li>
              <li><Link to="/removeproduct">Dashboard</Link></li>
              <li><Link to="/purchases">Sales</Link></li>
              <li><Link to="/signup">Signup</Link></li>
              <li className="signin">
                {signedInUser ? (
                  <>
                    <span className="fristname">{signedInUser.fname.charAt(0).toUpperCase()}</span>
                    <p className="signoutlink" onClick={handleSignOut}>Signout</p>
                  </>
                ) : (
                  <span>
                    <img className="signinimage" src={USERICON} alt="" />
                    <Link to="/signin">Signin</Link>
                  </span>
                )}
              </li>
            </ul>
          </nav>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="detail">
            <Form className="formdetail" onSubmit={handleSubmit}>
              <h1 className="signupheader">Sign-Up</h1>
              <Form.Group controlId="formFirstName">
                <Form.Label>First Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="fname"
                  className="inputdata"
                  placeholder="Your Answer"
                  value={detail.fname}
                  onChange={handleChange}
                  isInvalid={!!errors.fname}
                />
                <Form.Control.Feedback type="invalid">{errors.fname}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formSurname">
                <Form.Label>Surname:</Form.Label>
                <Form.Control
                  type="text"
                  name="surname"
                  className="inputdata"
                  placeholder="Your Answer"
                  value={detail.surname}
                  onChange={handleChange}
                  isInvalid={!!errors.surname}
                />
                <Form.Control.Feedback type="invalid">{errors.surname}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email Address:</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Your Answer"
                  className="inputdata"
                  value={detail.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  className="inputdata"
                  placeholder="Your Answer"
                  value={detail.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
              </Form.Group>
              <p className="formparagraph">Already have an account? <Link to="/signin">Sign-in</Link></p>
              <button className="submit" type="submit">Register</button>
            </Form>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <footer>
            <h1 className="footerlogo">Kido Inventory</h1>
            <div className="footerdiv">
              <div className="contact">
                <p>Email: kidoinventory@gmail.com</p>
                <p>Contact: 09025356723</p>
                <p>Blog</p>
              </div>
              <div className="policy">
                  <p className="privacy">blog</p>
                  <p className="cookie">about</p>
                  <p className="service">Terms of service</p>
                </div>
              <div className="connectus">
                <h3>Connect With Us</h3>
                <div className="web">
                  <img className="facebook" src={FACEBOOK} alt="Facebook" />
                  <img  className="whatsapp" src={WHATSAPP} alt=""/>
                      <img  className="whatsapp" src={TWITTER} alt=""/>
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
   )
}
