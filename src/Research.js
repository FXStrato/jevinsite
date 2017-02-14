import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';

class Research extends Component {
  render() {
    return (
      <section className="container">
        <Row>
          <Col s={12}>
            <div>
              Research goes here
            </div>
          </Col>
        </Row>
      </section>
    );
  }
}

export default Research;
