import React, { useEffect } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import HomeList from '../components/HomeList';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

<<<<<<< HEAD

=======
>>>>>>> style-dev
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
            <div className="row center">
              <div className="row center">
<<<<<<< HEAD
=======
                <HomeList products={products}></HomeList>
              </div>
              <div className="row center">
>>>>>>> style-dev
                {products.map((product) => (
                  <Product key={product._id} product={product}></Product>
                ))}
              </div>
            </div>
          )}
    </div>
  );
}

