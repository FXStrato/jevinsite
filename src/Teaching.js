import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';

class Teaching extends Component {
  render() {
    return (
      <section className="container">
        <Row>
          <Col s={12}>
            <div>
              Teaching goes here
            </div>
          </Col>
        </Row>
      </section>
    );
  }
}

export default Teaching;
