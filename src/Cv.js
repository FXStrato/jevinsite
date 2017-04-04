import React, { Component } from 'react';
import { cvData } from './Data';

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
