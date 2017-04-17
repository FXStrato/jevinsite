import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';
import {presentationData} from './Data';
import _ from 'lodash';

/*This file handles display of the presentations page*/

class Presentations extends Component {

  //Need to pull each year separately, and then add the info that goes under each year
  getData = (section) => {
    let result = [];
    Object.keys(presentationData.get('invitedtalks')).reverse().forEach((year) => {
      if(section.hasOwnProperty(year)) {
        let temp = _.map(section[year], (elem, index) => {
          return (
            <Row>
              <Col s={12} m={2} className="center-align flow-text presentation-year">
                {index === 0 && year}
              </Col>
              <Col s={12} m={10}>
                {elem.title}
                {elem.location}
              </Col>
            </Row>
          );
        })
        result.push(temp);
      }
    })
    return result;
  }

  render() {

    let invitedtalks = this.getData(presentationData.get('invitedtalks'));
    let conferencetalks = this.getData(presentationData.get('conferencetalks'));
    let workshops = this.getData(presentationData.get('workshops'));

    return (
      <section className="container extra-padding">
        <Row>
          <Col s={12}>
            <h2>Invited Talks</h2>
            <hr/>
          </Col>
        </Row>
        {invitedtalks}
        <Row>
          <Col s={12}>
            <h2>Conference Talks</h2>
            <hr/>
          </Col>
        </Row>
        {conferencetalks}
        <Row>
          <Col s={12}>
            <h2>Workshops</h2>
            <hr/>
          </Col>
        </Row>
        {workshops}
      </section>
    );
  }
}

export default Presentations;
