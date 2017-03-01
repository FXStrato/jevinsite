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

  getArticles = parameter => {
    return _.map(publicationsData.get(parameter), (elem, index) => {
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
          <Collapsible>
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
        </li>
      )
    });
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

    let prePrints = this.getArticles('prePrints');
    let peerJournals = this.getArticles('peerJournals');
    let peerReviewConferences = this.getArticles('peerReviewConferences');
    let journalsInvited = this.getArticles('journalsInvited');
    let bookChapters = this.getArticles('bookChapters');


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
        <Row>
          <Col s={12}>
            <h2 className="bold">Pre-Prints</h2>
            <hr/>
            <ul>
              {prePrints}
            </ul>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <h2 className="bold">Peer-Review Journals</h2>
            <hr/>
            <ul>
              {peerJournals}
            </ul>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <h2 className="bold">Peer-Review Conferences</h2>
            <hr/>
            <ul>
              {peerReviewConferences}
            </ul>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <h2 className="bold">Journals, Invited</h2>
            <hr/>
            <ul>
              {journalsInvited}
            </ul>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <h2 className="bold">Book Chapters</h2>
            <hr/>
            <ul>
              {bookChapters}
            </ul>
          </Col>
        </Row>
      </section>
    );
  }
}

export default Publications;
