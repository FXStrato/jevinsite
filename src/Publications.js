import React, { Component } from 'react';
import _ from 'lodash';
import {Row, Col} from 'react-materialize';
import {publicationsData} from './Data';
import Scroll from 'react-scroll';

let scroll = Scroll.animateScroll;

/*This file handles display of the publications page*/


class Publications extends Component {

  componentDidMount = () => {
    scroll.scrollToTop({duration: 0});
  }

  //Handles clicking of abstract or bibTex dropdowns. Will reveal or hide content.
  handleTouchTap = (event, id) => {
    event.preventDefault();
    let elem = document.getElementById(id);
    let icon = document.getElementById(id+'-icon');
    if(elem.style.display === 'none') {
      elem.style.display = 'inline';
      icon.innerText = 'keyboard_arrow_up';
    } else {
      elem.style.display = 'none';
      icon.innerText = 'keyboard_arrow_down';
    }
 };

  //Returns formatted view of each list element
  getArticles = (title, parameter) => {
    let temp =  _.map(publicationsData.get(parameter), (elem, index) => {
      return (
        <li key={parameter + '-' + index} style={{marginBottom: 10}}>
          <span className="bold">{elem.title}</span><br/>
          {elem.authors}
          {elem.journal_volume}
          {elem.html || elem.pdf || elem.abstract || elem.bibTex ? <span>[</span> : ''}
          {elem.html ?
            <span style={{marginRight: 10}}><a href={elem.html} target="_blank">HTML</a></span>
            :
            ''
          }
          {elem.pdf ?
            <span style={{marginRight: 10}}><a href={elem.pdf} target="_blank">PDF</a></span>
            :
            ''
          }
          {elem.abstract ?
            <a style={{marginRight: 10}} href="" onClick={(e) => {this.handleTouchTap(e, parameter + '-abstract-' + index)}}>Abstract <i id={parameter + '-abstract-' + index + '-icon'} className="material-icons tiny">keyboard_arrow_down</i></a>
          :
          ''
          }
          {elem.bibTex ?
            <a style={{marginRight: 10}} href="" onClick={(e) => {this.handleTouchTap(e, parameter + '-bibTex-' + index)}}>bibTex <i id={parameter + '-bibTex-' + index + '-icon'} className="material-icons tiny">keyboard_arrow_down</i></a>
          :
          ''
          }
          {elem.html || elem.pdf || elem.abstract || elem.bibTex ? <span style={{marginLeft: -10}}>]</span> : ''}
          <br/>
          {elem.abstract ?
            <div id={parameter + '-abstract-' + index} className="animated" style={{display: 'none'}}>
              <hr/>
              <h3 style={{marginBottom: 5, marginTop: 8}}>Abstract</h3>
              {elem.abstract}
            </div>
          :
          ''
          }
          {elem.bibTex ?
            <div id={parameter + '-bibTex-' + index} className="animated" style={{display: 'none'}}>
              <hr/>
              <h3 style={{marginBottom: 5, marginTop: 8}}>bibTex</h3>
              {elem.bibTex}
            </div>
          :
          ''
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

// {elem.abstract && elem.bibTex ?
//   <Collapsible popout={true} className="collapsible-remove-border">
//     {elem.abstract &&
//       <CollapsibleItem header="Abstract" className="z-depth-0">
//         {elem.abstract}
//       </CollapsibleItem>
//     }
//     {elem.bibTex &&
//       <CollapsibleItem header="BibTex" className="z-depth-0">
//         {elem.bibTex}
//       </CollapsibleItem>
//     }
//   </Collapsible>
// :
// <div></div>
// }
