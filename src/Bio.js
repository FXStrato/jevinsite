import React, { Component } from 'react';
import {bioData} from './Data';
import Scroll from 'react-scroll';

let scroll = Scroll.animateScroll;

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
