import React from 'react'
import { Outlet } from 'react-router-dom'
import './Layout.css';
import { Header, Footer } from '../index'

const Layout = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export { Layout }