import React, { Component } from 'react';
import _ from 'lodash';
import {Row, Col, Collapsible, CollapsibleItem} from 'react-materialize';
import {publicationsData} from './Data';
import Scroll from 'react-scroll';

let scroll = Scroll.animateScroll;

class Publications extends Component {
  componentDidMount = () => {
    scroll.scrollToTop({duration: 0});
  }

  getArticles = (title, parameter) => {
    let temp =  _.map(publicationsData.get(parameter), (elem, index) => {
      return (
        <li key={parameter + '-' + index} style={{marginBottom: 10}}>
          <span className="bold">{elem.title}</span><br/>
          {elem.authors}
          {elem.journal_volume}
          {elem.html && elem.pdf ?
            <span>[<a href={elem.html} target="_blank">HTML</a> | <a href={elem.pdf} target="_blank">PDF</a>]</span>
            :
            ''
          }
          {elem.html && !elem.pdf ?
            <span>[<a href={elem.html} target="_blank">HTML</a>]</span>
            :
            ''
          }
          {!elem.html && elem.pdf ?
            <span>[<a href={elem.pdf} target="_blank">PDF</a>]</span>
            :
            ''
          }
          {elem.abstract && elem.bibTex ?
            <Collapsible popout={true}>
              {elem.abstract &&
                <CollapsibleItem header="Abstract">
                  {elem.abstract}
                </CollapsibleItem>
              }
              {elem.bibTex &&
                <CollapsibleItem header="BibTex">
                  {elem.bibTex}
                </CollapsibleItem>
              }
            </Collapsible>
          :
          <div></div>
        }
        </li>
      )
    });
    return (
      <Row>
        <Col s={12}>
          <h2 className="bold">{title}</h2>
          <hr/>
          <ul>
            {temp}
          </ul>
        </Col>
      </Row>
    );
  }

  render() {

    let inPrep = _.map(publicationsData.get('inPrep'), (elem, index) => {
      return (
        <li key={'inPrepItem-' + index} style={{marginBottom: 10}}>
          <span className="bold">{elem.title}</span><br/>
          {elem.authors}
          {elem.volume}
        </li>
      );
    })

    return (
      <section className="container extra-padding">
        <Row>
          <Col s={12}>
            <h2 className="bold">In Prep</h2>
            <hr/>
            <ul>
              {inPrep}
            </ul>
          </Col>
        </Row>
        {this.getArticles('Pre-Prints', 'prePrints')}
        {this.getArticles('Peer-Review Journals', 'peerJournals')}
        {this.getArticles('Peer-Review Conferences', 'peerReviewConferences')}
        {this.getArticles('Journals, Invited', 'journalsInvited')}
        {this.getArticles('Book Chapters', 'bookChapters')}
        {this.getArticles('Pseudocode', 'pseudocode')}
        {this.getArticles('Theses', 'theses')}
        {this.getArticles('Patents', 'patents')}
        {this.getArticles('Posters', 'posters')}
        {this.getArticles('Conference Workshops', 'workshops')}
        {this.getArticles('Blog Posts', 'blogposts')}
      </section>
    );
  }
}

export default Publications;
