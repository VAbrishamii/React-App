import React, { Component } from 'react';

import Styles from './Footer.module.css';

class Footer extends Component {
  render() {
    return (
      <div className={Styles.container}> 
        <p>&copy; All rights reserved 2023</p>
      </div>
    );
  };
}
export default Footer;
  
