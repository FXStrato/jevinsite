import React, { Component } from 'react';
import {bioData} from './Data';
import Scroll from 'react-scroll';

let scroll = Scroll.animateScroll;

/*This class handles display of the bio page*/

class Bio extends Component {
  componentDidMount = () => {
    scroll.scrollToTop({duration: 0});
  }
  render() {
    return (
      <section className="container">
        {bioData.get('bio')}
      </section>
    );
  }
}

export default Bio;
