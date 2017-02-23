import Immutable from 'immutable';
import React from 'react';
import {Row, Col} from 'react-materialize';
import {Link} from 'react-router';

//PDF's used
//import Aulck2016ICMLPDF from './documents/Aulck2016ICML.pdf';
//import West2014EconInquiryPDF from './documents/West2014EconInquiry.pdf';
import king2016arxivPDF from './papers/King2016arxiv.pdf';
import Portenoy2016arxivPDF from './papers/Portenoy2016arxiv.pdf';
import Bae2016tkddPDF from './papers/Bae2016tkdd.pdf';
import West2016IEEEPDF from './papers/West2016IEEE.pdf';
import Sugimoto2015PLoSOnePDF from './papers/Sugimoto2015PLoSOne.pdf';
import Rosvall2014NatureComPDF from './papers/Rosvall2014NatureCom.pdf';
import West2014EconInquiryPDF from './papers/West2014EconInquiry.pdf';
import Vilhena2014SocSciencePDF from './papers/Vilhena2014SocScience.pdf';

//Images used
import jevinJPG from './img/jevinWest.jpg';
import eigenfactorImg from './img/eigenfactor.png';
import datalabImg from './img/datalab.png';
import viziometricsImg from './img/viziometrics.png';
import researchCollageImg from './img/research_collage.png';
import mappingScienceIMG from './img/science_of_science.png';
import knowSciEngImg from './img/knowledge_science_engineering.png';
import genderAuthorshipImg from './img/gender_authorship.png';
import babelEigenImg from './img/babel_eigenfactor.png';
import coursectorImg from './img/coursector.png';
import openAccessImg from './img/open_access.png';
import dataProvImg from './img/data_providers.png';
import fundersImg from './img/funders.png';

//Drawer/tab links navlinks
const drawerLinks = Immutable.List([{link: '/', body: 'Home'}, {link: '/research', body: 'Research'}, {link: '/publications', body: 'Publications'}, {link: '/teaching', body: 'Teaching'}, {link: '/presentations', body: 'Presentations'}, {link: '/bio', body: 'Bio'}, {link: '/cv', body: 'CV'},{link: '/news', body: 'News'}]);

const homeData = Immutable.Map({
  summary: (
    <Row>
      <Col className="center-align" s={12} m={4}>
        <img className="responsive-img z-depth-2 home-intro" src={jevinJPG} alt="Jevin West"/>
      </Col>
      <Col s={12} m={8} className="valign-wrapper home-intro">
        <p className="valign">
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
      body: <p>A. Hiniker, R. Hong, Y. Kim, N. Chen, <span className="bold">J.D. West</span>, C. Aragon. (2017) <span className="bold">Toward the Operationalization of Visual Metaphor</span>. <span className="italics">Journal of the American Society for Information Science & Technology</span> (in press)</p>
    },
    {
      title: '',
      body: <p>S. Bae, D. Halperin, <span className="bold">J.D. West</span>, M. Rosvall and B. Howe. (2016) <span className="bold">Scalable and Efficient Flow-Based Community Detection for Large-Scale Graph Analysis</span>. <span className="italics">ACM Transactions on Knowledge Discovery from Data</span> (in press)</p>
    },
    {
      title: '',
      body: <p>P. Lee, <span className="bold">J.D. West</span> and B. Howe. (2016) <span className="bold"><a href="https://arxiv.org/abs/1605.04951">Viziometrics: Analyzing Visual Information in the Scientific Literature</a></span>. <span className="italics">arXiv</span> (in review)</p>
    }
  ],
  presentations: [
    {
      body: <p>PAE Reform Symposium, Stanford University (May 7, 2017)</p>
    },
    {
      body: <p>KnoweScape Conference. Sofia, Bulgaria (Feb. 23, 2017)</p>
    },
    {
      body: <p>HICSS Conference. Kona, Hawaii (Jan. 4-7)</p>
    },
    {
      body: <p>Network Indicators. George Washington University (Dec. 14, 2016)</p>
    },
    {
      body: <p>WoS as a research data set. Indiana University (Nov 13-14, 2016)</p>
    },
    {
      body: <p>The role of gender in scholarly authorship. Ohio State University (Nov 3-4, 2016)</p>
    },
    {
      body: <p>Moore-Sloan Data Science Environments, NYC (Oct 23-26, 2016)</p>
    },
    {
      body: <p>JSTOR Workshop on Reimagining the Monograph, NYC (Oct 13, 2016)</p>
    },
    {
      body: <p>Science of Science. Fred Hutch Cancer Research Center, Seattle (Sept 12, 2016)</p>
    }
  ],
});

