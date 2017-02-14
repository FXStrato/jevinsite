import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';

class Cv extends Component {
  render() {
    return (
      <section className="container">
        <Row>
          <Col s={12}>
            <div>
              CV goes here
            </div>
          </Col>
        </Row>
      </section>
    );
  }
}

export default Cv;
