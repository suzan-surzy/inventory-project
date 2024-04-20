// SaleReceipt.js

import React from 'react';
import './receipt.css'

const SaleReceipt = ({ itemsSold, total }) => {
  return (
    <div className="sale-receipt">
      <h2>Sale Receipt</h2>
      
         
        <div className='receiptdiv'>
          {itemsSold.map((item, index) => (
            <div className='mapdiv' key={index}>
              <div className='pname'>
                <p>Name</p><p>{item.name}</p>
                </div>
                <div className='pname'>
                <p>Quantity</p><p>{item.quantity}</p>
                </div>
                <div className='pname'>
                <p>Price</p><p>${item.price}.</p>
                </div>
            </div>
          ))}
        </div>
        <div className='totalamount'>
                <p>Total</p><p>${total}</p>
                </div>
    </div>
  );
};

export default SaleReceipt;
