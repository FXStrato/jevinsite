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
            <p>There doesn't seem to be anything here :/ Click on the name in the top left to return to the main page, or <Link to="/">click here</Link></p>
          </Col>
        </Row>
      </section>
    );
  }
}

export default NotFound;
