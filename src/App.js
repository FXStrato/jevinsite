import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';
import {browserHistory} from 'react-router';
import {AppBar, Drawer, Menu, MenuItem, Tabs, Tab} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Home from './Home';
import Research from './Research';


//Put navigation here if a constant menu is wanted
class App extends Component {
  state = {
    activeTab: ''
  }

  componentWillMount = () => {
  let path = browserHistory.getCurrentLocation().pathname;
  let currentTab = path.split('/').pop();
  // you can add more validations here
  this.setState({ activeTab: currentTab || 'home' });
  }

  handleActive = (path) => {
    let currentTab = path.split('/').pop();
    // you can add more validations here
    this.setState({ activeTab: currentTab || 'home' });
    if(browserHistory.getCurrentLocation().pathname !== path) browserHistory.push(path);
  }

  render() {
    return (
      <div>
        <header>
          <h1>Jevin West</h1>
          <div className="container">
            <Row>
              <Col s={12}>
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                  <Tabs
                    value={this.state.activeTab}>
                    <Tab value="home" onActive={() => this.handleActive('/')} data-route="/" label="Home" />
                    <Tab value="research" onActive={() => this.handleActive('/research')} data-route="/research" label="Research" />
                    <Tab value="publications" onActive={() => this.handleActive('/publications')} data-route="/publications" label="Publications" />
                    <Tab value="presentations" onActive={() => this.handleActive('/presentations')} data-route="/presentations" label="Presentations" />
                    <Tab value="teaching" onActive={() => this.handleActive('/teaching')} data-route="/teaching" label="Teaching" />
                    <Tab value="bio" onActive={() => this.handleActive('/bio')} data-route="/bio" label="Bio" />
                    <Tab value="cv" onActive={() => this.handleActive('/cv')} data-route="/cv" label="CV" />
                    <Tab value="news" onActive={() => this.handleActive('/news')} data-route="/news" label="News" />
                  </Tabs>
                </MuiThemeProvider>
              </Col>
            </Row>
          </div>
        </header>
        <main>
          {this.props.children}
        </main>
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
