import Immutable from 'immutable';
import React from 'react';
import {Row, Col} from 'react-materialize';

//Images used
import jevinJPG from './img/jevinWest.jpg';
import eigenfactorImg from './img/eigenfactor.png';
import datalabImg from './img/datalab.png';
import viziometricsImg from './img/viziometrics.png';


//Drawer/tab links navlinks
const drawerLinks = Immutable.List([{link: '/', body: 'Home'}, {link: '/publications', body: 'Publications'}, {link: '/teaching', body: 'Teaching'}, {link: '/presentations', body: 'Presentations'}, {link: '/bio', body: 'Bio'}, {link: '/cv', body: 'CV'},{link: '/news', body: 'News'}]);

const homeData = Immutable.Map({
  summary: (
    <Row>
      <Col className="center-align" s={12} m={4}>
        <img className="responsive-img z-depth-2" src={jevinJPG} alt="Jevin West"/>
      </Col>
      <Col s={12} m={8}>
        <p>
          I am an Assistant Professor in the <a href="https://ischool.uw.edu/" target="_blank">Information School</a> at the <a href="http://www.washington.edu" target="_blank">University of Washington</a>. I co-direct the <a href="https://datalab.ischool.uw.edu" target="_blank">DataLab</a>. I study the <span className="italics">Science of Science</span>. My laboratory consists of millions of scholarly papers and the billions of links that connect these papers. I develop <span className="italics">knowledge discovery</span> tools to both study and facilitate science.  In particular, I am interested in the origin of scholarly disciplines and how sociological and economic factors drive and slow the evolution of science.
        </p>
      </Col>
    </Row>
  ),
  projects: (
    <Row className="center-align">
      <Col s={12}>
        <h2 className="reduce-bot-margin">Projects</h2>
      </Col>
      <Col s={12} m={4}>
        <h3>Eigenfactor</h3>
        <a href="http://www.eigenfactor.org" target="_blank"><div className="hoverable" style={{border: 'solid 1px grey'}}><img style={{height: 159}} src={eigenfactorImg} alt="Eigenfactor Project" title="Eigenfactor Project"/></div></a>
      </Col>
      <Col s={12} m={4}>
        <h3>DataLab</h3>
        <a href="https://datalab.ischool.uw.edu" target="_blank"><div className="hoverable" style={{border: 'solid 1px grey'}}><img style={{height: 159}} src={datalabImg} alt="UW DataLab" title="UW DataLab"/></div></a>
      </Col>
      <Col s={12} m={4}>
        <h3>Viziometrics</h3>
        <a href="http://viziometrics.org" target="_blank"><div className="hoverable" style={{border: 'solid 1px grey'}}><img src={viziometricsImg} alt="Viziometrics Project" title="Viziometrics Project"/></div></a>
      </Col>
    </Row>
  ),
  announcements: (
    <Row>
      <Col s={12}>
        <h1>Announcements</h1>
      </Col>
    </Row>
  )
});

export {drawerLinks, homeData};
