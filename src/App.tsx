import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import { Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Collection from './pages/collection'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
function App() {

  return (
    <>
    <div className='px-4 sm:px[5vw] md:px-[7vm] lg:px-[9vw] '>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:ProductId' element={<Product />} />
        <Route path='/about' element={<About />} /> 
        <Route path='/Login' element={<Login />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>
    </div>
    </>
  )
}

export default App
