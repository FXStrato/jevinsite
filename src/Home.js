import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';

class Home extends Component {
  render() {
    return (
      <section className="container">
        <Row>
          <Col s={12}>
            <div>
              Info about prof, stuff will go here.
            </div>
          </Col>
        </Row>
      </section>
    );
  }
}

export default Home;
