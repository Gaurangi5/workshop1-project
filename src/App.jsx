import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import Footer from './components/Footer'
import Products from './components/Products'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from './pages/Login'
import Register from './pages/Register'
import PageNotFound from './components/PageNotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12'>
            <Header/>
          </div>
        </div>
      <Routes>
            <Route
              path="/"
              element={
                <> <div className='container-fluid'>
                <div className='row'>
          <div className='col-12'>
            <Slider/>
          </div>
        </div>

        <div className='container my-2 gap-5'>
          <div className='row mb-2'>
            <div className='col-sm-6 col-md-4 col-lg-3 mb-2'>
            <Products 
            imgSrc="/imgs/earrings.jpg"
            title="Earrings"
            text="Timeless golden earrings that add elegance to any outfit."
            btnText="Explore"
            />
          </div>
          <div className='col-sm-6 col-md-4 col-lg-3 mb-2'>
            <Products
            imgSrc="/imgs/ring.jpg"
            title="Ring"
            text="A sleek gold ring designed for everyday luxury."
            btnText="Explore"
            />
          </div>
                <div className='col-sm-6 col-md-4 col-lg-3 mb-2'>
            <Products
            imgSrc="/imgs/bracelet.jpg"
            title="Bracelet"
            text="Classic pearl bracelet with golden accents for refined charm."
            btnText="Explore"
            />
          </div>
          <div className='col-sm-6 col-md-4 col-lg-3 mb-2'>
            <Products
            imgSrc="/imgs/necklace.jpg"
            title="Necklace"
            text="A delicate pendant necklace that completes your look with grace."
            btnText="Explore"
            />
          </div>
          </div>
                
          </div>
        </div>
    </>
    }
        ></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
          <div className='row'>
          <div className='col-12'>
            <Footer/>
          </div>
        </div>
      </div>
      </Router>
    </>
  )
}

export default App
