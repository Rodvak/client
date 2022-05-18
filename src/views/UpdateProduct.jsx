import React, {useEffect, useState} from 'react'
import axios from "axios"
import { useParams, useNavigate } from 'react-router-dom'

// get one + create
// get product id from routes (params)
// usingid to go to backend (axios)
// state because we have a form 

const UpdateProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}`)
    .then(response => {
      const product = response.data
      setTitle(product.title)
      setPrice(product.price)
      setDescription(product.description)
    })
    .catch(err => console.log(err))
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:8000/api/products/${id}`, {
      title,
      price,
      description,
    })
    .then(response => navigate(`/`))
    .catch((err) => console.log(err));
  }

  const handleDelete = () => {
    axios.delete(`http://localhost:8000/api/products/${id}`)
    .then(response => navigate(`/`))
    .catch(err => console.log(err))
  }


  return (
    <div className="container">
      <div className="bg-light p-5 m-5 border border-secondary border-5">
        <h1 className="fs-1">Update your product</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              className="form-control"
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              className="form-control"
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <input
              className="form-control"
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-primary fw-bold" type="submit">Update</button>
          </div>
        </form>
      <button className='btn btn-danger mt-3' onClick={handleDelete}> Delete</button>
      </div>
    </div>
  )
}

export default UpdateProduct