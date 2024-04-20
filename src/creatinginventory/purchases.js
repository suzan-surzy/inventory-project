import React, { useState, useEffect } from 'react';
import './purchases.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SaleReceipt from './receipt'; 
import MyOffcanvas from './example';
import { Link } from 'react-router-dom';
import { Container,Row,Col } from 'react-bootstrap';
import USERICON from '../image/user icon.png'
import HUMBURGER from '../image/humburger.png'


export default function Purchases ({ savedItem }) {
  const [itemsSold, setItemsSold] = useState([]);
  const [total, setTotal] = useState(0);
  const [inventory, setInventory] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  useEffect(() => {
    const inventoryData = JSON.parse(localStorage.getItem('saveditem'));
    setInventory(inventoryData);
  }, []);

  const handleSale = (item) => {
    const updatedInventory = inventory.map((invItem) => {
      if (invItem.id === item.productid && invItem.productQuantity >= 1) {
        invItem.productQuantity -= 1;
      }
      return invItem;
    });
  
    const soldItem = {
      name: item.productName,
      price: parseFloat(item.productPrice), // Convert price to a number
      quantity: item.productQuantity,
    };
  
    setItemsSold([...itemsSold, soldItem]);
    setTotal(total + parseFloat(item.productPrice)); // Convert price to a number for total calculation
    setInventory(updatedInventory);
  };
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
  <Container fluid>
    <Row>
      <Col>
    <nav className='purchasenavbar'>
            <h1 className="kidologo">kido inventory</h1>
            <div className="menu-toggle"  onClick={toggleMenu}>
              <img style={{height:'4rem'}} src={HUMBURGER} alt=""/>
            </div>
            <ul className={`nav-list ${showMenu ? 'show' : ''}`}>
              <li><Link to="/" >Home</Link></li>
              <li><Link to="/addproduct" >Add product</Link></li>
              <li><Link to="/removeproduct" >Dashboard</Link></li>
              <li><Link to="/purchases" >Sales</Link></li>
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
          </Col>
          <Col>
    <div className='modaldiv'>
     
          <div className='salediv'>
          <div className='offcanvasdiv'>
            <MyOffcanvas/>
          </div>
        <div className="sales">
          <h2>Sales</h2>
          <table className='inventorylist'>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {inventory.map((item) => (
              <tr className="inventory-item" key={item.id}>
                <td>{item.productName}</td>
                <td>{item.productQuantity}</td>
                <td>${item.productPrice}</td>
                 <td><button onClick={() => handleSale(item)} >Buy Product</button></td>
              </tr>
            ))}
         </tbody>
      </table>
         
        
        <Button className='showbtn' variant="primary" onClick={handleShow}>
        Show Receipt
      </Button>

      <Modal className='modal' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='modaltitle'>kido inventory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <SaleReceipt itemsSold={itemsSold} total={total} />
        </Modal.Body>
        <Modal.Footer>
          <Button className='closebtn' variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className='changebtn' variant="primary" >
          <Link to="/addproduct" style={{textDecoration:'none'}} >Save Changes</Link>
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
      </div>
      
    </div>
    </Col>
       {/* <Col>
          <footer>
            <h1 className="footerlogo">Kido inventory</h1>
            <div className="footerdiv">
              <div className="contact">
                  <p style={{marginBottom:'10px'}}>Email - kidoinventory@gmail.com</p>
                  <p style={{marginBottom:'10px'}}>Contact - 09025356723</p>
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
                <img className="facebook" src={FACEBOOK} alt=""/>
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
        </Col> */}
    </Row>
    </Container>
  );
};


