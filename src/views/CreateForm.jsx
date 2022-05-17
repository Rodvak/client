import React, { useState } from "react";
import axios from "axios";
import AllProducts from "./AllProducts";

// form and send info to backend adter sumbit
// axios to go to the backend
// useState because we have a form

const CreateForm = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    clearForm()
    axios
      .post(`http://localhost:8000/api/products/new`, {
        title,
        price,
        description,
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  const clearForm = () => {
    setTitle("");
    setPrice("");
    setDescription("");
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label>Price</label>
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <label>Description</label>
            <input
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button type="submit">Create</button>
        </form>
      </div>
      <AllProducts />
    </div>
  );
};

export default CreateForm;
