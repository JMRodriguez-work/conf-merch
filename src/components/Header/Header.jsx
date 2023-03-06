import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <header className='Header'>
      <h1 className='Header-title'> Conf Merch</h1>
      <div className='Header-checkout'>
        <p>Checkout</p>
      </div>
    </header>
  )
}

export { Header }