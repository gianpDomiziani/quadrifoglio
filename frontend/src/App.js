import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';


function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
      <div>
        <Link className="brand" to="/">
          Quadrifoglio
        </Link>
      </div>
      <div>
        <Link  to="/">Giusy Paino</Link>
      </div>
      <div>
        <Link to="/cart">Carrello</Link>
        <Link to="/signin">Sign In</Link>
      </div>
    </header>
    <main>
    <Route path="/cart/:id?" component={CartScreen}></Route>
    <Route path="/" component={HomeScreen} exact ></Route>
    <Route path="/product/:id" component={ProductScreen}></Route>
    </main>
    <footer className='row center'>All right reserved</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
