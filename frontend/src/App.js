import React from 'react';
import data from './data';

function App() {
  return (
    <div className="grid-container">
            <header class="row">
                <div>
                    <a class="brand" href="/">Quadrifoglio</a>
                </div>
                <div>
                    <a href="cart">Cart</a>
                    <a href="signin">Sign In</a>
                </div>

            </header>
            <main>
            <div>
              <div className="row center">
                {data.products.map((product) => (
                <div key={product._id} className="card">
                  <a href={`/product/${product._id}`}>
                    <img
                    className="medium"
                    src={product.image}
                    alt={product.name}
                  />
                </a>
                <div className="card-body">
                  <a href={`/product/${product._id}`}>
                    <h2>{product.name}</h2>
                  </a>
                  <div className="rating">rating: {product.rating}</div>
                  <div className="price">${product.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
            </main>
            <footer class="row-center">All right reserved</footer>
        </div>
  
  );
}

export default App;
