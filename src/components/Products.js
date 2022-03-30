import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Products() {
  const [productList, setProductList] = useState(null);
  const [filter, setFilter] = useState("");
  //   const [filters, setFilters] = useState({
  //     s: ''
  // })

  // useEffect stops page from being re-rendered after get method is receieved.
  useEffect(() => {
    function displayProducts() {
      return axios
        .get(`https://ecommerce-datab.herokuapp.com/api/products`)
        .then(response => {
          setProductList(response.data);
        })
    }
    displayProducts();
    
    // Having a blank dependency allows this function to render once only.
  }, []);


  // useEffect that listens for changes in the filter
  useEffect(() => {
    if (filter === "choose") {
      axios
        .get(`https://ecommerce-datab.herokuapp.com/api/products`)
        .then((response) => {
          setProductList(response.data);
        })
    }
    if (filter === "ASC") {
      axios
        .get(`https://ecommerce-datab.herokuapp.com/api/products/asc`)
        .then((response) => {
          setProductList(response.data);
        })
    }
    if (filter === "DESC") {
      axios
        .get(`https://ecommerce-datab.herokuapp.com/api/products/desc`)
        .then((response) => {
          setProductList(response.data);
        })
    }
    if (filter === "equipments") {
      axios
        .get(`https://ecommerce-datab.herokuapp.com/api/products/equipments`)
        .then((response) => {
          setProductList(response.data);
        })
    }
    if (filter === "apparel") {
      axios
        .get(`https://ecommerce-datab.herokuapp.com/api/products/apparel`)
        .then((response) => {
          setProductList(response.data);
        })
    } else {
      return;
    }

    // filter is the dependency that useEffect is listening to change to render the page.
  }, [filter])



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

  return (
    <div>

      <h2>Gone Golfing with Taylormade</h2>

      <form>
        {/* <input type="text" placeholder="Search" onChange={e => search(e.target.value)}/> */}
        <div>
          <label>Filter By:</label>
          <select value={filter} onChange={e => setFilter(e.target.value)} >
            <option value="choose">Choose an option</option>
            <option value="ASC">Price Lowest to Highest</option>
            <option value="DESC">Price Highest to Lowest</option>
            <option value="equipments">Equipments</option>
            <option value="apparel">Apparel</option>
          </select>
        </div>
      </form>

      <section className="productContainer">
        {!productList ? null : productList.map(product => {
          return (
            <section className="product" key={product.title}>
              <img src={product.image} alt={product.title} />
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