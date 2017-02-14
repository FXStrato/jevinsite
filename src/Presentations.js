import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';

class Presentations extends Component {
  render() {
    return (
      <section className="container">
        <Row>
          <Col s={12}>
            <div>
              Presentations go here
            </div>
          </Col>
        </Row>
      </section>
    );
  }
}

export default Presentations;
