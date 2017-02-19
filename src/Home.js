import React, { Component } from 'react';
import {homeData} from './Data';

class Home extends Component {
  render() {
    return (
      <div className="container extra-padding">
        <h1 style={{display: 'none'}}>Home Page</h1>
        <section>{homeData.get('summary')}</section>
        <br/>
        <hr/>
        <section>{homeData.get('projects')}</section>
        <section>{homeData.get('announcements')}</section>
      </div>
    );
  }
}

export default Home;
