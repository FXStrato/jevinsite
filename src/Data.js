import Immutable from 'immutable';
import React from 'react';
import {Row, Col} from 'react-materialize';
import {Link} from 'react-router';

//PDF's used
import Aulck2016ICMLPDF from './papers/Aulck2016ICML.pdf';
import West2014EconInquiryPDF from './papers/West2014EconInquiry.pdf';
import king2016arxivPDF from './papers/King2016arxiv.pdf';
import Portenoy2016arxivPDF from './papers/Portenoy2016arxiv.pdf';
import Bae2016tkddPDF from './papers/Bae2016tkdd.pdf';
import West2016IEEEPDF from './papers/West2016IEEE.pdf';
import Sugimoto2015PLoSOnePDF from './papers/Sugimoto2015PLoSOne.pdf';
import Rosvall2014NatureComPDF from './papers/Rosvall2014NatureCom.pdf';
import Vilhena2014SocSciencePDF from './papers/Vilhena2014SocScience.pdf';
import West2013PLoSOnePDF from './papers/West2013PLoSOne.pdf';
import Peak2004PNASPDF from './papers/Peak2004PNAS.pdf';
import Prado2009JTBPDF from './papers/Prado2009JTB.pdf';
import West2013JASISTPDF from './papers/West2013JASIST.pdf';
import West2010CRLPDF from './papers/West2010CRL.pdf';
import West2010JASISTPDF from './papers/West2010JASIST.pdf';
import Althouse2008JASISTPDF from './papers/Althouse2008JASIST.pdf';
import West2005PCEPDF from './papers/West2005PCE.pdf';
import West2016JCDLPDF from './papers/West2016JCDL.pdf';
import WesleySmith2016WWWPDF from './papers/WesleySmith2016WWW.pdf';
import Lee2016WWWPDF from './papers/Lee2016WWW.pdf';
import Portenoy2016WWWPDF from './papers/Portenoy2016WWW.pdf';
import WesleySmith2016WSDMPDF from './papers/WesleySmith2016WSDM.pdf';
import Larsen2014HICSSPDF from './papers/Larsen2014HICSS.pdf';
import Brooks2013InteractPDF from './papers/Brooks2013Interact.pdf';
import West2011complexleafPDF from './papers/West2011complexleaf.pdf';
import West2016jicsPDF from './papers/West2016jics.pdf';
import West2011SciencePDF from './papers/West2011Science.pdf';
import West2010NaturePDF from './papers/West2010Nature.pdf';
import West2010JASIST2PDF from './papers/West2010JASIST-2.pdf';
import West2009ASBMBPDF from './papers/West2009ASBMB.pdf';
import Bergstrom2008JneurosciPDF from './papers/Bergstrom2008Jneurosci.pdf';
import Bergstrom2008NeurologyPDF from './papers/Bergstrom2008Neurology.pdf';
import West2008FrontMatterPDF from './papers/West2008FrontMatter.pdf';


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
import science_flowImg from './img/science_flow.png';
import snow_mountainsImg from './img/snow_mountains.png';

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

        <p id="model_system"><span className="bold">Citation networks.</span> As a biologist, I appreciate the utility of a good model system.  Most of what we know about biology comes from a fruit fly, a worm and a small bacterium. A citation network is my model system for studying the flow of information. This model system is found, not within any <span className="italics">one</span> scholarly paper, but among the millions of scholarly papers that have been written over the last several centuries and the references that connect these papers. Initially, it was my interest in the history and sociology of science that attracted me to citation networks.</p>

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
          <h2 id="research_projects">Research Projects</h2>
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
          <p>UW is becoming a hub for data-driven research and teaching. However, its ability to apply data science tools to its own administrative data is underdeveloped - a general problem for higher education. We have several projects applying data science to university data. <a href="http://www.coursector.org/" target="_blank">Coursector.org</a> is one example. We are developing techniques for predicting <a href={Aulck2016ICMLPDF} target="_blank">[1]</a> and understanding student attrition, evaluating program performance, and building course recommenders. Other examples include mapping UW's global imprint and examining library journal holdings, usage and costs.
        </p>
        </Col>
      </Row>
      <Row>
        <Col s={12} m={3} className="center-align">
          <a href="http://www.eigenfactor.org/projects/openAccess/" target="_blank"><img className="hoverable z-depth-2 responsive-img" src={openAccessImg} alt="Cost Effectiveness" title="Cost Effectiveness"/></a>
        </Col>
        <Col s={12} m={9}>
          <p>The <a href="https://en.wikipedia.org/wiki/Open_access" target="_blank">open access</a> movement has made great strides. There has been a significant increase in Open Access journals over the last ten years and many large foundations now <a href="http://www.gatesfoundation.org/How-We-Work/General-Information/Open-Access-Policy" target="_blank">require OA</a>. Unfortunately, during the same time, there has been a signficiant increase in exploitative, <a href="https://en.wikipedia.org/wiki/Predatory_open_access_publishing" target="_blank">predatory publishers</a>, which charge authors to publish with little or no peer review, editorial services or authentic certifiation. We are developing a <a href="http://www.eigenfactor.org/projects/openAccess/" target="_blank">cost effectiveness </a> tool that will create an open journal market of prices and influence scores where these kinds of journals can be objectively identified <a href={West2014EconInquiryPDF} target="_blank">[2]</a>.</p>
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
          <span className="italics">Journal of the American Society for Information Science & Technology</span>
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
          <span className="volume"> 10(5): e0128000, doi: 10.1371/journal.pone.0128000</span>
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
          <span className="volume"> 5:4630, doi:10.1038/ncomms5630</span>
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
          <span className="volume"> 52: 1315-1321, doi: 10.1111/ecin.12117</span>
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
          <span className="volume"> 1: 221-238, doi: 10.15195/v1.a15</span>
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
      title: 'The Role of Gender in Scholarly Authorship (2013)',
      authors: <div><span className="bold">J.D. West</span>, J. Jacquet, M. King, S.J. Correll, C.T. Bergstrom</div>,
      journal_volume: (
        <div>
          <span className="italics">PLoS One</span>.
          <span className="volume"> 8(7): e66212, doi: 10.1371/journal.pone.0066212</span>
        </div>
      ),
      html: 'http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0066212',
      pdf: West2013PLoSOnePDF,
      abstract: "Gender disparities appear to be decreasing in academia according to a number of metrics, such as grant funding, hiring, acceptance at scholarly journals, and productivity, and it might be tempting to think that gender inequity will soon be a problem of the past. However, a large-scale analysis based on over eight million papers across the natural sciences, social sciences, and humanities reveals a number of understated and persistent ways in which gender inequities remain. For instance, even where raw publication counts seem to be equal between genders, close inspection reveals that, in certain fields, men predominate in the prestigious first and last author positions. Moreover, women are significantly underrepresented as authors of single-authored papers. Academics should be aware of the subtle ways that gender disparities can occur in scholarly authorship.",
      bibTex: (
        <div>
          &#64;article&#123;West2013PlosOne,<br/>
              title=&#123;The role of gender in scholarly authorship&#125;,<br/>
              author=&#123;J.D. West and J. Jacquet and M.M. King and S.J. Correll and C.T. Bergstrom&#125;,<br/>
              journal=&#123;PloS One&#125;,<br/>
              volume=&#123;8&#125;,<br/>
              number=&#123;7&#125;,<br/>
              pages=&#123;e66212&#125;,<br/>
              year=&#123;2013&#125;,<br/>
              doi = &#123;10.1371/journal.pone.0066212&#125;,<br/>
              publisher=&#123;Public Library of Science&#125;&#125;<br/>
        </div>
      )
    },
    {
      title: 'Author-Level Eigenfactor Metrics: Evaluating the Influence of Authors, Institutions and Countries Within the SSRN Community (2013)',
      authors: <div><span className="bold">J. D. West</span>, M. C. Jensen, R. J. Dandrea, G. J. Gordon, and C. T. Bergstrom</div>,
      journal_volume: (
        <div>
          <span className="italics">Journal of the American Society for Information Science &amp; Technology</span>.
          <span className="volume"> 64(4): 787-801, doi: 10.1002/asi.22790</span>
        </div>
      ),
      html: 'http://onlinelibrary.wiley.com/doi/10.1002/asi.22790/full',
      pdf: West2013JASISTPDF,
      abstract: "In this article, we show how the Eigenfactor score, originally designed for ranking scholarly journals, can be adapted to rank the scholarly output of authors, institutions, and countries based on author-level citation data. Using the methods described in this article, we provide Eigenfactor rankings for 84,808 disambiguated authors of 240,804 papers in the Social Science Research Network (SSRN)â€”a preprint and postprint archive devoted to the rapid dissemination of scholarly research in the social sciences and humanities. As an additive metric, the Eigenfactor scores are readily computed for collectives such as departments or institutions as well. We show that a collectiveâ€™s Eigenfactor score can be computed either by summing the Eigenfactor scores of its members or by working directly with a collective-level cross-citation matrix. We provide Eigenfactor rankings for institutions and countries in the SSRN repository. With a network-wide comparison of Eigenfactor scores and download tallies, we demonstrate that Eigenfactor scores provide information that is both different from and complementary to that provided by download counts. We see author-level ranking as one filter for navigating the scholarly literature, and note that such rankings generate incentives for more open scholarship, because authors are rewarded for making their work available to the community as early as pos- sible and before formal publication.",
      bibTex: (
        <div>
			  @article&#123;West2013JASIST,<br/>
					title = &#123;Author-level Eigenfactor metrics: Evaluating the influence of authors, institutions, and countries within the social science research network community&#125;,<br/>
				  	url = &#123;http://doi.wiley.com/10.1002/asi.22790&#125;,<br/>
				  	author = &#123;J.D. West and M.C. Jensen and R.J. Dandrea and G.J. Gordon and C.T. Bergstrom&#125;,<br/>
					doi = &#123;10.1002/asi.22790&#125;,<br/>
					issn = &#123;1532-2882&#125;,<br/>
					journal = &#123;Journal of the American Society for Information Science and Technology&#125;,<br/>
					number = &#123;4&#125;,<br/>
					pages = &#123;787--801&#125;,<br/>
					volume = &#123;64&#125;,<br/>
					year = &#123;2013&#125;&#125;<br/>
        </div>
      )
    },
    {
      title: 'The EigenfactorTM Metrics: A network approach to assessing scholarly journals (2010)',
      authors: <div><span className="bold">J.D. West</span>, T.C. Bergstrom and C. T. Bergstrom</div>,
      journal_volume: (
        <div>
          <span className="journal">College of Research Libraries</span>.
          <span className="volume"> 71(3): 236-244, doi: 10.5860/0710236</span>
        </div>
      ),
      html: 'http://crl.acrl.org/content/71/3/236.abstract?sid=c0cbbecd-9526-4ebf-8dba-9c28c6892ca6',
      pdf: West2010CRLPDF,
      abstract: "Limited time and budgets have created a legitimate need for quantitative measures of scholarly work. The well-known journal impact factor is the leading measure of this sort; here we describe an alternative approach based on the full structure of the scholarly citation network. The Eigenfaclor Metrics-Eigenfactor Score and Article Influence Score-use an iterative ranking scheme similar to Google's PageRank algorithm. By this approach, citations from top journals are weighted more heavily than citations from lower-tier publications. Here we describe these metrics and the rankings that they provide.",
      bibTex: (
        <div>
    			  @article&#123;West2010CRL,<br/>
    			  		Title = &#123;The Eigenfactor Metrics: A Network Approach to Assessing Scholarly Journals&#125;,<br/>
    					Author = &#123;J.D. West and T.C. Bergstrom and C.T. Bergstrom&#125;,<br/>
    					Journal = &#123;College and Research Libraries&#125;,<br/>
    					Number = &#123;3&#125;,<br/>
    					Pages = &#123;236-244&#125;,<br/>
    					Volume = &#123;71&#125;,<br/>
    					Year = &#123;2010&#125;&#125;<br/>
        </div>
      )
    },
    {
      title: "Big Macs and Eigenfactor Scores: Don't Let Correlation Coefficients Fool You (2010)",
      authors: <div><span className="bold">J.D. West</span>, T.C. Bergstrom and C. T. Bergstrom</div>,
      journal_volume: (
        <div>
          <span className="journal">Journal of the American Society for Information Science &amp; Technology</span>.
          <span className="volume"> 61(9): 1800-1807, doi: 10.1002/asi.21374</span>
        </div>
      ),
      html: 'http://onlinelibrary.wiley.com/doi/10.1002/asi.21374/full',
      pdf: West2010JASISTPDF,
      abstract: "The Eigenfactor Metrics provide an alternative way of evaluating scholarly journals based on an iterative ranking procedure analogous to Googleâ€™s PageRank algorithm. These metrics have recently been adopted by Thomson Reuters and are listed alongside the Impact Factor in the Journal Citation Reports. But do these metrics differ sufficiently so as to be a useful addition to the bibliometric toolbox? Davis (2008) has argued that they do not, based on his finding of a 0.95 correlation coefficient between Eigenfactor score and Total Citations for a sample of journals in the field of medicine. This conclusion is mistaken; in this article, we illustrate the basic statistical fallacy to which Davis succumbed. We provide a complete analysis of the 2006 Journal Citation Reports and demonstrate that there are statistically and economically significant differences between the information provided by the Eigenfactor Metrics and that provided by Impact Factor and Total Citations.",
      bibTex: (
        <div>
  			  @article&#123;West2010JASIST,<br/>
  					  title=&#123;Big Macs and Eigenfactor scores: Don't let correlation coefficients fool you&#125;,<br/>
  					  author=&#123;J.D. West and T.C. Bergstrom and C.T. Bergstrom&#125;,<br/>
  					  journal=&#123;Journal of the American Society for Information Science and Technology&#125;,<br/>
  					  volume=&#123;61&#125;,<br/>
  					  number=&#123;9&#125;,<br/>
  					  pages=&#123;1800--1807&#125;,<br/>
  					  year=&#123;2010&#125;,<br/>
  					  publisher=&#123;Wiley Online Library&#125;&#125;<br/>
        </div>
      )
    },
    {
      title: 'Differences in Impact Factor across fields and over time (2008)',
      authors: <div>B.M. Althouse, <span className="bold">J.D. West</span>, T.C. Bergstrom and C.T. Bergstrom</div>,
      journal_volume: (
        <div>
          <span className="journal">Journal of the American Society for Information Science &amp; Technology</span>.
          <span className="volume"> 60(1): 27-34, doi: 10.1002/asi.20936</span>
        </div>
      ),
      html: 'http://onlinelibrary.wiley.com/doi/10.1002/asi.20936/full',
      pdf: Althouse2008JASISTPDF,
      abstract: "The bibliometric measure impact factor is a leading indicator of journal influence, and impact factors are routinely used in making decisions ranging from selecting journal subscriptions to allocating research funding to deciding tenure cases. Yet journal impact factors have increased gradually over time, and moreover impact factors vary widely across academic disciplines. Here we quantify inflation over time and differences across fields in impact factor scores and determine the sources of these differences. We find that the average number of citations in reference lists has increased gradually, and this is the predominant factor responsible for the inflation of impact factor scores over time. Field-specific variation in the fraction of citations to literature indexed by Thomson Scientificâ€™s Journal Citation Reports is the single greatest contributor to differences among the impact factors of journals in different fields. The growth rate of the scientific literature as a whole, and cross-field differences in net size and growth rate of individual fields, have had very little influence on impact factor inflation or on cross-field differences in impact factor.",
      bibTex: (
        <div>
			  @article&#123;Althouse2009JASIST,<br/>
					  title=&#123;Differences in impact factor across fields and over time&#125;,<br/>
					  author=&#123;B.M. Althouse and J.D. West and C.T. Bergstrom and T.C. Bergstrom&#125;,<br/>
					  journal=&#123;Journal of the American Society for Information Science and Technology&#125;,<br/>
					  volume=&#123;60&#125;,<br/>
					  number=&#123;1&#125;,<br/>
					  pages=&#123;27--34&#125;,<br/>
					  year=&#123;2009&#125;,<br/>
					  publisher=&#123;Wiley Online Library&#125;&#125;<br/>
        </div>
      )
    },
    {
        title: "Coevolutionary cycling of host sociality and pathogen virulence in contact networks (2009)",
        abstract: "Infectious diseases may place strong selection on the social organization of animals. Conversely, the structure of social systems can influence the evolutionary trajectories of pathogens. While much attention has focused on the evolution of host sociality or pathogen virulence separately, few studies have looked at their coevolution. Here we use an agent-based simulation to explore hostu2013pathogen coevolution in social contact networks. Our results indicate that under certain conditions, both host sociality and pathogen virulence exhibit continuous cycling. The way pathogens move through the network (e.g., their interhost transmission and probability of superinfection) and the structure of the network can influence the existence and form of cycling.",
        journal_volume: (
    <div>
    <span className="italics">Journal of Theoretical Biology</span>.
    <span className="volume"> 261: 561-569, doi: 10.1016/j.jtbi.2009.08.022</span>
    </div>
    ),
        html: "http://dx.doi.org/10.1016/j.jtbi.2009.08.022",
        bibTex: (
    <div>
      @article&#123;Prado2009JTheorBiol,<br/>
      title=&#123;Coevolutionary cycling of host sociality and pathogen virulence in contact networks&#125;,<br/>
      author=&#123;F. Prado and A. Sheih and J.D. West and B. Kerr&#125;,<br/>
      journal=&#123;Journal of theoretical biology&#125;,<br/>
      volume=&#123;261&#125;,<br/>
      number=&#123;4&#125;,<br/>
      pages=&#123;561--569&#125;,<br/>
      year=&#123;2009&#125;,<br/>
      publisher=&#123;Elsevier&#125;&#125;<br/>
    </div>
    ),
        authors: <div>F. Prado, A. Sheih, <span className="bold">J.D. West</span> and B. Kerr</div>,
        pdf: Prado2009JTBPDF,
    },
    {
        title: "Dynamics of stomatal patches for a single surface of Xanthium strumarium L. leaves observed with flourescence and thermal images (2005)",
        abstract: "Fluorescence and thermal imaging were used to examine the dynamics of stomatal patches for a single surface of Xanthium strumarium L. leaves following a decrease in ambient humidity. Patches were not observed in all experiments, and in many experiments the patches were short lived. In some experiments, however, patches persisted for many hours and showed complex temporal and spatial patterns. Rapidly sampled fluorescence images showed that the measurable variations of these patches were sufficiently slow to be captured by fluorescence images taken at 3-min intervals using a saturating flash of light. Stomatal patchiness with saturating flashes of light was not demonstrably different from that without saturating flashes of light, suggesting that the regular flashes of light did not directly cause the phenomenon. Comparison of simultaneous fluorescence and thermal images showed that the fluorescence patterns were largely the result of stomatal conductance patterns, and both thermal and fluorescence images showed patches of stomatal conductance that propagated coherently across the leaf surface. These nondispersing patches often crossed a given region of the leaf repeatedly at regular intervals, resulting in oscillations in stomatal conductance for that region. The existence of these coherently propagating structures has implications for the mechanisms that cause patchy stomatal behaviour as well as for the physiological ramifications of this phenomenon.",
        journal_volume: (
    <div>
    <span className="italics">Plant, Cell &amp; Environment</span>.
    <span className="volume"> 28: 633-641, doi: 10.1111/j.1365-3040.2005.01309.x</span>
    </div>
    ),
        html: "http://onlinelibrary.wiley.com/doi/10.1111/j.1365-3040.2005.01309.x/full",
        bibTex: (
    <div>
      @article&#123;West2005PCE,<br/>
      title=&#123;Dynamics of stomatal patches for a single surface of Xanthium strumarium L. leaves observed with fluorescence and thermal images&#125;,<br/>
      author=&#123;J.D. West and D. Peak and J.Q. Peterson and K.A. Mott&#125;,<br/>
      journal=&#123;Plant, Cell &amp; Environment&#125;,<br/>
      volume=&#123;28&#125;,<br/>
      number=&#123;5&#125;,<br/>
      pages=&#123;633--641&#125;,<br/>
      year=&#123;2005&#125;,<br/>
      publisher=&#123;Wiley Online Library&#125;&#125;<br/>
    </div>
    ),
        authors: <div><span className="bold">J.D. West</span>, D. Peak, J. Peterson and K.A. Mott</div>,
        pdf: West2005PCEPDF
    },
    {
        title: "Evidence for complex, collective dynamics and emergent, distributed computation in plants (2004)",
        abstract: "It has been suggested that some biological processes are equivalent to computation, but quantitative evidence for that view is weak. Plants must solve the problem of adjusting stomatal apertures to allow sufficient CO2 uptake for photosynthesis while preventing excessive water loss. Under some conditions, stomatal apertures become synchronized into patches that exhibit richly complicated dynamics, similar to behaviors found in cellular automata that perform computational tasks. Using sequences of chlorophyll fluorescence images from leaves of Xanthium strumarium L. (cocklebur), we quantified spatial and temporal correlations in stomatal dynamics. Our values are statistically indistinguishable from those of the same correlations found in the dynamics of automata that compute. These results are consistent with the proposition that a plant solves its optimal gas exchange problem through an emergent, distributed computation performed by its leaves.",
        journal_volume: (
    <div>
    <span className="italics">Proceedings of the National Academy of Sciences USA</span>.
    <span className="volume"> 101: 918-922</span>
    </div>
    ),
        html: "http://www.pnas.org/content/101/4/918.abstract?sid=edd3f319-ecdc-4e1e-a814-7e6b59000999",
        bibTex: (
    <div>
      @article&#123;Peak2004PNAS,<br/>
      title=&#123;Evidence for complex, collective dynamics and emergent, distributed computation in plants&#125;,<br/>
      author=&#123;D.Peak and J.D. West and S. Messinger and K.A. Mott&#125;,<br/>
      journal=&#123;Proceedings of the National Academy of Sciences of the United States of America&#125;,<br/>
      volume=&#123;101&#125;,<br/>
      number=&#123;4&#125;,<br/>
      pages=&#123;918--922&#125;,<br/>
      year=&#123;2004&#125;&#125;<br/>
    </div>
    ),
        authors: <div>D. Peak, <span className="bold">J.D. West</span>, S.M. Messinger, and K.A. Mott</div>,
        pdf: Peak2004PNASPDF,
    },
  ],
  peerReviewConferences: [
    {
        title: "Delineating Fields Using Mathematical Jargon (2016)",
        abstract: "Tracing ideas through the scientific literature is useful in understanding the origin of ideas and for generating new ones. Machines can be trained to do this at large scale, feeding search engines and recommendation algorithms. Citations and text are the features commonly used for these tasks. In this paper, we focus on a largely ignored facet of scholarly papersu2014the equations. Mathematical language varies from field to field but original formulae are maintained over generations (e.g., Shannonu2019s Entropy equation). Here we extract a common set of mathematical symbols from more than 250,000 LATEX source files in the arXiv repository. We compare the symbol distributions across different fields and calculate the jargon distance between fields. We find a greater difference between the experimental and theoretical disciplines than within these fields. This provides a first step at using equations as a bridge between disciplines that may not cite each other or may speak different natural languages but use a similar mathematical language.",
        journal_volume: (
    <div>
    <span className="italics">Joint Conference on Digital Libraries (JCDL)</span>.
    <span className="volume">Workshop on Bibliometric-enhanced Information Retrieval &amp; Natural Language Processing</span>
    </div>
    ),
        html: "http://wing.comp.nus.edu.sg/birndl-jcdl2016/#p",
        bibTex: (
    <div>
      @inproceedings &#123;West2016JCDL,<br/>
      author = &#123;J.D. West and J. Portenoy&#125;,<br/>
      title = &#123;Delineating Fields Using Mathematical Jargon&#125;,<br/>
      booktitle=&#123;JCDL Workshop on Bibliometric-enhanced Information Retrieval and Natural Language Processing for Digital Libraries (BIRNDL)&#125;,<br/>
      year = &#123;2016&#125;&#125;<br/>
    </div>
    ),
        authors: <div><span className="bold">J.D. West</span>, J. Portenoy</div>,
        pdf: West2016JCDLPDF
    },
    {
        title: "Predicting Student Dropout in Higher Education (2016)",
        abstract: "Each year, roughly 30% of first-year students at US baccalaureate institutions do not return for their second year and over $9 billion is spent educating these students. Yet, little quantitative research has analyzed the causes and possible remedies for student attrition. Here, we describe initial efforts to model student dropout using the largest known dataset on higher education attrition, which tracks over 32,500 students' demographics and transcript records at one of the nation's largest public universities. Our results highlight several early indicators of student attrition and show that dropout can be accurately predicted even when predictions are based on a single term of academic transcript data. These results highlight the potential for machine learning to have an impact on student retention and success while pointing to several promising directions for future work.",
        journal_volume: (
    <div>
    <span className="italics">International Conference on Machine Learning (ICML)</span>.
    <span className="volume">Workshop on Data4Good: Machine Learning in Social Good Applications</span>
    </div>
    ),
        html: "https://sites.google.com/site/icml2016data4goodworkshop/technical-program",
        bibTex: (
    <div>
      @inproceedings &#123;Aulck2016ICML,<br/>
      author = &#123;L. Aulck and N. Velagapudi and J. Blumenstock and J.D. West&#125;,<br/>
      title = &#123;Predicting Student Dropout in Higher Education&#125;,<br/>
      booktitle=&#123;International Conference on Machine Learning (ICML). Workshop on Data4Good: Machine Learning in Social Good Applications&#125;,<br/>
      url = &#123;https://arxiv.org/abs/1606.06364&#125;,<br/>
      year = &#123;2016&#125;&#125;<br/>
    </div>
    ),
        authors: <div>L. Aulck, N. Velagapudi, J. Blumenstock, <span className="bold">J.D. West</span></div>,
        pdf: Aulck2016ICMLPDF,
    },
    {
        title: "Babel: A platform for research in scholarly article recommendation (2016)",
        abstract: "The body of scientific literature is growing at an exponential rate. This expansion of scientific knowledge has increased the need for tools to help users find relevant articles. However, researchers developing new scholarly article recommendation algorithms face two substantial hurdles: acquiring high-quality, large-scale scholarly metadata and mechanisms for evaluating their recommendation algorithms. To address these problems we created Babelu2014an open-source web platform uniting publisher, researchers, and users. Babel includes tens of millions of scholarly articles, several content- based recommendation algorithms, and tools for integrating recommendations into publisher websites and other scholarly platforms.",
        journal_volume: (
    <div>
    <span className="italics">World Wide Web Conference (WWW). </span>
    <span className="volume">Worskhop on Big Scholarly Data</span>
    </div>
    ),
        html: "http://msclab.org/bigscholar/2016/Program.htm",
        bibTex: (
    <div>
      @inproceedings&#123;wesleysmith2016babel,<br/>
      author = &#123;I. Wesley-Smith and J.D. West&#125;,<br/>
      title = &#123;Babel: A platform for research in scholarly article recommendation&#125;,<br/>
      booktitle = &#123;WWW Worskhop on Big Scholarly Data&#125;,<br/>
      publisher = &#123;ACM&#125;,<br/>
      year = &#123;2016&#125;&#125;<br/>
    </div>
    ),
        authors: <div>I. Wesley-Smith, <span className="bold">J.D. West</span></div>,
        pdf: WesleySmith2016WWWPDF
    },
    {
        title: "VizioMetrix: A Platform for Analyzing the Visual Information in Big Scholarly Data (2016)",
        abstract: "We present VizioMetrix, a platform that extracts visual in- formation from the scientific literature and makes it avail- able for use in new information retrieval applications and for studies that look at patterns of visual information across millions of papers. New ideas are conveyed visually in the scientific literature through figures u2014 diagrams, photos, vi- sualizations, tables u2014 but these visual elements remain en- sconced in the surrounding paper and difficult to use directly to facilitate information discovery tasks or longitudinal an- alytics. Very few applications in information retrieval, aca- demic search, or bibliometrics make direct use of the figures, and none attempt to recognize and exploit the type of figure, which can be used to augment interactions with a large corpus of scholarly literature. The VizioMetrix platform processes a corpus of docu- ments, classifies the figures, organizes the results into a cloud- hosted databases, and drives three distinct applications to support bibliometric analysis and information retrieval. The first application supports information retrieval tasks by al- lowing rapid browsing of classified figures. The second ap- plication supports longitudinal analysis of visual patterns in the literature and facilitates data mining of these figures. The third application supports crowdsourced tagging of fig- ures to improve classification, augment search, and facilitate new kinds of analyses. Our initial corpus is the entirety of PubMed Central (PMC), and will be released to the public alongside this paper; we welcome other researchers to make use of these resources.",
        journal_volume: (
    <div>
    <span className="italics">World Wide Web Conference (WWW). </span>
    <span className="volume">Worskhop on Big Scholarly Data</span>
    </div>
    ),
        html: "http://msclab.org/bigscholar/2016/Program.htm",
        bibTex: (
    <div>
      @inproceedings&#123;Lee2016www,<br/>
      author = &#123;P. Lee and J.D. West and B. Howe&#125;,<br/>
      title = &#123;VizioMetrix: A Platform for Analyzing the Visual Information in Big Scholarly Data&#125;,<br/>
      booktitle = &#123;WWW Worskhop on Big Scholarly Data&#125;,<br/>
      publisher = &#123;ACM&#125;,<br/>
      year = &#123;2016&#125;&#125;<br/>
    </div>
    ),
        authors: <div>P. Lee, <span className="bold">J.D. West</span>, B. Howe</div>,
        pdf: Lee2016WWWPDF,

    },
    {
        title: "Dynamic Visualization of Citation Networks Showing the Influence of Scholarly Fields Over Time (2016)",
        abstract: "Citation graphs between scholarly papers can be used to learn about the structure and development of scholarship. We present a generalizable approach to visualizing scholarly influence over time, using a dynamic node-link diagram representing the citation patterns between groups of papers. We combine this approach with hierarchical clustering techniques that exploit the network structure to partition the graph into clusters representing fields and subfields. We use these methods to explore the influence that fields have had on other fields over time.",
        journal_volume: (
    <div>
    <span className="italics">World Wide Web Conference (WWW). </span>
    <span className="volume">Worskhop on Semantics, Analytics, Visualisation: Enhancing Scholarly Data</span>
    </div>
    ),
        html: "http://cs.unibo.it/save-sd/2016/accepted-papers.html",
        bibTex: (
    <div>
      @inproceedings &#123;Portenoy2016www,<br/>
      author = &#123;J. Portenoy and J.D. West&#125;,<br/>
      title = &#123;Dynamic Visualization of Citation Networks Showing the Influence of Scholarly Fields Over Time&#125;,<br/>
      booktitle=&#123;WWW Worskhop on Semantics, Analytics,<br/> Visualisation: Enhancing Scholarly Data&#125;,<br/>
      year = &#123;2016&#125;&#125;<br/>
    </div>
    ),
        authors: <div>J. Portenoy, <span className="bold">J.D. West</span></div>,
        pdf: Portenoy2016WWWPDF,

    },
    {
        title: "Static Ranking of Scholarly Papers using Article-Level Eigenfactor (ALEF) (2016)",
        abstract: "Microsoft Research hosted the 2016 WSDM Cup Challenge based on the Microsoft Academic Graph. The goal was to provide static rankings for the articles that make up the graph, with the rankings to be evaluated against those of human judges. While the Microsoft Academic Graph provided metadata about many aspects of each scholarly document, we focused more narrowly on citation data and used this contest as an opportunity to test the Article Level Eigenfactor (ALEF), a novel citation-based ranking algorithm, and evaluate its performance against competing algorithms that drew upon multiple facets of the data from a large, real world dataset (122M papers and 757M citations). Our final submission to this contest was scored at 0.676, earning second place.",
        journal_volume: (
    <div>
    <span className="italics">WSDM Conference: Entity Ranking Challenge Workshop.</span>
    <span className="volume"> arXiv:1606.08534 </span>
    </div>
    ),
        html: "http://arxiv.org/abs/1606.08534",
        bibTex: (
    <div>
      @inproceedings&#123;WesleySmith2016wsdm,<br/>
      author = &#123;I. Wesley-Smith and C.T. Bergstrom and J.D. West&#125;,<br/>
      title = &#123;Static Ranking of Scholarly Papers using Article-Level Eigenfactor (ALEF)&#125;,<br/>
      booktitle=&#123;WSDM Conference: Entity Ranking Challenge Workshop&#125;,<br/>
      url =&#123;http://arxiv.org/abs/1606.08534&#125;,<br/>
      year = &#123;2016&#125;&#125;<br/>
    </div>
    ),
        authors: <div>I. Wesley-Smith, C.T. Bergstrom, <span className="bold">J.D. West</span></div>,
        pdf: WesleySmith2016WSDMPDF,
    },
    {
        title: "Theory Identity: A Machine-Learning Approach (2014)",
        abstract: "Theory identity is a fundamental problem for researchers seeking to determine theory quality, create theory ontologies and taxonomies, or perform focused theory-specific reviews and meta-analyses. We demonstrate a novel machine-learning approach to theory identification based on citation data and article features. The multi-disciplinary ecosystem of articles which cite a theoryu2019s originating paper is created and refined into the network of papers predicted to contribute to, and thus identify, a specific theory. We provide a u2018proof-of-conceptu2019 for a highly-cited theory. Implications for cross disciplinary theory integration and the identification of theories for a rapidly expanding scientific literature are discussed.",
        journal_volume: (
    <div>
    <span className="italics">Hawaii International Conference on System Sciences (HICSS). </span>
    <span className="volume">4639-4648 (Best Paper Nomination)</span>
    </div>
    ),
        html: "http://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=6759171",
        bibTex: (
    <div>
      @inproceedings&#123;Larsen2014HICSS,<br/>
      title=&#123;Theory identity: A machine-learning approach, (Best Paper Nomination)&#125;,<br/>
      author=&#123;K.R. Larsen and D. Hovorka and J.D. West and J. Birt and J.R. Pfaff and T.W. Chambers and Z.R. Sampedro and N. Zager and B. Vanstone&#125;,<br/>
      booktitle=&#123;Hawaii International Conference on System Sciences&#125;,<br/>
      pages=&#123;4639--4648&#125;,<br/>
      year=&#123;2014&#125;,<br/>
      publisher=&#123;IEEE&#125;&#125;<br/>
    </div>
    ),
        authors: <div>K.R. Larsen, D. Hovorka, <span className="bold">J.D. West</span>, J. Birt, J.R. Pfaff,T.W. Chambers, Z.R. Sampedro, N. Zager,B. Vanstone</div>,
        pdf: Larsen2014HICSSPDF,
    },
    {
        title: "Scalable Flow-Based Community Detection for Large-Scale Network Analysis (2013)",
        abstract: "Community-detection is a powerful approach to uncover important structures in large networks. Since networks often describe flow of some entity, flow-based community-detection methods are particularly interesting. One such algorithm is called Infomap, which optimizes the objective function known as the map equation. While Infomap is known to be an effective algorithm, its serial implementation cannot take advantage of multicore processing in modern computers. In this paper, we propose a novel parallel generalization of Infomap called RelaxMap. This algorithm relaxes concurrency assumptions to avoid lock overhead, achieving 70% parallel efficiency in shared-memory multicore experiments while exhibiting similar convergence properties and finding similar community structures as the serial algorithm. We evaluate our approach on a variety of real graph datasets as well as synthetic graphs produced by a popular graph generator used for benchmarking community detection algorithms. We describe the algorithm, the experiments, and some emerging research directions in high-performance community detection on massive graphs.",
        journal_volume: (
    <div>
    <span className="italics">Proceedings of IEEE International Conference on Data Mining Workshops (ICDMW). </span>
    <span className="volume">303-310</span>
    </div>
    ),
        html: "http://icdm2013.rutgers.edu/workshops",
        bibTex: (
    <div>
      @inproceedings&#123;Bae2013IEEE,<br/>
      title=&#123;Scalable flow-based community detection for large-scale network analysis&#125;,<br/>
      author=&#123;S. Bae and D. Halperin and J.D. West and M. Rosvall and B. Howe&#125;,<br/>
      booktitle=&#123;International Conference on Data Mining Workshops (ICDMW)&#125;,<br/>
      pages=&#123;303--310&#125;,<br/>
      year=&#123;2013&#125;,<br/>
      publisher=&#123;IEEE&#125;&#125;<br/>
    </div>
    ),
        authors: <div>S. Bae, D. Halperin, <span className="bold">J.D. West</span>, M. Rosvall, B. Howe</div>,
        pdf: ""
    },
    {
        title: "Hoptrees: Branching History Navigation for Hierarchies (2013)",
        abstract: "Designing software for exploring hierarchical data sets is challenging because users can easily become lost in large hierarchies. We present a novel interface, the hoptree, to assist users with navigating large hierarchies. The hoptree preserves navigational history and context and allows one-click naviga- tion to recently-visited locations. We describe the design of hoptrees and an im- plementation that we created for a tree exploration application. We discuss the potential for hoptrees to be used in a wide variety of hierarchy navigation sce- narios. Through a controlled experiment, we compared the effectiveness of hop- trees to a breadcrumb navigation interface. Study participants overwhelmingly preferred the hoptree, with improved time-on-task with no difference in error rates.",
        journal_volume: (
    <div>
    <span className="italics">Proceedings of IEEE International Conference on Data Mining Workshops (ICDMW). </span>
    <span className="volume">303-310. doi:10.1007/978-3-642-40477-1_20</span>
    </div>
    ),
        html: "http://link.springer.com/chapter/10.1007/978-3-642-40477-1_20",
        bibTex: (
    <div>
      @incollection&#123;Brooks2013Interact,
      title=&#123;Hoptrees: branching history navigation for hierarchies&#125;,<br/>
      author=&#123;M. Brooks and J.D. West and C.R. Aragon and C.T. Bergstrom&#125;,<br/>
      booktitle=&#123;INTERACT&#125;,<br/>
      pages=&#123;316-333&#125;,<br/>
      year=&#123;2013&#125;,<br/>
      publisher=&#123;Springer&#125;&#125;<br/>
    </div>
    ),
        authors: <div>M. Brooks, <span className="bold">J.D. West</span>, C. Aragon, C.T. Bergstrom</div>,
        pdf: Brooks2013InteractPDF,
    },
    {
        title: "Comparing the dynamics of stomatal networks to the problem-solving dynamics of cellular computers (2011)",
        abstract: "Is the adaptive response to environmental stimuli of a biological system lacking a central nervous system a result of a formal computation? If so, these biological systems must conform to a different set of computational rules than those associated with central processing. To explore this idea, we examined the dynamics of stomatal patchiness in leaves. Stomatau2014tiny pores on the surface of a leafu2014are biological processing units that a plant uses to solve an optimization problemu2014maximize CO2 assimilation and minimize H2O loss. Under some conditions, groups of stomata coordinate in both space and time producing motile patches that can be visualized with chlorophyll fluorescence. These patches suggest that stomata are nonautonomous and that they form a network presumably engaged in the optimization task. In this study, we show that stomatal dynamics are statistically and qualitatively comparable to the emergent, collective, problem-solving dynamics of cellular computing systems.",
        journal_volume: (
    <div>
    <span className="italics">Unifying Themes in Complex Systems: Proceedings of the Fifth International Conference on Complex Systems. </span>
    <span className="volume">327-341. doi:10.1007/978-3-642-17635-7_40</span>
    </div>
    ),
        html: "http://link.springer.com/chapter/10.1007/978-3-642-17635-7_40",
        bibTex: (
    <div>
      @incollection&#123;West2011Complex,<br/>
      title=&#123;Comparing the dynamics of stomatal networks to the problem-solving dynamics of cellular computers&#125;,<br/>
      author=&#123;J.D. West and D. Peak and K.A. Mott and S. Messinger&#125;,<br/>
      booktitle=&#123;Unifying Themes in Complex Systems: Proceedings of the Fifth International Conference on Complex Systems&#125;,<br/>
      pages=&#123;327--341&#125;,<br/>
      doi = &#123;10.1007/978-3-642-17635-7_40&#125;,<br/>
      year=&#123;2011&#125;,<br/>
      publisher=&#123;Springer&#125;&#125;<br/>
    </div>
    ),
        authors: <div><span className="bold">J.D. West</span>, D. Peak, K.A. Mott and S.M. Messinger</div>,
        pdf: West2011complexleafPDF,
    },
  ],
  journalsInvited: [
    {
        title: "The Science of Data Science (2016)",
        abstract: "This report summarizes two talks that I gave at the Advanced Future Studies at Kyoto University in February of 2016. One talk was for the Global Partnership on Science Education through Engagement. In this talk I focused on an emerging educational trend in the United Statesu2014the rise of Data Science at both the undergraduate and graduate levelu2014and the effect it is having on research and industry. In the second talk, I spoke at the International Symposium on Advanced Future Studies symposium. In this talk, I provided an overview of an emerging research trendu2014the emergence of a new discipline called the Science of Science. In this new field, science is done at the level of millions of publications over many generations and disciplines using new tools from machine learning, computer vision, and network science. Both Data Science and the Science of Science require perspectives from multiple disciplines, which fit well with the general theme of both meetings in Kyoto.",
        journal_volume: (
    <div>
    <span className="italics">Journal of Integrated Creative Studies. </span>
    <span className="volume">No2016-010-e. doi: 10.14989/214432</span>
    </div>
    ),
        html: "http://www2.yukawa.kyoto-u.ac.jp/~future/icis/wp/wp-content/uploads/2016/05/2016-010-e.pdf",
        bibTex: (
    <div>
      @ARTICLE&#123;West2016jics,<br/>
    author = &#123;J.D. West&#125;,<br/>
    title = &#123;The Science of Data Science&#125;,<br/>
    journal = &#123;Journal of Integrated Creative Studies&#125;,<br/>
    volume = &#123;No.2016-010-e&#125;,<br/>
    doi = &#123;10.14989/214432&#125;,<br/>
    year = &#123;2016&#125;&#125;<br/>
    </div>
    ),
        authors: <div><span className="bold">J.D. West</span></div>,
        pdf: West2016jicsPDF,
    },
    {
        title: "Can Ignorance Promote Democracy? (2011)",
        abstract: "Ideas are like fire, observed Thomas Jefferson in 1813u2014information can be passed on without relinquishing it (1). Indeed, the ease and benefit of sharing information select for individuals to aggregate into groups, driving the buildup of complexity in the biological world (2, 3). Once the members of some collectiveu2014whether cells of a fruit fly or citizens of a democratic societyu2014have accumulated information, they must integrate that information and make decisions based upon it. When these members share a common interest, as do the stomata on the surface of a plant leaf (4), integrating distributed information may be a computational challenge. But when individuals do not have entirely coincident interests, strategic problems arise. Members of animal herds, for example, face a tension between aggregating information for the benefit of the herd as a whole, and avoiding manipulation by self-interested individuals in the herd. Which collective decision procedures are robust to manipulation by selfish players (5)? On page 1578 of this issue, Couzin et al. (6) show how the presence of uninformed agents can promote democratic outcomes in collective decision problems.",
        journal_volume: (
    <div>
    <span className="italics">Science. </span>
    <span className="volume">334(6062):1503-1504. doi:10.1126/science.1216124</span>
    </div>
    ),
        html: "http://science.sciencemag.org/content/334/6062/1503",
        bibTex: (
    <div>
      @article&#123;West2011Science,<br/>
      ttitle=&#123;Can ignorance promote democracy?&#125;,<br/>
      author=&#123;J.D. West and C.T. Bergstrom&#125;,<br/>
      journal=&#123;Science&#125;,<br/>
      volume=&#123;334&#125;,<br/>
      number=&#123;6062&#125;,<br/>
      number=&#123;1503--1504&#125;,<br/>
      year=&#123;2011&#125;,<br/>
      doi = &#123;10.1126/science.1216124&#125;,<br/>
      issn = &#123;0036-8075&#125;,<br/>
      publisher=&#123;American Association for the Advancement of Science&#125;&#125;<br/>
    </div>
    ),
        authors: <div><span className="bold">J.D. West</span> and C.T Bergstrom</div>,
        pdf: West2011SciencePDF,

    },
    {
        title: "How to improve the use of metrics: Learn from Game Theory (2010)",
        abstract: "Giving bad answers is not the worst thing a ranking system can do u2014 the worst thing is to encourage bad science. The next generation of scientific metrics needs to take this into account.When scientists order elements by molecular weight, the elements do not respond by trying to sneak higher up the order. But when administrators order scientists by prestige, the scientists tend to be less passive. There is a powerful feedback between the ranking systems used to assess scientific productivity and the actions of scientists trying to further their careers via these ranking systems.",
        journal_volume: (
    <div>
    <span className="italics">Nature. </span>
    <span className="volume">465:870-872. doi:10.1038/465870a</span>
    </div>
    ),
        html: "http://dx.doi.org/10.1038/465870a",
        bibTex: (
    <div>
      @article&#123;West2010Nature,<br/>
      Author = &#123;J.D. West&#125;,<br/>
      Journal = &#123;Nature&#125;,<br/>
      Pages = &#123;870-872&#125;,<br/>
      Ttitle = &#123;How to improve the use of metrics: Learn from Game Theory&#125;,<br/>
      Volume = &#123;465&#125;,<br/>
      Year = &#123;2010&#125;&#125;<br/>
    </div>
    ),
        authors: <div><span className="bold">J.D. West</span></div>,
        pdf: West2010NaturePDF,
    },
    {
        title: 'Response to "Big Macs and Eigenfactor Scores: The Correlation Conundrum" (2010)',
        abstract: "As we pointed out in our original article (West,Bergstrom, & Bergstrom, in press), currency denominations generate a spurious correlation in the Big Mac data. The high correlation between wage rates and Big Mac prices denominated in local currency might lead a careless reader to believe that in all countries it takes a laborer about the same amount of time to earn a Big Mac. By rescaling currencies in a few of the countries, Prathap (in press) shows that this is not the case. Of course. Any competent statistician would do something like this. For example, when The Economist publishes their Big Mac index, they convert all prices into US dollars at prevailing currency exchange rates. That was the point of our analogyu2014to pick a case where the source of spurious correlation was so obvious that anyone could recognize the problem.",
        journal_volume: (
    <div>
    <span className="italics">Journal of the American Society for Information Science &amp; Technology. </span>
    <span className="volume">61(12):2592 doi: 10.1002/asi.21408</span>
    </div>
    ),
        html: "http://dx.doi.org/10.1002/asi.21408",
        bibTex: (
    <div>
      @article&#123;West2010JASIST-2,<br/>
      ttitle=&#123;Response to u201cBig Macs and Eigenfactor scores: The correlation conundrumu201d&#125;,<br/>
      author=&#123;J.D. West and T.C. Bergstrom and C.T. Bergstrom&#125;,<br/>
      journal=&#123;Journal of the American Society for Information Science and Technology&#125;,<br/>
      volume=&#123;61&#125;,<br/>
      number=&#123;12&#125;,<br/>
      pages=&#123;2592--2592&#125;,<br/>
      year=&#123;2010&#125;,<br/>
      issn = &#123;1532-2890&#125;,<br/>
      doi = &#123;10.1002/asi.21408&#125;,<br/>
      publisher=&#123;Wiley Online Library&#125;&#125;<br/>
    </div>
    ),
        authors: <div><span className="bold">J.D. West</span>, T.C. Bergstrom and C. T. Bergstrom</div>,
        pdf: West2010JASIST2PDF,
    },
    {
        title: "The EigenfactorTM Metrics: How does the Journal of Biological Chemistry stack up? (2009)",
        abstract: "The scientific literature comprises a vast network of research papers, linked to one another by scholarly citations; this network traces the spread of ideas through the scientific community. At the Eigenfactor Project, we use the structure of this network to assess the influence of scholarly journals and to map out relations among scientific  fields.",
        journal_volume: (
    <div>
    <span className="italics">The American Society for Biochemistry and Molecular Biology (ASBMB Today). </span>
    <span className="volume">April: p. 20-21</span>
    </div>
    ),
        html: "http://www.asbmb.org/uploadedFiles/ASBMBToday/Content/Archive/ASBMBToday-April-2009.pdf",
        bibTex: (
    <div>
      @ARTICLE&#123;West2009AmSocBiochem,<br/>
      author = &#123;J.D. West and M. Stefaner and C.T. Bergstrom&#125;,<br/>
      ttitle = &#123;The Eigenfactor Metrics: How does the Journal of Biological Chemistry stack up?&#125;,<br/>
      journal = &#123;The American Society for Biochemistry and Molecular Biology (ASBMB Today)&#125;,<br/>
      volume = &#123;April&#125;,<br/>
      pages = &#123;20--21&#125;,<br/>
      year = &#123;2009&#125;&#125;<br/>
    </div>
    ),
        authors: <div><span className="bold">J.D. West</span>, M. Stefaner and C. T. Bergstrom</div>,
        pdf: West2009ASBMBPDF,
    },
    {
        title: "The EigenfactorTM Metrics (2008)",
        abstract: "Quantitative metrics are poor choices for assessing the research output of an individual scholar. Summing impact factors, counting citations, tallying an h-index, or looking at Eigenfactoru2122 Scores (described below)u2014none of these methods are adequate compared with what should be the gold standard: reading the scholar's publications and talking to experts about her work. But many scholars, librarians, historians of science, editors, and other individuals are also interested in larger-scale questions that require assessing hundreds or thousands of scholarly articles by hundreds or thousands of authors. u201cGiven that my library can afford only one more subscription, should I subscribe to journal x or journal y?u201d u201cHow often do physicists cite Biology journals, and do biologists pay equal attention to the physics literature?u201d u201cHas the increase in size of my journal caused a corresponding decline in average quality?u201d To answer questions such as these, aggregate bibliometric statistics can be very useful.",
        journal_volume: (
    <div>
    <span className="italics">Journal of Neuroscience. </span>
    <span className="volume">28(45):11433-11434. doi:10.1523/JNEUROSCI.0003-08.2008</span>
    </div>
    ),
        html: "http://www.jneurosci.org/content/28/45/11433.short",
        bibTex: (
    <div>
      @article&#123;Bergstrom2008JNeuroscience,<br/>
      ttitle=&#123;The Eigenfacto metrics&#125;,<br/>
      author=&#123;C.T. Bergstrom and J.D. West and M. Wiseman&#125;,<br/>
      journal=&#123;The Journal of Neuroscience&#125;,<br/>
      volume=&#123;28&#125;,<br/>
      number=&#123;45&#125;,<br/>
      pages=&#123;11433--11434&#125;,<br/>
      doi = &#123;10.1523/JNEUROSCI.0003-08.2008&#125;,<br/>
      url = &#123;http://www.jneurosci.org/content/28/45/11433.short&#125;,<br/>
      year=&#123;2008&#125;&#125;<br/>
    </div>
    ),
        authors: <div>C.T. Bergstrom, <span className="bold">J.D. West</span>, and M. A. Wiseman</div>,
        pdf: Bergstrom2008JneurosciPDF,
    },
    {
        title: "Assessing Citations with the EigenfactorTM Metrics (2008)",
        abstract: "For more than 80 years, researchers and administrators alike have evaluated the prestige and productivity of researchers, institutions, journals, and even nations by counting citations. For the past half  century, the impact factor has been the most prominent of these citation metrics. Impact factor is essentially a measure of the average number of citations that a journalu2019s articles receive over the two calendar years following publication. As a citation metric, impact factor has a number of virtues, not the least of which are that it is simple to describe and easy to calculate.",
        journal_volume: (
    <div>
    <span className="italics">Neurology. </span>
    <span className="volume">71(23):1850-1851. doi:10.1212/01.wnl.0000338904.37585.66</span>
    </div>
    ),
        html: "http://www.neurology.org/content/71/23/1850.short",
        bibTex: (
    <div>
      @article&#123;Bergstrom2008Neurology,<br/>
      ttitle=&#123;Assessing citations with the Eigenfactor Metrics&#125;,<br/>
      author=&#123;C.T. Bergstrom and J.D. West&#125;,<br/>
      journal=&#123;Neurology&#125;,<br/>
      volume=&#123;71&#125;,<br/>
      number=&#123;23&#125;,<br/>
      pages=&#123;1850--1851&#125;,<br/>
      year=&#123;2008&#125;,<br/>
      doi = &#123;10.1212/01.wnl.0000338904.37585.66&#125;&#125;<br/>
    </div>
    ),
        authors: <div>C.T. Bergstrom and <span className="bold">J.D. West</span></div>,
        pdf: Bergstrom2008NeurologyPDF,
    },
    {
        title: "Eigenfactor - The Google Approach to Bibliometrics (2008)",
        abstract: "Not all citations are created equal. This is one of the core ideas behind Eigenfactor. Citations from more prestigious journals (such as Science and Nature) are worth more than citations from less important journals (such as the Journal of Obscurity). This meritocratic approach to bibliometrics is very similar to the philosophy behind Googleu2019s PageRank algorithm, which is at u201cthe heart of [its] softwareu201d. Receiving a hyperlink from a highly reputable website means more than a hyperlink from a neighborhood blog. Both Google and Eigenfactor utilize the wealth of information inherent in the structure of their respective networks. For Google, that information can be found in the topology of the web, and for Eigenfactor, the information can be found in the citation structure of the scholarly literature. The success of Google's search engine illustrates the power of this approach to ranking. Part of the success behind PageRank can actually be traced back to prior work in the field of bibliometrics. With the advent of scholarly measures like Eigenfactor, this relationship has come full circle.",
        journal_volume: (
    <div>
    <span className="italics">Front Matter. </span>
    <span className="volume">4:7</span>
    </div>
    ),
        html: "https://appocsite2com.files.wordpress.com/2016/03/frontmatter-04.pdf",
        bibTex: (
    <div>
      @ARTICLE&#123;West2008FrontMatter,<br/>
      author = &#123;J.D. West&#125;,<br/>
      ttitle = &#123;Eigenfactor - The Google Approach to Bibliometrics&#125;,<br/>
      volume = &#123;4&#125;,<br/>
      pages = &#123;7&#125;,<br/>
      journal = &#123;FrontMatter&#125;,<br/>
      year = &#123;2008&#125;,<br/>
      publisher = &#123;Allen Press&#125;&#125;<br/>
    </div>
    ),
        authors: <div><span className="bold">J.D. West</span></div>,
        pdf: West2008FrontMatterPDF,
    },
  ],
  bookChapters: [
    {
        title: "The Cambrian Explosion in Patent Informatics (2017)",
        abstract: "",
        journal_volume: (
    <div>
    <span className="italics">Legal Informatics.</span> <span className="volume">Cambridge University Press (in prep)</span>
    </div>
    ),
        html: "",
        bibTex: (
        ""
    ),
        authors: <div>A.W. Torrance  and <span className="bold">J.D. West</span></div>,
        pdf: ""
    },
    {
        title: "The Data Gold Rush in Higher Education (2016)",
        abstract: "The enthusiasm for all things big data and data science is more alive now than ever. It can be seen in the frequency of big data articles published in major newspapers and in the venture capitalists betting on its economic impact. Governments and foundations are calling for grant proposals, and big companies are reorganizing in response to this new commodity. Another, often-overlooked vitality indicator of data science comes from education. Students are knocking down the doors at universities, massive open online courses (MOOCs), and workshops. The demand for data science skills is at an all-time high, and universities are responding.",
        journal_volume: (
    <div>
    <span className="italics">Big Data is Not a Monolith. </span>
    <span className="volume">chpt. 10, MIT Press (in press)</span>
    </div>
    ),
        html: "https://mitpress.mit.edu/books/big-data-not-monolith",
        bibTex: (
    <div>
            @INCOLLECTION&#123;West2016goldrush,<br/>
                  author = &#123;J.D. West and J. Portenoy&#125;,<br/>
                  ttitle = &#123;The Data Gold Rush in Higher Education&#125;,<br/>
                  bookttitle = &#123;Big Data is Not a Monolith&#125;,<br/>
                  publisher = &#123;MIT Press&#125;,<br/>
                  year = &#123;2016&#125;,<br/>
                  chapter = &#123;10&#125;,<br/>
                  editor = &#123;Sugimoto, C.R. and Ekbia, H. and Mattioli, M.&#125;&#125;<br/>
    </div>
    ),
        authors: <div><span className="bold">J.D. West</span>, J. Portenoy</div>,
        pdf: ""
    },
    {
        title: "A Network Approach to Scholarly Evaluation (2013)",
        abstract: "As Derek de Solla Price famously noted in 1965, the scientific literature forms a vast network. The nodes of this network are the millions of published articles, and the edges are the citations between them. There is a wealth of information u2014 not only within the content of these nodes (the text) - but also within the structure connecting these nodes (the network topology). In fact, the network topology by itself provides clues about the quality of the content. This is similar to how Googleu2019s PageRank algorithm harnesses the hyperlink structure of the web to evaluate web pages.",
        journal_volume: (
    <div>
    <span className="italics">Beyond Bibliometrics: Harnessing Multidimensional Indicators of Scholarly Impact. </span>
    <span className="volume">chpt. 8: 151-166, MIT Press</span>
    </div>
    ),
        html: "https://mitpress.mit.edu/books/beyond-bibliometrics",
        bibTex: (
    <div>
            @INCOLLECTION&#123;West2014BeyondBiblio,<br/>
                  author = &#123;J.D. West and D. Vilhena&#125;,<br/>
                  ttitle = &#123;A Network Approach to Scholarly Evaluation&#125;,<br/>
                  bookttitle = &#123;Beyond Bibliometrics: Harnessing Multidimensional Indicators of Scholarly Impact&#125;,<br/>
                  publisher = &#123;MIT Press&#125;,<br/>
                  chapter = &#123;8&#125;,<br/>
                  pages = &#123;151-166&#125;,<br/>
                  editor = &#123;&#123;B. Cronin&#125; and &#123;C.R. Sugimoto&#125;&#125;,<br/>
                  year = &#123;2014&#125;&#125;<br/>
    </div>
    ),
        authors: <div><span className="bold">J.D. West</span>, D. Vilhena</div>,
        pdf: ""
    },
    {
        title: "Bacteriophages: models for exploring basic principles of ecology (2008)",
        abstract: "A virus depends intimately upon its host in order to reproduce, which makes the host organism a crucial part of the virus' environment. This basic facet of viral existence means that ecology, the scientific field focusing on how organisms interact with each other and their environment, is particularly relevant to the study of viruses. In this chapter we explore some of the ways in which the principles of ecology apply to viruses that infect bacteriau2014the bacteriophages (or \"phages\" for short). In turn, we also discuss how the study of phage and their bacterial hosts has contributed to different subfields of ecology.",
        journal_volume: (
    <div>
    <span className="italics">Bacteriophage Ecology: Population Growth, Evolution, and Impact of Bacterial Viruses.</span>
    <span className="volume">chpt. 2: 31-63, University Press, Cambridge, U.K.</span>
    </div>
    ),
        html: "http://www.cambridge.org/catalogue/catalogue.asp?isbn=9780521858458",
        bibTex: (
    <div>
            @INCOLLECTION&#123;Kerr2008Bacteriophages,<br/>
                  author = &#123;B. Kerr and J.D. West and B. Bohannan&#125;,<br/>
                  ttitle = &#123;Bacteriophages: models for exploring basic principles of ecology&#125;,<br/>
                  chapter = &#123;2&#125;,<br/>
                  pages = &#123;31-63&#125;,<br/>
                  bookttitle = &#123;Bacteriophage Ecology: Population Growth, Evolution, and Impact of Bacterial Viruses&#125;,<br/>
                  publisher = &#123;Cambridge Univerity Press&#125;,<br/>
                  editor = &#123;&#123;S.T. Abedon&#125;&#125;,<br/>
                  year = &#123;2008&#125;&#125;<br/>
    </div>
    ),
        authors: <div>B. Kerr, <span className="bold">J.D. West</span> and B.J.M Bohannan</div>,
        pdf: ""
    },
  ],
});

