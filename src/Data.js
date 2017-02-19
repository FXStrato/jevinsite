import Immutable from 'immutable';
import React from 'react';
import {Row, Col} from 'react-materialize';

//Images used
import jevinJPG from './img/jevinWest.jpg';
import eigenfactorImg from './img/eigenfactor.png';
import datalabImg from './img/datalab.png';
import viziometricsImg from './img/viziometrics.png';


//Drawer/tab links navlinks
const drawerLinks = Immutable.List([{link: '/', body: 'Home'}, {link: '/research', body: 'Research'}, {link: '/publications', body: 'Publications'}, {link: '/teaching', body: 'Teaching'}, {link: '/presentations', body: 'Presentations'}, {link: '/bio', body: 'Bio'}, {link: '/cv', body: 'CV'},{link: '/news', body: 'News'}]);

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
  announcements: [
    {
      title: '',
      body: <p>New course on <a href="http://callingbullshit.org/">Calling Bullshit</a> is now alive. (Jan. 12, 2017)</p>
    },
    {
      title: '',
      body: <p>I am always looking for good students and postdocs to join the lab. Please feel free to <a href="mailto:jevinw@uw.edu">email me</a> and we can discuss open positions.</p>
    },

    {
      title: '',
      body: <p>We are hiring in the UW iSchool: <a href="https://ischool.uw.edu/about/jobs/faculty">Data Science Lecture/Senior Lecturer in Data Science</a></p>
    },
  ],
  news: [
    {
      title: '',
      body: <p><a href="http://www.seattletimes.com/seattle-news/education/uw-class-on-how-to-spot-fake-data-goes-viral-within-hours/">Seattle Times</a> featured course on <a href="http://callingbullshit.org/">Calling Bullshit</a>.</p>
    },
    {
      title: '',
      body: <p><a href="http://www.npr.org/2017/01/23/511165485/its-getting-harder-to-sort-out-truth-from-fiction">NPR, Morning Edition</a> mentioned our Course on <a href="http://callingbullshit.org/">Calling Bullshit</a>.</p>
    },
    {
      title: '',
      body: <p><a href="http://komonews.com/news/local/univeristy-of-washington-course-could-be-lesson-in-bs-literally">KOMO News</a> featured our Course on <a href="http://callingbullshit.org/">Calling Bullshit</a>.</p>
    },
    {
      title: '',
      body: <p><a href="http://www.chronicle.com/article/The-Fine-Art-of-Sniffing-Out/238907">Chronicle of Higher Education</a> on the fine art of calling BS.</p>
    },
    {
      title: '',
      body: <p><a href="http://www.nature.com/news/controversial-impact-factor-gets-a-heavyweight-rival-1.21131?WT.ec_id=NATURE-20161215&spMailingID=52992218&spUserID=MjA1NjA1MTczMQS2&spJobID=1062902411&spReportId=MTA2MjkwMjQxMQS2">Nature</a> and <a href="https://www.insidehighered.com/news/2016/12/14/exploring-citescore-elseviers-new-journal-impact-metrics">Inside HigherEd</a> highlighted our <a href="http://www.eigenfactor.org/projects/posts/citescore.php">citescore analysis</a>.</p>
    },
    {
      title: '',
      body: <p><a href="http://www.economist.com/news/science-and-technology/21700617-scientific-study-importance-diagrams-science-graphic-details">The Economist</a> and <a href="https://www.technologyreview.com/s/601589/the-first-visual-search-engine-for-scientific-diagrams/">MIT Technology Review</a> wrote about our <a href="http://viziometrics.org">Viziometrics Project</a>.</p>
    },
    {
      title: '',
      body: <p><a href="http://www.nature.com/news/men-cite-themselves-more-than-women-do-1.20176?WT.mc_id=TWT_NatureNews">Nature</a> wrote a news piece about our <a href="http://arxiv.org/abs/1607.00376">self-citation paper</a>. The paper was also feautured in the <a href="http://www.thetimes.co.uk/article/women-academics-trail-men-at-shameless-self-citation-xhb8gmzfs">The London Times</a>, <a href="http://motherboard.vice.com/read/manciting-study-finds-men-cite-their-own-science-papers-more-than-women">Vice Media's Motherboard</a> and <a href="https://www.washingtonpost.com/news/wonk/wp/2016/08/01/new-study-finds-that-men-are-often-their-own-favorite-experts-on-any-given-subject/?tid=sm_tw">The Washington Post</a>.</p>
    },
    {
      title: '',
      body: <p><a href="http://www.economist.com/news/science-and-technology/21700617-scientific-study-importance-diagrams-science-graphic-details">The Economist</a> and <a href="https://www.technologyreview.com/s/601589/the-first-visual-search-engine-for-scientific-diagrams/">MIT Technology Review</a> wrote about our <a href="http://viziometrics.org">Viziometrics Project</a>.</p>
    },
  ],
  publications: [
    {
      title: '',
      body: <p>A. Hiniker, R. Hong, Y. Kim, N. Chen, <b>J.D. West</b>, C. Aragon. (2017) <span class="papers">Toward the Operationalization of Visual Metaphor</span>. <em>Journal of the American Society for Information Science & Technology</em> (in press)</p>
    },
    {
      title: '',
      body: <p>S. Bae, D. Halperin, <b>J.D. West</b>, M. Rosvall and B. Howe. (2016) <span class="papers">Scalable and Efficient Flow-Based Community Detection for Large-Scale Graph Analysis</span>. <em>ACM Transactions on Knowledge Discovery from Data</em> (in press)</p>
    },
    {
      title: '',
      body: <p>P. Lee, <b>J.D. West</b> and B. Howe. (2016) <span class="papers"><a href="https://arxiv.org/abs/1605.04951">Viziometrics: Analyzing Visual Information in the Scientific Literature</a></span>. <em>arXiv</em> (in review)</p>
    }
  ],
  presentations: [
    {
      body: <span>PAE Reform Symposium, Stanford University (May 7, 2017)</span>
    },
    {
      body: <span>KnoweScape Conference. Sofia, Bulgaria (Feb. 23, 2017)</span>
    },
    {
      body: <span>HICSS Conference. Kona, Hawaii (Jan. 4-7)</span>
    },
    {
      body: <span>Network Indicators. George Washington University (Dec. 14, 2016)</span>
    },
    {
      body: <span>WoS as a research data set. Indiana University (Nov 13-14, 2016)</span>
    },
    {
      body: <span>The role of gender in scholarly authorship. Ohio State University (Nov 3-4, 2016)</span>
    },
    {
      body: <span>Moore-Sloan Data Science Environments, NYC (Oct 23-26, 2016)</span>
    },
    {
      body: <span>JSTOR Workshop on Reimagining the Monograph, NYC (Oct 13, 2016)</span>
    },
    {
      body: <span>Science of Science. Fred Hutch Cancer Research Center, Seattle (Sept 12, 2016)</span>
    }
  ],
});

export {drawerLinks, homeData};
