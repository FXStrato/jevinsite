import React, { Component } from 'react';
import { newsData } from './Data';

class News extends Component {
  render() {
    return (
      <section className="container">
        {newsData.get('data')}
      </section>
    );
  }
}

export default News;
