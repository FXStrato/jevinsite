import Immutable from 'immutable';
import React from 'react';
import {Row, Col} from 'react-materialize';
import {Link} from 'react-router';
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

const researchData = Immutable.Map({
  header: (
    <Col className="center-align" s={12}>
      <Link to="/publications"><img className="responsive-img boxed z-depth-2 hoverable" src={researchCollageImg} alt="Research Collage" title="Research Collage"/></Link>
    </Col>
  ),
  section_1: (
    <div>
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

        <p id="model_system"><span className="bold">Citation networks.</span> As a biologist, I appreciate the utility of a good model system.  Most of what we know about biology comes from a fruit fly, a worm and a small bacterium. A citation network is my model system for studying the flow of information. This model system is found, not within any <span className="italics">one</span> scholarly paper, but among the millions of scholarly papers that have been written over the last several centuries and the references that connect these papers. Initially, it was my interest in the history and sociology of science that attracted me to citation networks.</p>

        <ul className="browser-default">
            <li>How does the structure of science change over time?</li>
            <li>What paper or papers helped form or break apart existing fields?</li>
            <li>What is interdisciplinary science and what is its role in generating novel ideas?</li>
        </ul>

        <p>Citation networks by themselves are interesting, but they also server as model systems for complex information networks of all kinds. One of the big challenges for understanding gene regulatory networks, ecosystem function or the evolution of virulence is to understand how the topology&#8212;the structure of these communication networks&#8212;affects function.  The goal is the same with citation networks.  The distinguishing quality is that a citation is relatively well defined, and the data is vast and easily accessible.  The <a href="http://www.eigenfactor.org/">Eigenfactor Project</a> provides some examples of the types of research that can be done with large, citation networks.</p>
      </Col>
      <Col className="center-align" s={12}>
        <a target="_blank" href="http://www.eigenfactor.org/projects/mappingScience/"><img className="responsive-img z-depth-2 hoverable" src={mappingScienceIMG} alt="Mapping Science" title="Science of Science"/></a>
      </Col>
    </div>
  ),
  section_2: (
    <Col s={12}>
      <h2>The Scholarly Graph</h2>
      <hr/>
      <div>
      <p>The <span className="bold">scholarly graph</span> is the keystone species in my research ecosystem. This consists of the millions of papers and billions of links that connect these papers. It includes the full text, figures, authors, and any other data associated with a scholarly article. It also includes connections to intellectual products on the web, in patents and in books. I have spent a good part of my academic career curating this scholarly graph using open data sources and content provided by publishers. It is from here that we can begin to ask questions about <span className="italics">the origin and evolution of ideas and disciplines and how we can we use this to better facilitate science and innovation?</span> I think of myself as a librarian with data science tools. I help scholars mine the literature in ways that go beyond a simple google scholar search.</p>

      <p><span className="bold">The Scholarly Graph, <span className="italics">In Aggregate</span>.</span> It is only in the last 5-10 years that researchers have been able to access and analyze the literature in aggregate. By aggregate, I mean the literature as a whole, not individual papers but millions of papers sewed together through citations, common language and across generations of scientists. Why not sooner? Publishers are reluctant to share their publications in bulk, and technologies for hosting and analyzing the literature at scale are just now becoming available. The arXiv, NIH mandate, and other Open Access initiatives are improving aggregate potential, but more needs to be done. There are many reasons to support Open Access, but for me, the reason is simple. There is a treasure trove that exists in the literature that can only be found through aggregate mining. No human has the capacity to read millions of publications and follow billions of links. Computers can. New advances in machine learning, natural language processing and network analytics are begging for a chance to go to work on scientific corpora. Humans can then interpret the nuggets mined.</p>

      <p><span className="bold">What if you had the entire literature? What could you do differently in your field? What kinds of questions could you ask that you could not when only looking at individual papers?</span> This is not a hypothetical any more. It is now possible and guides my research trajectory. It is a question I pose to collaborators and students. It often leads to interesting conversations and new questions. If you have an interesting answer, let's discuss and explore!</p>

      </div>
    </Col>
  ),
  section_3: (
    <div>
      <h2>Research Projects</h2>
      <hr/>

      <div>

      <div><a href="http://www.eigenfactor.org/"><img src={eigenfactorImg} alt="Eigenfactor Project" title="Eigenfactor Project" width="200" height="160"/></a></div>

      <div><p>The aim of the <a href="http://www.eigenfactor.org/">Eigenfactor Project</a> is to develop methods, algorithms, and visualizations for mapping the structure of science. We use these maps to identify (1) disciplines and emerging areas of science, (2) key authors, papers and venues and (3) communication patterns such as differences in gender bias. We also use these maps to study scholarly publishing models and build recommendation engines and search interfaces for improving how scholars access and navigate the literature.</p></div>

    </div>


    <div>

      <div><a href="http://www.eigenfactor.org/gender/"><img src={genderAuthorshipImg} alt="Gender Authorship" title="Gender Authorship" width="200" height="160"/></a></div>

      <div><p>There are many places where bias exists in science: publication bias, bias in funding decisions and bias in promotion and tenure. These matter for people's careers, and they matter for the health of science. The <a href="http://www.eigenfactor.org/gender/">Gender Project</a> looks at gender differences in <a href="http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0066212">authorship patterns</a> (e.g., who authors with whom) and <a href="https://arxiv.org/abs/1607.00376">self-promotion</a>. We have built a <a href="http://www.eigenfactor.org/gender/">gender browser</a> for exploring this data by field. Our goal is to provide data and tools for policy makers and those interested in the sociology of science.</p></div>

    </div>


      <div>

      <div><a href="http://www.viziometrics.org/"><img src={viziometricsImg} alt="Viziometrics Project" title="Viziometrics Project" width="200" height="160"/></a></div>

      <div><p>Scientometricians have spent considerable effort analyzing citations and text. They use these modes of communication as a way of measuring impact and tracking the flow of ideas. Figures have largely been ignored, yet contain the key findings and summaries of models and mechanisms. The aim of the <a href="http://www.viziometrics.org">Viziometrics Project</a> is to focus on these dense, information objects. We have developed an open source platform for extracting the millions of figures in the literature and applying computer vision techniques for organizing and analyzing visual representations of data and ideas.</p></div>

    </div>


    <div>

      <div><a href="http://babel.eigenfactor.org"><img src={babelEigenImg} alt="babel.eigenfactor.org" title="babel.eigenfactor.org" width="200" height="160"/></a></div>

      <div><p>The <a href="http://babel.eigenfactor.org">babel.eigenfactor.org</a> project aims to bring recommender research to scholarly navigation. There has been considerable effort developing recommendation algorithms for finding restaurants, movies and books, but far less effort helping scientists find relevant papers. To keep up with the exponential growth of the literature, scientists will need tools beyond simple google keyword searchers. They will need better interfaces and filtering algorithms designed specifically for scholarly search. The goal of the babel project is to build data environments for facilitating this research.</p></div>

    </div>



    <div>

      <div><a href="http://www.coursector.org/"><img src={coursectorImg} alt="Coursector Project" title="Coursector Project" width="200" height="160"/></a></div>

      <div><p>UW is becoming a hub for data-driven research and teaching. However, its ability to apply data science tools to its own administrative data is underdeveloped - a general problem for higher education. We have several projects applying data science to university data. <a href="http://www.coursector.org/">Coursector.org</a> is one example. We are developing techniques for predicting <a href="Documents/Aulck2016ICML.pdf">[1]</a> and understanding student attrition, evaluating program performance, and building course recommenders. Other examples include mapping UW's global imprint and examining library journal holdings, usage and costs.</p></div>

    </div>


    <div>

      <div><a href="http://www.eigenfactor.org/projects/openAccess/"><img src={openAccessImg} alt="Cost Effectiveness" title="Cost Effectiveness" width="200" height="160"/></a></div>

      <div><p>The <a href="https://en.wikipedia.org/wiki/Open_access">open access</a> movement has made great strides. There has been a significant increase in Open Access journals over the last ten years and many large foundations now <a href="http://www.gatesfoundation.org/How-We-Work/General-Information/Open-Access-Policy">require OA</a>. Unfortunately, during the same time, there has been a signficiant increase in exploitative, <a href="https://en.wikipedia.org/wiki/Predatory_open_access_publishing">predatory publishers</a>, which charge authors to publish with little or no peer review, editorial services or authentic certifiation. We are developing a <a href="http://www.eigenfactor.org/projects/openAccess/">cost effectiveness </a> tool that will create an open journal market of prices and influence scores where these kinds of journals can be objectively identified <a href="Documents/West2014EconInquiry.pdf">[2]</a>.</p></div>

      </div>
    </div>
  ),
  section_4: (
    <div>
      <h2>Research Support</h2>
      <hr/>

      <div>

      <p>Science is a highly collaborative effort. It is no different for my research. I rely on my colleagues' expertise, students, university support, data providers and funders.</p>

      </div>

      <div>

        <div><a href="https://datalab.ischool.uw.edu/"><img src={datalabImg} alt="DataLab" title="DataLab" width="200" height="160"/></a></div>

        <div><p>The <a href="https://datalab.ischool.uw.edu/">DataLab</a> is a lab at the University of Washington Information School. <a href="http://faculty.washington.edu/espiro/">Emma Spiro</a>, <a href="http://www.jblumenstock.com">Josh Blumenstock</a> and I started the lab in 2013. Currently, Emma and I co-direct the lab. The idea is to bring students, post-docs and faculty together around topics in data science. Our research focus areas are the Science of Science, Computational Social Science, Visualization, Data Curation, Data for Developmental and Social Networks. One of our themes is doing Data Science for Social Good. Most of our projects have some social element. If you are prospective student or postdoc interested in joining the lab, please feel free to <a href="mailto:jevinw@uw.edu">contact me</a>.</p></div>

      </div>


      <div>

        <div><a target="_blank" href="https://datalab.ischool.uw.edu/"><img src={dataProvImg} alt="DataLab" title="DataLab" width="200" height="160"/></a></div>

        <div><p><span className="bold">Data Providers.</span> Curating good, clean corpora takes an enormous amount of effort. I want to give a special thanks to JSTOR, arXiv, SSRN, PubMed, DBLP, Thomson Reuters, ADS, Aminer, Microsoft Academic Search, Semantic Scholar, Open Academic Society, and the many other groups contributing to (open) big scholarly data. For as much flak as I give publishers, I want to thank them as well. I may not completely agree with their antiquated models of dissemination, but they have provided an important service for science. They will continue to play an important role. </p></div>

      </div>

      <div>

      <p><span className="bold">Funders.</span> I am grateful for the generous funding from many organizations supporting this research, including JSTOR, Microsoft, the NSF, Sloan Foundation, PNNL, University of Washington, and many others.</p>

      </div>

      <img src={fundersImg} alt="funders" title="funders" width="600" height="170" />
    </div>
  )
});

export {drawerLinks, homeData, researchData};
