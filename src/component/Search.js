import React, { Component } from 'react';

import  styles from './Search.module.css'

class Search extends Component {
  render() {
    return (
      <div className={styles.container}> 
        <h3>Search what do you need</h3>
        <input placeholder='Search ...'/>
      </div>
    );
  }
}
export default Search;
