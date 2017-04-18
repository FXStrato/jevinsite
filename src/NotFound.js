import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import { Link } from 'react-router';


/*This file handles display of the CV page*/

class NotFound extends Component {
  render() {
    return (
      <section className="container">
        <Row>
          <Col s={12}>
            <h1>Uh Oh!</h1>
            <p>There doesn't seem to be anything here. Click on any tab to view that page, <Link to="/">click here</Link> to navigate back to the home page</p>
          </Col>
        </Row>
      </section>
    );
  }
}

export default NotFound;
