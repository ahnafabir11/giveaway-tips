import './Home.css';
import ProductCard from '../ProductCard/ProductCard';
import productList from '../../productList';
import React, { useState } from 'react';
import {Container} from 'react-bootstrap';
import { Button } from '@material-ui/core';

const Home = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedIndex(index)
  }

  return (
    <Container>
      <h1 className="main_title">Pick Your Prize Giveaway</h1>
      <p className="sub_title">Select the product you would like to get</p>

      <div className="product_container">
        {
          productList.map((product, index) => 
            <ProductCard 
              key={index}
              index={index}
              name={product.name} 
              img_src={product.img_src} 
              handleClick={handleClick}
              selectedIndex={selectedIndex}
            />
          )
        }
      </div>

      <p className="sub_title mt-5">Confirm Your Entry</p>

      <Button
        disabled={selectedIndex === null ? true : false}
        variant="contained"
        color="secondary"
        className="confirm_btn"
        href="https://www.youtube.com/watch?v=uyznwoQbggA"
        target="_blank"
      >Confirm</Button>
    </Container>
  );
};

export default Home;