const researchData = Immutable.Map({
  header: (
    <Col className="center-align" s={12}>
      <br/>
      <Link to="/publications"><img className="responsive-img boxed z-depth-2 hoverable" src={researchCollageImg} alt="Research Collage" title="Research Collage"/></Link>
    </Col>
  ),
  section_1: (
    <Row>
      <Col s={12}>
        <h2>Science of Science</h2>
        <hr/>
      </Col>
      <Col s={12}>
        <p>Science is the greatest of human inventions. It has solved and continues to solve many of societies most pressing questions in human health, planetary wellness and economic viability. But one of Science's new challenges is the well being of Science itself. The reproducibility crisis, misaligned incentives and evaluations of scientists, literature overload, publication bias, and out-of-date publishing models are just a few of the maladies of Science. Turning the microscope on Science itself - the <span className="italics">Science of Science</span> - is the focus of my research.</p>

        <p><span>How is this different than the sociology and history of science, science policy or scholarly communication?</span> Overlaps exist and methods are borrowed from these established disciplines, but the difference is the scale and kind of data, the methods and tools from data science, and the amalgam of these disciplines under one roof. It is difficult to understand literature overload or the reproducibility crisis if one does not examine, in parallel, what drives scientists to publish, what technologies they use to disseminate their findings, and their established norms for publishing.</p>
      </Col>
      <Col className="center-align" s={12}>
        <img className="responsive-img" src={knowSciEngImg} alt="Knowledge Science and Engineering" title="Knowledge Science and Engineering" />
      </Col>
      <Col s={12}>
        <p>My research breaks into two categories: (1) <span className="bold">knowledge science</span> and (2) <span className="bold">knowledge engineering</span>.</p>

        <p><span className="bold">(1)</span> I study how scientists organize and communicate information. I look at gender bias in scholarly authorship. I develop methods for evaluating scientific impact. I look at the communication infrastructure and the social factors that lead to knowledge production in science.</p>

        <p><span className="bold">(2)</span> I develop tools and techniques for auto-categorizing and mining the literature, improving scholarly navigation (e.g., recommenders) and rethinking models of dissemination. My passion is to facilitate science and to keep this powerful machine running well. What I learn from knowledge science informs the recommender systems, search tools and mining techniques and vice versa. </p>

        <p><span className="bold">Citation networks.</span> As a biologist, I appreciate the utility of a good model system.  Most of what we know about biology comes from a fruit fly, a worm and a small bacterium. A citation network is my model system for studying the flow of information. This model system is found, not within any <span className="italics">one</span> scholarly paper, but among the millions of scholarly papers that have been written over the last several centuries and the references that connect these papers. Initially, it was my interest in the history and sociology of science that attracted me to citation networks.</p>

        <ul className="browser-default">
            <li>How does the structure of science change over time?</li>
            <li>What paper or papers helped form or break apart existing fields?</li>
            <li>What is interdisciplinary science and what is its role in generating novel ideas?</li>
        </ul>

        <p>Citation networks by themselves are interesting, but they also server as model systems for complex information networks of all kinds. One of the big challenges for understanding gene regulatory networks, ecosystem function or the evolution of virulence is to understand how the topology&#8212;the structure of these communication networks&#8212;affects function.  The goal is the same with citation networks.  The distinguishing quality is that a citation is relatively well defined, and the data is vast and easily accessible.  The <a href="http://www.eigenfactor.org/" target="_blank">Eigenfactor Project</a> provides some examples of the types of research that can be done with large, citation networks.</p>
      </Col>
      <Col className="center-align" s={12}>
        <a target="_blank" href="http://www.eigenfactor.org/projects/mappingScience/"><img className="responsive-img z-depth-2 hoverable" src={mappingScienceIMG} alt="Mapping Science" title="Science of Science"/></a>
      </Col>
    </Row>
  ),
  section_2: (
    <Row>
      <Col s={12}>
        <h2>The Scholarly Graph</h2>
        <hr/>
        <div>
        <p>The <span className="bold">scholarly graph</span> is the keystone species in my research ecosystem. This consists of the millions of papers and billions of links that connect these papers. It includes the full text, figures, authors, and any other data associated with a scholarly article. It also includes connections to intellectual products on the web, in patents and in books. I have spent a good part of my academic career curating this scholarly graph using open data sources and content provided by publishers. It is from here that we can begin to ask questions about <span className="italics">the origin and evolution of ideas and disciplines and how we can we use this to better facilitate science and innovation?</span> I think of myself as a librarian with data science tools. I help scholars mine the literature in ways that go beyond a simple google scholar search.</p>

        <p><span className="bold">The Scholarly Graph, <span className="italics">In Aggregate</span>.</span> It is only in the last 5-10 years that researchers have been able to access and analyze the literature in aggregate. By aggregate, I mean the literature as a whole, not individual papers but millions of papers sewed together through citations, common language and across generations of scientists. Why not sooner? Publishers are reluctant to share their publications in bulk, and technologies for hosting and analyzing the literature at scale are just now becoming available. The arXiv, NIH mandate, and other Open Access initiatives are improving aggregate potential, but more needs to be done. There are many reasons to support Open Access, but for me, the reason is simple. There is a treasure trove that exists in the literature that can only be found through aggregate mining. No human has the capacity to read millions of publications and follow billions of links. Computers can. New advances in machine learning, natural language processing and network analytics are begging for a chance to go to work on scientific corpora. Humans can then interpret the nuggets mined.</p>

        <p><span className="bold">What if you had the entire literature? What could you do differently in your field? What kinds of questions could you ask that you could not when only looking at individual papers?</span> This is not a hypothetical any more. It is now possible and guides my research trajectory. It is a question I pose to collaborators and students. It often leads to interesting conversations and new questions. If you have an interesting answer, let's discuss and explore!</p>

        </div>
      </Col>
    </Row>
  ),
  section_3: (
    <div>
      <Row>
        <Col s={12}>
          <h2>Research Projects</h2>
          <hr/>
        </Col>
      </Row>
      <Row>
        <Col s={12} m={3} className="center-align">
          <a href="http://www.eigenfactor.org/" target="_blank"><img className="hoverable z-depth-2 responsive-img" src={eigenfactorImg} alt="Eigenfactor Project" title="Eigenfactor Project"/></a>
        </Col>
        <Col s={12} m={9}>
          <p>The aim of the <a href="http://www.eigenfactor.org/">Eigenfactor Project</a> is to develop methods, algorithms, and visualizations for mapping the structure of science. We use these maps to identify (1) disciplines and emerging areas of science, (2) key authors, papers and venues and (3) communication patterns such as differences in gender bias. We also use these maps to study scholarly publishing models and build recommendation engines and search interfaces for improving how scholars access and navigate the literature.</p>
        </Col>
      </Row>
      <Row>
        <Col s={12} m={3} className="center-align">
          <a href="http://www.eigenfactor.org/gender/" target="_blank"><img className="hoverable z-depth-2 responsive-img" src={genderAuthorshipImg} alt="Gender Authorship" title="Gender Authorship"/></a>
        </Col>
        <Col s={12} m={9}>
          <p>There are many places where bias exists in science: publication bias, bias in funding decisions and bias in promotion and tenure. These matter for people's careers, and they matter for the health of science. The <a href="http://www.eigenfactor.org/gender/" target="_blank">Gender Project</a> looks at gender differences in <a href="http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0066212" target="_blank">authorship patterns</a> (e.g., who authors with whom) and <a href="https://arxiv.org/abs/1607.00376"target="_blank">self-promotion</a>. We have built a <a href="http://www.eigenfactor.org/gender/" target="_blank">gender browser</a> for exploring this data by field. Our goal is to provide data and tools for policy makers and those interested in the sociology of science.</p>
        </Col>
      </Row>
      <Row>
        <Col s={12} m={3} className="center-align">
          <a href="http://www.viziometrics.org/" target="_blank"><img className="hoverable z-depth-2 responsive-img" src={viziometricsImg} alt="Viziometrics Project" title="Viziometrics Project"/></a>
        </Col>
        <Col s={12} m={9}>
          <p>Scientometricians have spent considerable effort analyzing citations and text. They use these modes of communication as a way of measuring impact and tracking the flow of ideas. Figures have largely been ignored, yet contain the key findings and summaries of models and mechanisms. The aim of the <a href="http://www.viziometrics.org" target="blank">Viziometrics Project</a> is to focus on these dense, information objects. We have developed an open source platform for extracting the millions of figures in the literature and applying computer vision techniques for organizing and analyzing visual representations of data and ideas.</p>
        </Col>
      </Row>
      <Row>
        <Col s={12} m={3} className="center-align">
          <a href="http://babel.eigenfactor.org" target="_blank"><img src={babelEigenImg} className="hoverable z-depth-2 responsive-img" alt="babel.eigenfactor.org" title="babel.eigenfactor.org"/></a>
        </Col>
        <Col s={12} m={9}>
          <p>The <a href="http://babel.eigenfactor.org" target="_blank">babel.eigenfactor.org</a> project aims to bring recommender research to scholarly navigation. There has been considerable effort developing recommendation algorithms for finding restaurants, movies and books, but far less effort helping scientists find relevant papers. To keep up with the exponential growth of the literature, scientists will need tools beyond simple google keyword searchers. They will need better interfaces and filtering algorithms designed specifically for scholarly search. The goal of the babel project is to build data environments for facilitating this research.</p>
        </Col>
      </Row>
      <Row>
        <Col s={12} m={3} className="center-align">
          <a href="http://www.coursector.org/" target="_blank"><img className="hoverable z-depth-2 responsive-img" src={coursectorImg} alt="Coursector Project" title="Coursector Project"/></a>
        </Col>
        <Col s={12} m={9}>
          <p>UW is becoming a hub for data-driven research and teaching. However, its ability to apply data science tools to its own administrative data is underdeveloped - a general problem for higher education. We have several projects applying data science to university data. <a href="http://www.coursector.org/" target="_blank">Coursector.org</a> is one example. We are developing techniques for predicting <a href="" target="_blank">[1]</a> and understanding student attrition, evaluating program performance, and building course recommenders. Other examples include mapping UW's global imprint and examining library journal holdings, usage and costs.
        </p>
        </Col>
      </Row>
      <Row>
        <Col s={12} m={3} className="center-align">
          <a href="http://www.eigenfactor.org/projects/openAccess/" target="_blank"><img className="hoverable z-depth-2 responsive-img" src={openAccessImg} alt="Cost Effectiveness" title="Cost Effectiveness"/></a>
        </Col>
        <Col s={12} m={9}>
          <p>The <a href="https://en.wikipedia.org/wiki/Open_access" target="_blank">open access</a> movement has made great strides. There has been a significant increase in Open Access journals over the last ten years and many large foundations now <a href="http://www.gatesfoundation.org/How-We-Work/General-Information/Open-Access-Policy" target="_blank">require OA</a>. Unfortunately, during the same time, there has been a signficiant increase in exploitative, <a href="https://en.wikipedia.org/wiki/Predatory_open_access_publishing" target="_blank">predatory publishers</a>, which charge authors to publish with little or no peer review, editorial services or authentic certifiation. We are developing a <a href="http://www.eigenfactor.org/projects/openAccess/" target="_blank">cost effectiveness </a> tool that will create an open journal market of prices and influence scores where these kinds of journals can be objectively identified <a href="" target="_blank">[2]</a>.</p>
        </Col>
      </Row>
    </div>
  ),
  section_4: (
    <div>
      <Row>
        <Col s={12}>
          <h2>Research Support</h2>
          <hr/>
          <p>Science is a highly collaborative effort. It is no different for my research. I rely on my colleagues' expertise, students, university support, data providers and funders.</p>
        </Col>
      </Row>
      <Row>
        <Col s={12} m={3} className="center-align">
          <a href="https://datalab.ischool.uw.edu/" target="_blank"><img src={datalabImg} alt="DataLab" title="DataLab" className="hoverable z-depth-2 responsive-img"/></a>
        </Col>
        <Col s={12} m={9}>
          <p>The <a href="https://datalab.ischool.uw.edu/">DataLab</a> is a lab at the University of Washington Information School. <a href="http://faculty.washington.edu/espiro/">Emma Spiro</a>, <a href="http://www.jblumenstock.com">Josh Blumenstock</a> and I started the lab in 2013. Currently, Emma and I co-direct the lab. The idea is to bring students, post-docs and faculty together around topics in data science. Our research focus areas are the Science of Science, Computational Social Science, Visualization, Data Curation, Data for Developmental and Social Networks. One of our themes is doing Data Science for Social Good. Most of our projects have some social element. If you are prospective student or postdoc interested in joining the lab, please feel free to <a href="mailto:jevinw@uw.edu">contact me</a>.</p>
        </Col>
      </Row>
      <Row>
        <Col s={12} m={3} className="center-align">
          <a target="_blank" href="https://datalab.ischool.uw.edu/"><img src={dataProvImg} alt="DataLab" title="DataLab" className="hoverable z-depth-2 responsive-img" /></a>
        </Col>
        <Col s={12} m={9}>
          <p><span className="bold">Data Providers.</span> Curating good, clean corpora takes an enormous amount of effort. I want to give a special thanks to JSTOR, arXiv, SSRN, PubMed, DBLP, Thomson Reuters, ADS, Aminer, Microsoft Academic Search, Semantic Scholar, Open Academic Society, and the many other groups contributing to (open) big scholarly data. For as much flak as I give publishers, I want to thank them as well. I may not completely agree with their antiquated models of dissemination, but they have provided an important service for science. They will continue to play an important role. </p>
        </Col>
      </Row>
      <Row>
        <Col s={12}>
          <p><span className="bold">Funders.</span> I am grateful for the generous funding from many organizations supporting this research, including JSTOR, Microsoft, the NSF, Sloan Foundation, PNNL, University of Washington, and many others.</p>
        </Col>
        <Col s={12} className="center-align">
          <img src={fundersImg} alt="funders" title="funders" className="responsive-img" />
        </Col>
      </Row>
    </div>
  )
});

