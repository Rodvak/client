import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// grab info from route and backend
// axios to go to the backend
// useState because we have a form
// useEffect when loading

const Details = () => {
    const {id} = useParams()
    const [product, setProduct] = useState()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(response => setProduct(response.data))
        .catch(err => console.log(err))
    },[])
    
  return (
    <div>
    {
        product&&
        <div>
            <h1>Title: {product.title}</h1>
            <h1>Price: {product.price}</h1>
            <h1>Description: {product.description}</h1>
        </div>
    }
    </div>
  )
}

export default Details