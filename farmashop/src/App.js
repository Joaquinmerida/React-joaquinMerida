import React from 'react'
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Main from './Main'
import MiProvider from "./context/CartContext"
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'



const App = () => {
  return (
    <BrowserRouter>
        <MiProvider>
            <Header />
            <Main />
            <Footer />
            <ToastContainer />
        </MiProvider>
    </BrowserRouter>
  )
}

export default App