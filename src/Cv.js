import React, { Component } from 'react';
import { cvData } from './Data';

/*This file handles display of the CV page*/

class Cv extends Component {
  render() {
    return (
      <section className="container">
        {cvData.get('data')}
      </section>
    );
  }
}

export default Cv;
