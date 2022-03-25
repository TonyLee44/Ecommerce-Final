import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Products() {
  const [productList, setProductList] = useState(null);

  useEffect(() => {
    function displayProducts() {
      return axios
      .get(`http://localhost:4000/api/products`)
      .then(response => {
        setProductList(response.data);
      })
    }
  displayProducts();
  }, []);

  // input for a filter by price and an input for product type.
  // if the user selects a price filter, remove everything that doesn't match from productList
  // if user selects product type filter, remove everything that doesn't match from productList
  // if the user selects both filters, remove everything that doesn't match both filters from productList
  // if user selects a different filter, restore productList to original state and then filter again

    return(
        <div>
        
  <h2>Gone Golfing with Taylormade</h2>

  <section className="productContainer">
    {!productList ? null : productList.map(product => {
      return (
        <section className="product" key={product.title}>
          <img src={product.image} alt={product.title}/>
          <h3>{product.title}</h3>
          <p>{product.product_description}</p>
          <p>{product.price ? `$${product.price}` : "Unavailable"}</p>
          <button>Buy Now</button>
        </section> 
      );
    })}
  </section>

        </div>
    );
}