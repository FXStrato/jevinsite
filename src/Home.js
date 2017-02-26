import React, { Component } from 'react';
import {Row, Col, Collection, CollectionItem} from 'react-materialize';
import _ from 'lodash';
import {homeData} from './Data';
import Scroll from 'react-scroll';

let scroll = Scroll.animateScroll;

class Home extends Component {
  componentDidMount = () => {
    scroll.scrollToTop({duration: 0});
  }
  render() {

    let announcements = _.map(homeData.get('announcements'), (elem, index) => {
      return (
        <li className="collection-li" key={'announcementsitem-' + index}>{elem.body}</li>
      );
    })

    // let announcements = _.map(homeData.get('announcements'), (elem, index) => {
    //   return (
    //     <TableRow key={"announcement-" + index}>
    //       <TableRowColumn style={{whiteSpace: 'normal !important'}}>
    //         {elem.body}
    //       </TableRowColumn>
    //     </TableRow>
    //   );
    // })

    let news = _.map(homeData.get('news'), (elem, index) => {
      return (
        <li className="collection-li" key={'newsitem-' + index}>{elem.body}</li>
      );
    })

    let publications = _.map(homeData.get('publications'), (elem, index) => {
      return (
        <li className="collection-li" key={'publicationsitem-' + index}>{elem.body}</li>
      );
    })

    let presentations = _.map(homeData.get('presentations'), (elem, index) => {
      return (
        <li className="collection-li" key={'presentationsitem-' + index}>{elem.body}</li>
      );
    })

    return (
      <div className="container extra-padding">
        <h1 style={{display: 'none'}}>Home Page</h1>
        <section>{homeData.get('summary')}</section>
        <br/><hr/>
        <section>{homeData.get('projects')}</section>
        <br/><hr/><br/>
        <section>
          <Row>
            <Col s={12} m={4}>
              <h2 className="center-align reduce-bot-margin">Announcements</h2>
            </Col>
            <Col s={12} m={8}>
              <Collection>
                <CollectionItem>
                  <ul style={{marginLeft: 10, fontSize: 14}}>
                    {announcements}
                  </ul>
                </CollectionItem>
              </Collection>
            </Col>
          </Row>
        </section>
        <section>
          <Row>
            <Col s={12} m={4}>
              <h2 className="center-align reduce-bot-margin">News</h2>
            </Col>
            <Col s={12} m={8}>
              <Collection>
                <CollectionItem>
                  <ul style={{marginLeft: 10, fontSize: 14}}>
                    {news}
                  </ul>
                </CollectionItem>
              </Collection>
            </Col>
          </Row>
        </section>
        <section>
          <Row>
            <Col s={12} m={4}>
              <h2 className="center-align reduce-bot-margin">Publications</h2>
            </Col>
            <Col s={12} m={8}>
              <Collection>
                <CollectionItem>
                  <ul style={{marginLeft: 10, fontSize: 14}}>
                    {publications}
                  </ul>
                </CollectionItem>
              </Collection>
            </Col>
          </Row>
        </section>
        <section>
          <Row>
            <Col s={12} m={4}>
              <h2 className="center-align reduce-bot-margin">Presentations</h2>
            </Col>
            <Col s={12} m={8}>
              <Collection>
                <CollectionItem>
                  <ul style={{marginLeft: 10, fontSize: 14}}>
                    {presentations}
                  </ul>
                </CollectionItem>
              </Collection>
            </Col>
          </Row>
        </section>
      </div>
    );
  }
}

export default Home;
