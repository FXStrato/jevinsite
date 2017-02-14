import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';

class News extends Component {
  render() {
    return (
      <section className="container">
        <Row>
          <Col s={12}>
            <div>
              News goes here
            </div>
          </Col>
        </Row>
      </section>
    );
  }
}

export default News;
