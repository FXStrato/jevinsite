import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';

class Bio extends Component {
  render() {
    return (
      <section className="container">
        <Row>
          <Col s={12}>
            <div>
              Bio goes here
            </div>
          </Col>
        </Row>
      </section>
    );
  }
}

export default Bio;
