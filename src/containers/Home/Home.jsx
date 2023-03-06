import React from 'react'
import './Home.css';
import initialState from '../../initialState';
import { Products } from '../../components/index'

const Home = () => {
  return (
    <Products products={initialState.products} />
  )
}

export { Home } 