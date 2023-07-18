import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "../css/home.css";
import { ThemeContext } from "./ThemeContext";
import {  Box, Grid, Button, Typography } from "@mui/material";
// import { styled } from "@mui/material/styles";

const URL = "https://64b391490efb99d8626809f5.mockapi.io/product";

const Home = (product) => {
  const { theme } = useContext(ThemeContext);

  const [products, setListProduct] = useState([]);
  const [detailPopup, setDetailPopup] = useState(null);

  const getListProduct = async () => {
    const res = await axios.get(`${URL}`);
    if (res.status === 200) {
      setListProduct(res.data);
    }
  };

  useEffect(() => {
    getListProduct();
  }, []);

useEffect(() => {
    const newList = products.filter((item) => item.bestseller === true)
    console.log(newList);
    setListProduct(newList)
  }, []);

  const options = {
    size: "small",
    readOnly: true,
    value: product.rating,
    precision: 0.5,
  };


  // popup
  const handleViewPopup = (product) => {
    setDetailPopup(product);
  };

  const handleClosePopup = () => {
    setDetailPopup(null);
  };


  return (

    <Box
      className="container"
      sx={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <Grid container spacing={2}>
        {products &&
          products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <div className="card">
                <img src={product.image} alt={product.id} />
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="h6">{product.price}</Typography>
                <Typography variant="h6">{product.rating}</Typography>
                <Typography variant="h6">{product.category}</Typography>
                <Button variant="contained" onClick={() => handleViewPopup(product)}>
                  View Details
                </Button>
              </div>
            </Grid>
          ))}

      {detailPopup && (
          <div className="popup">
          <div className="popup-content">
            <div>
              <span className="close" onClick={handleClosePopup}>
                &times;
              </span>
              <img src={detailPopup.image} alt={detailPopup.id} />
              <Typography>ID: {detailPopup.id}</Typography>
              <Typography>Name: {detailPopup.name}</Typography>
              <Typography>Description: {detailPopup.description}</Typography>
              <Typography>Price: {detailPopup.price}</Typography>
              <Typography>Rating: {detailPopup.rating}</Typography>
              <Typography>Category: {detailPopup.category}</Typography> 
            </div>
          </div>
        </div>
      )}
      </Grid>
    </Box>
  );
};

export default Home;
