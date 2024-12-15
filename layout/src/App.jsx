import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import Home from '@pages/Home/Home';
import About from '@pages/About/About';
import Cart from '@pages/Cart/Cart';
import Order from '@pages/Order/Order';
import Collection from '@pages/Collection/Collection';
import Product from '@pages/Product/Product';
import Login from '@pages/Login/Login';
import Contact from '@pages/Contact/Contact';
import Search from '@components/Search/Search';
import Thanks from '@pages/Thanks/Thanks';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Header />
      <Search />
      <ToastContainer />
      <main className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Order />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/collection/:productId' element={<Product />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/thanks' element={<Thanks />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
