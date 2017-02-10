/*eslint no-unused-vars: "off"*/ //don't show warnings for unused
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Bio from './Bio';
import Cv from './Cv';
import Home from './Home';
import News from './News';
import Presentations from './Presentations';
import Publications from './Publications';
import Research from './Research';
import Teaching from './Teaching';
import './index.css';

// Needed for onTouchTap
injectTapEventPlugin();

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="bio" component={Bio}/>
      <Route path="cv" component={Cv}/>
      <Route path="news" component={News}/>
      <Route path="presentations" component={Presentations}/>
      <Route path="publications" component={Publications}/>
      <Route path="research" component={Research}/>
      <Route path="teaching" component={Teaching}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
