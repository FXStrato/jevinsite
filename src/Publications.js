import React, { Component } from 'react';
import _ from 'lodash';
import {Row, Col} from 'react-materialize';

class Publications extends Component {
  render() {

    return (
      <section className="container">
        <Row>
          <Col s={12}>
            <div>
              Publications go here
            </div>
          </Col>
        </Row>
      </section>
    );
  }
}

export default Publications;
