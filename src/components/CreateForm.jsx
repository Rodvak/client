import React, { useState } from "react";
import axios from "axios";

// form and send info to backend adter sumbit
// axios to go to the backend
// useState because we have a form

const CreateForm = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8000/api/products/new`, {
      title,
      price,
      description,
    })
    .then((response) => {
      console.log(response)
      props.reload()
      clearForm()
    })
      .catch((err) => console.log(err));
  };

  const clearForm = () => {
    setTitle("");
    setPrice("");
    setDescription("");
  };

  return (
    <div className="container">
      <div className="bg-light p-5 m-5 border border-secondary border-5">
        <h1 className="fs-1">Product Manager</h1>
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
            <button className="btn btn-primary fw-bold" type="submit">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateForm;
