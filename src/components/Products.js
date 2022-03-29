import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Products() {
  const [productList, setProductList] = useState(null);
  const [price, setPrice] = useState("");
//   const [filters, setFilters] = useState({
//     s: ''
// })

  useEffect(() => {
    function displayProducts() {
      return axios
      .get(`https://ecommerce-datab.herokuapp.com/api/products`)
      .then(response => {
        setProductList(response.data);
        console.log(response.data);
      })
    }
  displayProducts();
  }, []);

  useEffect(() => {
    console.log(price);
    if(price === "ASC") {
      axios
      .get(`https://ecommerce-datab.herokuapp.com/api/products/asc`)
      .then((response) => {
        console.log(response.data);
        setProductList(response.data || []);
      })
    }
    if (price === "DESC") {
      axios
    .get(`https://ecommerce-datab.herokuapp.com/api/products/desc`)
    .then((response) => {
      console.log(response.data);
      setProductList(response.data || []);
      })
    } else {
      return;
    }

  }, [price])

  // input for a filter by price and an input for product type.
// const search = (s) => {
//   setFilters({
//     s
//   })
// }

// useEffect(() => (
//   async () => {

//       const arr = [];

//       if(filters.s) {
//           arr.push(`s=${filters.s}`);
//       }

//       const response = await fetch(`https://ecommerce-datab.herokuapp.com/api/products?price=${arr.join('&')}`);

//       const content = await response.json();

//       setProductList(content.data);
//   }
// ), [filters.s])
  // if the user selects a price filter, remove everything that doesn't match from productList
  // if user selects product type filter, remove everything that doesn't match from productList
  // if the user selects both filters, remove everything that doesn't match both filters from productList
  // if user selects a different filter, restore productList to original state and then filter again

    return(
        <div>
        
  <h2>Gone Golfing with Taylormade</h2>

  <form>
    {/* <input type="text" placeholder="Search" onChange={e => search(e.target.value)}/> */}
    <div>
      <select value={price} onChange={e => setPrice(e.target.value)} >
        <option value="ASC">Price Lowest to Highest</option>
        <option value="DESC">Price Highest to Lowest</option>
      </select>
    </div>
  </form>

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