import './Header.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import webLogo from '../../images/logo.png';

const Header = () => {
  return (
    <Container className="mb-5 mt-3">
      <img src={webLogo} alt="giveaway" className="d-block mx-auto web_logo" />
    </Container>
  );
};

export default Header;