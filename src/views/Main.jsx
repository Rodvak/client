import React, { useEffect, useState } from 'react'
import axios from "axios"
import CreateForm from '../components/CreateForm'
import AllProducts from '../components/AllProducts'


// 1. grab info from backend automatically
// useEffect, useState, axios

const Main = () => {
    const [products, setProducts] = useState([])
    const [refresh, setRefresh] = useState(true)

    // grabbing all songs from AllRoutes
    useEffect (() => {
        axios.get(`http://localhost:8000/api/products`)
        .then(response => {
            setProducts(response.data)
        })
        .catch(err=>console.log(err))
    },[refresh])

    // handleDelete1 & create function
    const reload = ()=>{
        setRefresh(!refresh)
    }

    // handleDelete2 
    // const updateList = (list) =>{
    //     setSongs(list)
    // }

  return (
    <div>
        <CreateForm reload = {reload} />
        <AllProducts products = {products} reload = {reload} />
    </div>
  )
}

export default Main