import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';
import {presentationData} from './Data';
import _ from 'lodash';

class Presentations extends Component {

  //Need to pull each year separately, and then add the info that goes under each year
  getData = (section) => {
    let result = [];
    Object.keys(presentationData.get('invitedtalks')).reverse().forEach((year) => {
      if(section.hasOwnProperty(year)) {
        let temp = _.map(section[year], (elem, index) => {
          return (
            <Row>
              <Col s={12} m={2}>
                {index === 0 && year}
              </Col>
              <Col s={12} m={10} className="presentation-info">
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

    return (
      <section className="container">
        <Row>
          <Col s={12}>
            Invited Talks
            <hr/>
          </Col>
        </Row>
        {invitedtalks}
      </section>
    );
  }
}

export default Presentations;
