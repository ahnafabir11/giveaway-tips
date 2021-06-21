import './ProductCard.css';
import React from 'react';
import { Paper } from '@material-ui/core';

const ProductCard = ({index, name, img_src, handleClick, selectedIndex}) => {
  return (
    <Paper 
      elevation={3}
      className={(selectedIndex === index) ? "ProductCard selected": "ProductCard"}
      onClick={() => handleClick(index)}
    >
      <img src={img_src} alt="" className="product_img" />
      <h4 className="product_name">{name}</h4>
    </Paper>
  );
};

export default ProductCard;