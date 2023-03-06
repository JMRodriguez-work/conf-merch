import React from 'react';
import './Success.css';

const Success = () => {
  return (
    <div className='Success'>
      <div className="Success-content">
        <h2>Martin, Gracias por tu compra</h2>
        <span>Tu pedido llegará en 3 dias a tu dirección:</span>
        <div className="Success-map">
          Google Maps
        </div>
      </div>
    </div>
  )
}

export { Success }