import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu'
import MenuItem from "@material-ui/core/MenuItem";
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import StoryScreen from './screens/StoryScreen';
import RegisterScreen from './screens/RegisterScreen';
import SigninScreen from './screens/signinScreen';
import { signout } from './actions/userActions';

import SocialFollow from './components/SocialFollow';


function App() {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout())
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              Menù</Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}><Link to='/salute'>Salute</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link to='/fitoterapici'>Fitoterapici</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link to='/bellezza'>Bellezza</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link to="/storia" exact>Chi sono?</Link></MenuItem>
            </Menu>
          </div>
          <div>
            <Button>
              <Link to="/" >Bottega dei rimedi naturali</Link>
            </Button>
          </div>
          <div>
            <Button>
              <Link to="/cart">
                Carrello
              {cartItems.length > 0 && (
                  <span className="badge">{cartItems.length}</span>
                )}
              </Link>
            </Button>
            <Button>
              {
                userInfo ? (
                  <div className="dropdown">
                    <Link to="#">
                      {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                    </Link>
                    <ul className="dropdown-content">
                      <li>
                        <Link to='#signout' onClick={signoutHandler}>Sign Out</Link>
                      </li>
                    </ul>
                  </div>
                ) : (
                    <Link to="/signin">Sign In</Link>
                  )
              }
            </Button>
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/" component={HomeScreen} exact ></Route>
          <Route path="/storia" component={StoryScreen} exact></Route>
        </main>
        <SocialFollow />
      </div>

    </BrowserRouter >
  );
}

export default App;

