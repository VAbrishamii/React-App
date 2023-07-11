import React, { Component } from 'react';

import styles from "./Cards.module.css";
import Card from './Card';

import Brand from '../images/product1.jpg';
import product2 from "../images/product 2.jpg";
import product3 from "../images/product3.jpg";
import product4 from "../images/product 4.jpg";


class Cards extends Component {
  render() {
    return (
      <div className={styles.container}>  
        <Card image={Brand} name="Brand" cost="150 $"  />
        <Card image={product2} name="Kylistyle" cost="200 $"  />
        <Card image={product3} name="Prove" cost="286 $"  />
        <Card image={product4} name="Visag" cost="345 $"  />
      </div>
    );
  }
}
export default Cards;
