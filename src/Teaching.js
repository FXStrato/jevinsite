import React, { Component } from 'react';
import {Row, Col, Table} from 'react-materialize';
import {teachingData} from './Data';
import _ from 'lodash';

class Teaching extends Component {

  getList = (data) => {
    return _.map(teachingData.get(data), (elem, index) => {
      return (
        <tr key={data + '-' + index}>
          <td>
            {elem.courselink ?
            <a href={elem.courselink}>{elem.course}</a>
            :
            elem.course
            }
          </td>
          <td>
            {elem.title}
          </td>
        </tr>
      );
    });
  }

  render() {

    let currentcourses = this.getList('currentcourses');
    let priorcourses = this.getList('priorcourses');

    return (
      <section className="container">
        <Row className="reduce-bot-margin">
          <Col s={12}>
            <h2>Current Courses</h2>
            <hr/>
          </Col>
          <Col s={12}>
            <Table>
              <tbody>
                {currentcourses}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row className="reduce-bot-margin">
          <Col s={12}>
            <h2>Prior Courses</h2>
            <hr/>
          </Col>
          <Col s={12}>
            <Table>
              <tbody>
                {priorcourses}
              </tbody>
            </Table>
          </Col>
        </Row>
        {teachingData.get('mainbody')}
      </section>
    );
  }
}

export default Teaching;
