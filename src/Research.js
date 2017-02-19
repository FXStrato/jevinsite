import React, { Component } from 'react';
import _ from 'lodash';
import {Row} from 'react-materialize';
import {researchData} from './Data';

class Research extends Component {
  render() {

    return (
      <section className="container">
        <Row>
          {researchData.get('header')}
        </Row>
        <Row>
          {researchData.get('section_1')}
        </Row>
        <Row>
          {researchData.get('section_2')}
        </Row>
        <Row>
          {researchData.get('section_3')}
        </Row>
        <Row>
          {researchData.get('section_4')}
        </Row>
      </section>
    );
  }
}

export default Research;
