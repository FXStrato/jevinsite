import React, { Component } from 'react';
import { newsData } from './Data';

/*This class handles display of the news page*/

class News extends Component {
  render() {
    return (
      <section className="container extra-padding">
        {newsData.get('data')}
      </section>
    );
  }
}

export default News;
