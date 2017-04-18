import React, { Component } from 'react';
import _ from 'lodash';
import {Row} from 'react-materialize';
import {researchData} from './Data';
import ScrollButton from './ScrollButton';
import Scroll from 'react-scroll';

let scroll = Scroll.animateScroll;

/*This file handles display of the research page*/

class Research extends Component {
  componentDidMount = () => {
    scroll.scrollToTop({duration: 0});
  }
  render() {

    return (
      <section className="container extra-padding">
        <ScrollButton/>
        <Row>
          {researchData.get('header')}
        </Row>
        {researchData.get('section_1')}
        {researchData.get('section_2')}
        {researchData.get('section_3')}
        {researchData.get('section_4')}
      </section>
    );
  }
}

export default Research;
