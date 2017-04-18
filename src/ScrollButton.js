import React, { Component } from 'react';
import ScrollToTop from 'react-scroll-up';

/*This file handles rendering of the scroll up button*/

class ScrollButton extends Component {
  render() {
    return (
      <ScrollToTop showUnder={1000}>
        <a className="btn-floating waves-effect waves-light deep-purple darken-2"><i className="material-icons">keyboard_arrow_up</i></a>
      </ScrollToTop>
    );
  }
}

export default ScrollButton;
