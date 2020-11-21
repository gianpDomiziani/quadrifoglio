import React, { useEffect } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import HomeList from '../components/HomeList';

import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div className="row center">
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
            <div>
              <div className="hero-image">
                <div className="hero-text">
                  <h1>
                    Vitam regit fortuna, non sapientia.
          Unus dies hominum eruditorum plus patet, quam imperiti longissima aetas.</h1>
                  <h2>(Marco Tullio Cicerone)</h2>
                </div>
              </div>
              <div className="row center">
                <h3>OFFERTE !!!</h3>
                <HomeList products={products}></HomeList>
              </div>
              <h1>PRODOTTI</h1>
              <div className="row center">
                {products.map((product) => (
                  <Product key={product._id} product={product}></Product>
                ))}
              </div>
            </div>
          )
      }
    </div >
  );
}

