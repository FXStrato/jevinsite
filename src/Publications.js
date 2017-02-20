import React, { Component } from 'react';
import _ from 'lodash';
import {Row, Col, Collapsible, CollapsibleItem} from 'react-materialize';
import {publicationsData} from './Data';

class Publications extends Component {
  render() {

    let inPrep = _.map(publicationsData.get('inPrep'), (elem, index) => {
      return (
        <li key={'inPrepItem-' + index} style={{marginBottom: 10}}>
          <span className="bold">{elem.title}</span><br/>
          {elem.authors}
          {elem.volume}
        </li>
      );
    })

    let prePrints = _.map(publicationsData.get('prePrints'), (elem, index) => {
      return (
        <li key={'prePrints-' + index} style={{marginBottom: 10}}>
          <span className="bold">{elem.title}</span><br/>
          {elem.authors}
          {elem.journal_volume}
          [<a href={elem.html} target="_blank">HTML</a> | <a href={elem.pdf} target="_blank">PDF</a>]
          <Collapsible>
            <CollapsibleItem header="Abstract">
              {elem.abstract}
            </CollapsibleItem>
            <CollapsibleItem header="BibTex">
              {elem.bibTex}
            </CollapsibleItem>
          </Collapsible>
        </li>
      )
    });

    return (
      <section className="container extra-padding">
        <Row>
          <Col s={12}>
            <h2>In Prep</h2>
            <hr/>
            <ul>
              {inPrep}
            </ul>
          </Col>
          <Col s={12}>
            <h2>Pre-Prints</h2>
            <hr/>
            <ul>
              {prePrints}
            </ul>
          </Col>
        </Row>
      </section>
    );
  }
}

export default Publications;
