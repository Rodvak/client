import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

// grab info from route and backend
// axios to go to the backend
// useState because we have a form
// useEffect when loading

const Details = () => {
    const {id} = useParams()
    const [product, setProduct] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(response => setProduct(response.data))
        .catch(err => console.log(err))
    },[])

    const handleDelete = () => {
      axios.delete(`http://localhost:8000/api/products/${id}`)
      .then(response => navigate(`/`))
      .catch(err => console.log(err))
    }

  return (
    <div className="bg-light p-5 m-5 border border-secondary border-5">
    {
        product&&
        <div>
            <h1>Title: {product.title}</h1>
            <h1>Price: {product.price}</h1>
            <h1>Description: {product.description}</h1>
        </div>
    }
    <button className="btn btn-danger" onClick={handleDelete}> Delete</button>
    </div>
  )
}

export default Details