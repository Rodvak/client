import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// get info from backend
// axios to get info
// state because we will have a form and info will change
// useEffect because we want the info populated already without a button

function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
            {
                products.map((product,i) => (
                    <tr key={i}>
                        <td><Link className="text-dark" to={`/product/${product._id}`}> {product.title}</Link></td>
                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
  );
}

export default AllProducts;
