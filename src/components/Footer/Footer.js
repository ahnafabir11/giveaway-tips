import './Footer.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
  return (
    <Container className="mt-5">
      <h2 className="footer_header">Follow us on <InstagramIcon fontSize="large" /> @tips.giveaway</h2>
      <h3 className="footer_header mb-4">About Giveaway</h3>

      <p className="footer_text">The summer sale time is nearly over and we wanted to give something back to our amazing community all around social media platforms. This is the original giveaway of <span className="tomato_color">most iconic bongs coming from some of the top rated retailers</span> all around the world.</p>

      <p className="footer_text">If you're part of the <span className="tomato_color">420 Family you MUST be part of this giveaway because it's, hmmmm, fucking awesome</span>! The rules are really simple, all you gotta do is select one of the bongs from the pictures below then click on that "confirm" button, after that you will be redirected to the page where you need to enter your shipping details. <span className="tomato_color">We pick 10 winners daily</span> from the whole database and ship the bongs to their address without any costs. </p>

    </Container>
  );
};

export default Footer;