const bioData = Immutable.Map({
  bio: (
    <div>
      <h1 className="hidden">Bio</h1>
      <Row>
        <Col s={12}>
          <p>"<span className="italics">...work on interesting problems, problems that are messy and problems that get you excited; don't consider disciplinary boundaries; teach; write a few papers; and most importantly, surround yourself with good people...</span>" --my inner research voice</p>
        </Col>
      </Row>
      <Row>
        <Col s={12} className="center-align">
          <a target="_blank" href="http://www.nature.com/nature/journal/v510/n7506/full/510470a.html?message-global=remove"><img className="responsive-img hoverable z-depth-2" src={science_flowImg} alt="Emergence of Neuroscience" title="Emergence of Neuroscience"/></a>
        </Col>
      </Row>
      <Row>
        <Col s={12}>
          <h2>About Me</h2>
          <hr/>
        </Col>
        <Col s={12}>
          <p>I am an Assistant Professor in the <a target="_blank" href="https://ischool.uw.edu">Information School</a> at the <a target="_blank" href="http://www.washington.edu">University of Washington</a> (UW). I co-direct the <a target="_blank" href="https://datalab.ischool.uw.edu/">DataLab</a>, study the <Link to="Research.html">Science of Science</Link>, and coordinate Data Science education at UW and the <a target="_blank" href="http://escience.washington.edu">eScience Institute</a>.</p>

          <p>I see information as a central unifying them in society, biology and our physical world. I spend much of my time developing methods for mapping large citation networks in order to understand the evolution of scholarly ideas; however, network thinking is useful for understanding the movement of <a target="_blank" href={Peak2004PNASPDF}>[1]</a> water molecules in stomatal networks, <a target="_blank" href={Prado2009JTBPDF}>[2]</a> infectious disease in human contact networks, and <a target="_blank" href={Rosvall2014NatureComPDF}>[3]</a> passengers in airline transportation networks. I co-founded several <Link to="/research#research_projects">research projects</Link> in the Science of Science including <a target="_blank" href="http://www.eigenfactor.org">Eigenfactor.org</a> and <a target="_blank" href="http://www.viziometrics.org">Viziometrics.org</a>.</p>

          <p>In my lifetime, I have seen the advent of the home computer, the internet, email, and google. This revolution in technology, though, has produced more than just convenient forms of communication.  The information age has delivered new data, new questions and new metaphors to a whole new generation of scientists. My vocabulary as a biologist includes words like code, compression and computation; my microscope consists of cellular automata, network models and genetic algorithms. This para-discipline of science - where economists talk like biologists and biologists talk like computer scientists - is where I think the some of the most interesting questions lie.</p>

          <p>I am not an expert in any one field, but my training has given me several hats. I study the properties of citation networks and look for large-scale patterns within these networks (~ physics). Citation networks - model systems for information flow - are ideal for studying the birth and death of ideas (~ biology). I investigate biases in science; specifically, I investigate gender differences in authorship and promotion (~ sociology). And I develop algorithms for mapping and navigating science (~ computer science). Interdisciplinary is requisite of most research disciplines nowadays - the science of science is no different. My non-disciplinary training has prepared and motivated me to pursue the non-disciplinary.</p>

          <p>People often ask me why I reside in an information school if my training is in biology and physics. My passion is in facilitating science as much as in participating science. The ethos of Information Science is to “make information work”. I want to do this for Science. I want to bring the latest and greatest from data mining, machine learning and computer vision to scientists and their day-to-day interactions with the literature.</p>
        </Col>
        <Col s={12} className="center-align">
          <img src={snow_mountainsImg} alt="snowy mountains" title="snowy mountains" className="responsive-img boxed"/>
        </Col>
      </Row>
      <Row>
        <Col s={12}>
          <h2>Life and Information</h2>
          <hr/>
        </Col>
        <Col s={12}>
          <p>I grew up in the small town of Ammon, Idaho. I attended <a target="_blank" href="http://www.usu.edu/">Utah Sate University</a> to play tennis and ski in some of the best snow on earth.  After finishing a bachelors degree in biology, I combined a tennis-pro hiatus with a Masters degree. I worked with <a target="_blank" href="http://bioweb.usu.edu/kmott/">Keith Mott</a> and <a target="_blank" href="http://www.physics.usu.edu/department/faculty/peak.html">David Peak</a> investigating stomatal networks as distributed computers <a target="_blank" href="">[1]</a>. This work hooked my interests in networks, complex systems, and information theory.</p>

          <p>In the fall of 2005, I began my PhD at UW working with <a target="_blank" href="http://octavia.zoology.washington.edu">Carl Bergstrom</a> and <a target="_blank" href="http://kerrlab.org">Ben Kerr</a>. I was interested in studying the role of information processing systems in the evolution of life. During this time, I was introduced to citation networks as a <Link to="/research#model_system">model system</Link> for studying information flows in networks. The specific problem was to figure out how to better measure scholarly influence and how to automatically map scientific disciplines. That research has led me to where I am today, which includes developing methods for mapping science<a target="_blank" href="http://www.eigenfactor.org/map/maps.php">[4]</a>, visualizing citation networks <a target="_blank" href="http://well-formed.eigenfactor.org">[5]</a>, investigating the role of gender in academia <a target="_blank" href="http://www.eigenfactor.org/gender/">[6]</a>, understanding the economics of publishing and its role on science <a target="_blank" href="http://www.eigenfactor.org/openaccess/">[7]</a>, and developing scholarly recommender systems. <a target="_blank" href="http://babel.eigenfactor.org">[8]</a>.</p>

          <p>During my post-doc, I was fortunate to continue thinking about networks and applying community detection methods to large, citation networks. I worked with <a target="_blank" href="http://www.tp.umu.se/~rosvall/">Martin Rosvall</a> in the <a target="_blank" href="http://www.org.umu.se/icelab/english/">IceLab</a> at <a target="_blank" href="http://www.umu.se/english/">Umea University</a> (Sweden). One of the primary research projects from the IceLab is <a target="_blank" href="http://www.mapequation.org">mapequation.org</a>. The algorithms from this project form the basis for much of the work we do in our lab around the mapping of scientific literature.</p>


          <p>I have been lucky in my research journey so far.  I have worked with collaborators and students as passionate about science as me. I have had mentors that are both good researchers and good people. And I have worked in departments and universities that encourage the crossing of disciplinary boundaries.</p>


          <p style={{float: 'right'}}>"<span className="italics">The whole is the sum of the parts <span className="bold">plus</span> the interactions...</span>" -Martin Rosvall</p>
        </Col>
      </Row>
    </div>
  )
});

export {drawerLinks, homeData, researchData, publicationsData, bioData};

/*
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
*/
