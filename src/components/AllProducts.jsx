import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// get info from backend
// axios to get info
// state because we will have a form and info will change
// useEffect because we want the info populated already without a button

function AllProducts(props) {

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/products/${id}`)
    .then(response => props.reload())
    .catch(err => console.log(err))
  }

  return (
    <div className="container">
      <div className="bg-light p-5 m-5 border border-secondary border-5">
        <table>
          <thead>
            <tr>
              <th className="fs-2">Title</th>
              <th className="fs-2">Actions</th>
            </tr>
          </thead>
          <tbody>
              {
                  props.products.map((product,i) => (
                      <tr key={i}>
                          <td><Link className="text-dark" to={`/product/${product._id}`}> {product.title}</Link></td>
                          <td><Link className="text-dark" to={`/product/${product._id}/edit`}>Edit</Link> <button className='btn btn-danger mt-3' onClick={()=> handleDelete(product._id)}>Delete</button></td>
                      </tr>
                  ))
              }
          </tbody>
        </table>
      </div>
      </div>
  );
}

export default AllProducts;
