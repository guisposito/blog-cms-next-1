import React from 'react'
import { Header } from './Index';


const Layout = ({ children }) => {
  return (
    <>
        <Header />
        {children}
    </>
  )
}

export default Layout