const publicationsData = Immutable.Map({
  inPrep: [
    {
      title: 'Mapping mathematical jargon in the scholarly literature (2016)',
      authors: <div>J. Portenoy, <span className="bold">J.D. West</span></div>,
      volume: '[In Review]'
    },
    {
      title: 'Assessing Gender Authorship in Aquaculture Publications (2016)',
      authors: <div>M. Chow, H. Egna, <span className="bold">J.D. West</span></div>,
      volume: '[In Review]'
    },
    {
      title: 'Attrition and Performance of Community College Transfers (2016)',
      authors: <div>L. Aulck, <span className="bold">J.D. West</span></div>,
      volume: '[In Review]'
    },
    {
      title: 'Are Trolls Good (At Choosing Valuable Patents)? (2017)',
      authors: <div>A.W. Torrance, <span className="bold">J.D. West</span></div>,
      volume: '[In Prep]'
    },
    {
      title: 'Improved Adaptation in Exogenously and Endogenously Changing Environments (2016)',
      authors: <div>J.R. Nahum, <span className="bold">J.D. West</span>, B.A. Althouse, L. Zaman, C. Ofria, B. Kerr</div>,
      volume: '[In Prep]'
    },
  ],
  prePrints: [
    {
      title: 'Viziometrics: Analyzing Visual Information in the Scientific Literature (2016)',
      authors: <div>P. Lee, <span className="bold">J.D. West</span>, B. Howe</div>,
      journal_volume: (
        <div>
          <span className="italics">arXiv </span>
          :1605.04951. Top 0.01% of all arXiv articles scored by <a href="https://www.altmetric.com/details/9231143?src=bookmarklet#score" target="_blank">Altmetric</a> (792)
          <div>[In Review]</div>
        </div>
      ),
      html: 'https://arxiv.org/abs/1607.00376',
      pdf: king2016arxivPDF,
      abstract: "How common is self-citation in scholarly publication and does the practice vary by gender? Using novel methods and a dataset of 1.5 million research papers in the scholarly database JSTOR published between 1779-2011, we find that nearly 10% of references are self-citations by a paper's authors. We further find that over the years between 1779-2011, men cite their own papers 56% more than women do. In the last two decades of our data, men self-cite 70% more than women. Women are also more than ten percentage points more likely than men to not cite their own previous work at all. Despite increased representation of women in academia, this gender gap in self-citation rates has remained stable over the last 50 years. We break down self-citation patterns by academic field and number of authors, and comment on potential mechanisms behind these observations. These findings have important implications for scholarly visibility and likely consequences for academic careers.",
      bibTex: (
        <div>
          &#64;ARTICLE&#123;Lee2016arxiv, <br/>
              author = 	&#123;M.M. King and C.T. Bergstrom and S.J. Correll and J. Jacquet and J.D. West&#125;,<br/>
              title = 	&#123;Men set their own cites high: Gender and self-citation across fields and over time&#125;,<br/>
              journal = 	&#123;arXiv preprint:1607.00376&#125;,<br/>
              year = 	&#123;2016&#125;&#125;<br/>
        </div>
      )
    },
    {
      title: 'Leveraging Citation Networks to Visualize Scholarly Influence Over Time (2016)',
      authors: <div>J. Portenoy, J. Hullman, <span className="bold">J.D. West</span></div>,
      journal_volume: (
        <div>
          <span className="italics">arXiv</span>
           :1611.07135.
        </div>
      ),
      html: 'https://arxiv.org/abs/1611.07135',
      pdf: Portenoy2016arxivPDF,
      abstract: "Assessing the influence of a scholar's work is an important task for funding organizations, academic departments, and researchers. Common methods, such as measures of citation counts, can ignore much of the nuance and multidimensionality of scholarly influence. We present an approach for generating dynamic narrative visualizations of scholars' careers. This approach uses an animated node-link diagram showing the citation network accumulated around the researcher over the course of the career in concert with key indicators, highlighting influence both within and across fields. We developed our design in collaboration with one funding organization—the Pew Biomedical Scholars program—but the methods are generalizable to visualizations of scholarly influence in general. We applied the design method to the Microsoft Academic Graph, which includes more than 120 million publications. We validate our abstractions throughout the process through collaboration with the Pew Biomedical Scholars program officers and summative evaluations with their scholars.",
      bibTex: (
        <div>
          &#64;ARTICLE&#123;Portenoy2016arxiv,<br/>
              author = &#123;J. Portenoy and J. Hullman and J.D. West&#125;,<br/>
              title = &#123;Leveraging Citation Networks to Visualize Scholarly Influence Over Time&#125;,<br/>
              journal = &#123;arXiv preprint:1605.04951&#125;,<br/>
              year = &#123;2016&#125;&#125;<br/>
        </div>
      )
    }
  ],
  peerJournals: [
    {
      title: 'Toward the Operationalization of Visual Metaphor (2017)',
      authors: <div>A. Hiniker, R. Hong, Y. Kim, N. Chen, <span className="bold">J.D. West</span>, C. Aragon</div>,
      journal_volume: (
        <div>
          <span className="italics">Journal of the American Society for Information Science &#38 Technology</span>
          (In Press)
        </div>
      ),
      html: '',
      pdf: '',
      abstract: "Many successful digital interfaces employ visual metaphors to convey features or data properties to users, but the characteristics that make a visual metaphor effective are not well-understood. We used a theoretical conception of metaphor from cognitive linguistics to design an interactive system for viewing the citation network of the corpora of literature in the JSTOR database, a highly connected compound graph of 2 million papers linked by 8 million citations. We created four variants of this system, manipulating two distinct properties of metaphor. We conducted a between-subjects experimental study with 80 participants to compare understanding and engagement when working with each version. We found that building on known image schemas improved response time on lookup tasks, while contextual detail predicted increases in persistence and the number of inferences drawn from the data. Schema-congruency combined with contextual detail produced the highest gains in comprehension. These findings provide concrete mechanisms by which designers presenting large data sets through metaphorical interfaces may improve their effectiveness and appeal with users.",
      bibTex: (
        <div>
          &#64;article &#123;Hiniker2017jasist,<br/>
                author = &#123;Hiniker, A. and Hong, R. and Kim, Y. and N. Chen and J.D. West and Aragon, C.&#125;,<br/>
                title = &#123;Toward the Operationalization of Visual Metaphor&#125;,<br/>
                journal = &#123;Journal of the American Society for Information Science and Technology&#125;,<br/>
                volume = &#123;(in press)&#125;,<br/>
                year = &#123;2016&#125;&#125;<br/>
        </div>
      )
    },
    {
      title: 'All Patents Great and Small - A Big Data Network Approach to Valuation (2016)',
      authors: <div>A.W. Torrance, <span className="bold">J.D. West</span></div>,
      journal_volume: (
        <div>
          <span className="bold">Virginia Journal of Law and Technology</span>.
          (In Press)
        </div>
      ),
      html: '',
      pdf: '',
      abstract: 'Measuring patent value is an important goal of scholars in both patent law and patent economics.  However, doing so objectively, accurately and consistently has proved exceedingly difficult.  At least part of the reason for this difficulty is that patents themselves are complex documents that are difficult even for patent experts to interpret.  In addition, issued patents are the result of an often long and complicated negotiation between applicant and patent office (in the United States, the United States Patent & Trademark Office ("USPTO")), the result of which is an opaque “prosecution history” upon which depend the scope of claimed patent rights.  In this Article, we approach the concept of patent value by using the relative positions of issued United States ("U.S.") patents embedded within a comprehensive patent citation network to measure the importance of those patents within the network.  Thus, we tend to refer to the "importance" of patents instead of "value", but there is good reason to believe that these two concepts share a very similar meaning.',
      bibTex: (
        <div>
          &#64;article&#123;torrance2016virginia,<br/>
              author = &#123;&#123;A.W. Torrance&#125; and &#123;J.D. West&#125;&#125;,<br/>
              title = &#123;All Patents Great and Small - A Big Data Network Approach to Valuation&#125;,<br/>
              journal = &#123;Virginia Journal of Law and Technology&#125;,<br/>
              volume = &#123;(in press)&#125;,<br/>
              year = &#123;2017&#125;&#125;<br/>
        </div>
      )
    },
    {
      title: 'Scalable and Efficient Flow-Based Community Detection for Large-Scale Graph Analysis (2016)',
      authors: <div>S. Bae, D. Halperin, <span className="bold">J.D. West</span>, M. Rosvall, B. Howe</div>,
      journal_volume: (
        <div>
          <span className="italics">ACM Transactions on Knowledge Discovery from Data</span>.
          (In Press)
        </div>
      ),
      html: '',
      pdf: Bae2016tkddPDF,
      abstract: "Community detection is a powerful approach to uncover important structures in large networks. For real networks that often describe the flow of some entity, flow-based community detection methods are particularly important. Infomap is a flow-based community detection algorithm that optimizes the objective function known as the map equation. Third-party benchmarks have found that Infomap is the most effective algorithm for identifying clusters in large graphs. Unfortunately, though Infomap works well, it is an inherently serial algorithm and thus cannot take advantage of multi-core processing in modern computers, limiting its use for analyzing large graphs quickly. In this paper, we propose a novel algorithm to optimize the map equation called RelaxMap. RelaxMap provides two important improvements over Infomap: parallelization, so that the map equation can be optimized over much larger graphs, and prioritization, so that the most important work occurs first, iterations take less time, and the algorithm converges faster. We implement these techniques using OpenMP on shared-memory multicore systems, and evaluate our approach on a variety of graphs from standard graph clustering benchmarks as well as real graph datasets. Our evaluation shows that both techniques are effective: RelaxMap achieves 70% parallel efficiency on 8 cores, and prioritization improves algorithm performance by an additional 20%–50% in average, depending on the graph properties. Additionally, RelaxMap converges in the similar number of iterations and provides solutions of equivalent quality as the serial Infomap implementation.",
      bibTex: (
        <div>
          &#64;article&#123;Bae2016tkdd,<br/>
              title=&#123;Scalable and Efficient Flow-Based Community Detection for Large-Scale Graph Analysis&#125;,<br/>
              author=&#123;&#123;S. Bae&#125; and &#123;D. Halperin&#125; and \textbf&#123;J.D. West&#125; and &#123;M. Rosvall&#125; and &#123;B. Howe&#125;&#125;,<br/>
              journal = &#123;ACM Transactions on Knowledge Discovery from Data&#125;,<br/>
              volume = &#123;(in press)&#125;,<br/>
              year = &#123;2016&#125;&#125;<br/>
        </div>
      )
    },
    {
      title: 'A recommendation system based on hierarchical clustering of an article-level citation network (2016)',
      authors: <div><span className="bold">J.D. West</span>, I. Wesley-Smith, C.T. Bergstrom</div>,
      journal_volume: (
        <div>
          <span className="italics">IEEE Transactions on Big Data</span>.
          2(2): 113-123 <br/>
          doi: 10.1109/TBDATA.2016.2541167
        </div>
      ),
      html: 'http://doi.ieeecomputersociety.org/10.1109/TBDATA.2016.2541167',
      pdf: West2016IEEEPDF,
      abstract: "To better understand the flows of ideas or information through social and biological systems, researchers develop maps that reveal important patterns in network flows. In practice, network flow models have implied memoryless first-order Markov chains, but recently researchers have introduced higher-order Markov chain models with memory to capture patterns in multi-step pathways. Higher-order models are particularly important for effectively revealing actual, overlapping community structure, but higher-order Markov chain models suffer from the curse of dimensionality: their vast parameter spaces require exponentially increasing data to avoid overfitting and therefore make mapping inefficient already for moderate-sized systems. To overcome this problem, we introduce an efficient cross-validated mapping approach based on network flows modeled by sparse Markov chains. To illustrate our approach, we present a map of citation flows in science with research fields that overlap in multidisciplinary journals. Compared with currently used categories in science of science studies, the research fields form better units of analysis because the map more effectively captures how ideas flow through science.",
      bibTex: (
        <div>
          &#64;ARTICLE&#123;west2016IEEE,<br/>
              author = &#123;\textbf&#123;J.D. West&#125; and &#123;I. Wesley-Smith&#125; and &#123;C.T. Bergstrom&#125;&#125;,<br/>
              title = &#123;A recommendation system based on hierarchical clustering of an article-level citation network&#125;,<br/>
              journal = &#123;IEEE Transactions on Big Data&#125;,<br/>
              volume = &#123;2&#125;,<br/>
              number = &#123;2&#125;,<br/>
              month = &#123;June&#125;,<br/>
              pages = &#123;113-123&#125;,<br/>
              doi = &#123;10.1109/TBDATA.2016.2541167&#125;,<br/>
              year = &#123;2016&#125;&#125;<br/>
        </div>
      )
    },
    {
      title: 'The Academic Advantage: Gender Disparities in Patenting (2015)',
      authors: <div>C.R. Sugimoto, C. Ni, <span className="bold">J.D. West</span>, Vincent Lariviere</div>,
      journal_volume: (
        <div>
          <span className="italics">PLoS One</span>.
          <span class="volume"> 10(5): e0128000, doi: 10.1371/journal.pone.0128000</span>
        </div>
      ),
      html: 'http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0128000',
      pdf: Sugimoto2015PLoSOnePDF,
      abstract: "We analyzed gender disparities in patenting by country, technological area, and type of as- signee using the 4.6 million utility patents issued between 1976 and 2013 by the United States Patent and Trade Office (USPTO). Our analyses of fractionalized inventorships dem- onstrate that women’s rate of patenting has increased from 2.7% of total patenting activity to 10.8% over the nearly 40-year period. Our results show that, in every technological area, female patenting is proportionally more likely to occur in academic institutions than in corpo- rate or government environments. However, women’s patents have a lower technological impact than that of men, and that gap is wider in the case of academic patents. We also pro- vide evidence that patents to which women—and in particular academic women—contribut- ed are associated with a higher number of International Patent Classification (IPC) codes and co-inventors than men. The policy implications of these disparities and academic set- ting advantages are discussed.",
      bibTex: (
        <div>
          &#64;Article&#123;Sugimoto2015PlosOne,<br/>
              author = &#123;C.R. Sugimoto AND C. Ni AND J.D. West AND V. Larivière&#125;,<br/>
              journal = &#123;PLoS ONE&#125;,<br/>
              publisher = &#123;Public Library of Science&#125;,<br/>
              title = &#123;The Academic Advantage: Gender Disparities in Patenting&#125;,<br/>
              year = &#123;2015&#125;,<br/>
              month = &#123;05&#125;,<br/>
              volume = &#123;10&#125;,<br/>
              url = &#123;http://dx.doi.org/10.1371%2Fjournal.pone.0128000&#125;,<br/>
              pages = &#123;e0128000&#125;,<br/>
              number = &#123;5&#125;,<br/>
              doi = &#123;10.1371/journal.pone.0128000&#125;&#125;<br/>
        </div>
      )
    },
    {
      title: 'Memory in network flows and its effects on spreading dynamics and community detection (2014)',
      authors: <div>M. Rosvall, A.V. Esquivel, A. Lancichinetti, <span className="bold">J.D. West</span>, R. Lambiotte</div>,
      journal_volume: (
        <div>
          <span className="italics">Nature Communications.</span>
          <span class="volume"> 5:4630, doi:10.1038/ncomms5630</span>
        </div>
      ),
      html: 'http://www.nature.com/articles/ncomms5630',
      pdf: Rosvall2014NatureComPDF,
      abstract: "Random walks on networks is the standard tool for modelling spreading processes in social and biological systems. This first-order Markov approach is used in conventional community detection, ranking and spreading analysis, although it ignores a potentially important feature of the dynamics: where flow moves to may depend on where it comes from. Here we analyse pathways from different systems, and although we only observe marginal consequences for disease spreading, we show that ignoring the effects of second-order Markov dynamics has important consequences for community detection, ranking and information spreading. For example, capturing dynamics with a second-order Markov model allows us to reveal actual travel patterns in air traffic and to uncover multidisciplinary journals in scientific communication. These findings were achieved only by using more available data and making no additional assumptions, and therefore suggest that accounting for higher-order memory in network flows can help us better understand how real systems are organized and function.",
      bibTex: (
        <div>
          &#64;article&#123;Rosvall2014NatureCom,
              title=&#123;Memory in network flows and its effects on spreading dynamics and community detection&#125;,<br/>
              author=&#123;&#123;M. Rosvall&#125; and &#123;A.V. Esquivel&#125; and &#123;A. Lancichinetti&#125; and \textbf&#123;J.D. West&#125; and &#123;R. Lambiotte&#125;&#125;,<br/>
              journal=&#123;Nature Communications&#125;,<br/>
              volume=&#123;5&#125;,<br/>
              number=&#123;1&#125;,<br/>
              year=&#123;2014&#125;,<br/>
              publisher=&#123;Nature Publishing Group&#125;&#125;<br/>
        </div>
      )
    },
    {
      title: 'Cost-effectiveness of open access publications (2014)',
      authors: <div><span className="bold">J.D. West</span>, T.C. Bergstrom, C.T. Bergstrom</div>,
      journal_volume: (
        <div>
          <span className="italics">Economic Inquiry</span>.
          <span class="volume"> 52: 1315-1321, doi: 10.1111/ecin.12117</span>
        </div>
      ),
      html: 'http://onlinelibrary.wiley.com/doi/10.1111/ecin.12117/abstract',
      pdf: West2014EconInquiryPDF,
      abstract: "Open access publishing has been proposed as one possible solution to the serials crisis—the rapidly growing subscription prices in scholarly journal publishing. However, open access publishing can present economic pitfalls as well, such as excessive article processing charges. We discuss the decision that an author faces when choosing to submit to an open access journal. We develop an interactive tool to help authors compare among alternative open access venues and thereby get the most for their article processing charges.",
      bibTex: (
        <div>
          &#64;article &#123;West2014EconInquiry,<br/>
              author = &#123;J.D. West and T.C. Bergstrom and C.T. Bergstrom&#125;,<br/>
              title = &#123;Cost Effectiveness of Open Access Publications&#125;,<br/>
              journal = &#123;Economic Inquiry&#125;,<br/>
              volume = &#123;52&#125;,<br/>
              number = &#123;4&#125;,<br/>
              publisher = &#123;Wiley Periodicals, Inc.&#125;,<br/>
              issn = &#123;1465-7295&#125;,<br/>
              url = &#123;http://dx.doi.org/10.1111/ecin.12117&#125;,<br/>
              doi = &#123;10.1111/ecin.12117&#125;,<br/>
              pages = &#123;1315--1321&#125;,<br/>
              year = &#123;2014&#125;&#125;<br/>
        </div>
      )
    },
    {
      title: 'Finding Cultural Holes: How Structure and Culture Diverge in Networks of Scholarly Communication (2014)',
      authors: <div>D. Vilhena, J.G. Foster, M. Rosvall, <span className="bold">J.D. West</span>, J.A. Evans, C.T. Bergstrom</div>,
      journal_volume: (
        <div>
          <span className="italics">Sociological Science</span>.
          <span class="volume"> 1: 221-238, doi: 10.15195/v1.a15</span>
        </div>
      ),
      html: 'http://www.sociologicalscience.com/articles-vol1-15-221/',
      pdf: Vilhena2014SocSciencePDF,
      abstract: "Divergent interests, expertise, and language form cultural barriers to communication. No formalism has been available to characterize these “cultural holes.” Here we use information theory to measure cultural holes and demonstrate our formalism in the context of scientific communication using papers from JSTOR. We extract scientific fields from the structure of citation flows and infer field-specific cultures by cataloging phrase frequencies in full text and measuring the relative efficiency of between-field communication. We then combine citation and cultural information in a novel topographic map of science, mapping citations to geographic distance and cultural holes to topography. By analyzing the full citation network, we find that communicative efficiency decays with citation distance in a field-specific way. These decay rates reveal hidden patterns of cohesion and fragmentation. For example, the ecological sciences are balkanized by jargon, whereas the social sciences are relatively integrated. Our results highlight the importance of enriching structural analyses with cultural data.",
      bibTex: (
        <div>
          &#64;article&#123;Vilhena2014SocScience,<br/>
              author = &#123;D. Vilhena and J. Foster and M. Rosvall and J.D. West and J. Evans and C. Bergstrom&#125;,<br/>
              title = &#123;Finding Cultural Holes: How Structure and Culture Diverge in Networks of Scholarly Communication&#125;,<br/>
              doi = &#123;10.15195/v1.a15&#125;,<br/>
              issn = &#123;23306696&#125;,<br/>
              journal = &#123;Sociological Science&#125;,<br/>
              pages = &#123;221--238&#125;,<br/>
              url = &#123;http://www.sociologicalscience.com/articles-vol1-15-221/&#125;,<br/>
              volume = &#123;1&#125;,<br/>
              year = &#123;2014&#125;&#125;<br/>
        </div>
      )
    },
    {
      title: '',
      authors: <div></div>,
      journal_volume: (
        <div>

        </div>
      ),
      html: '',
      pdf: '',
      abstract: "",
      bibTex: (
        <div>

        </div>
      )
    },
    {
      title: '',
      authors: <div></div>,
      journal_volume: (
        <div>

        </div>
      ),
      html: '',
      pdf: '',
      abstract: "",
      bibTex: (
        <div>

        </div>
      )
    },
    {
      title: '',
      authors: <div></div>,
      journal_volume: (
        <div>

        </div>
      ),
      html: '',
      pdf: '',
      abstract: "",
      bibTex: (
        <div>

        </div>
      )
    },
    {
      title: '',
      authors: <div></div>,
      journal_volume: (
        <div>

        </div>
      ),
      html: '',
      pdf: '',
      abstract: "",
      bibTex: (
        <div>

        </div>
      )
    },
    {
      title: '',
      authors: <div></div>,
      journal_volume: (
        <div>

        </div>
      ),
      html: '',
      pdf: '',
      abstract: "",
      bibTex: (
        <div>

        </div>
      )
    },
    {
      title: '',
      authors: <div></div>,
      journal_volume: (
        <div>

        </div>
      ),
      html: '',
      pdf: '',
      abstract: "",
      bibTex: (
        <div>

        </div>
      )
    },
    {
      title: '',
      authors: <div></div>,
      journal_volume: (
        <div>

        </div>
      ),
      html: '',
      pdf: '',
      abstract: "",
      bibTex: (
        <div>

        </div>
      )
    },
    {
      title: '',
      authors: <div></div>,
      journal_volume: (
        <div>

        </div>
      ),
      html: '',
      pdf: '',
      abstract: "",
      bibTex: (
        <div>

        </div>
      )
    },
    {
      title: '',
      authors: <div></div>,
      journal_volume: (
        <div>

        </div>
      ),
      html: '',
      pdf: '',
      abstract: "",
      bibTex: (
        <div>

        </div>
      )
    },
  ],
});

export {drawerLinks, homeData, researchData, publicationsData};
