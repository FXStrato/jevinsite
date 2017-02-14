import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';
import {browserHistory, Link} from 'react-router';
import {AppBar, Drawer, MenuItem, Tabs, Tab} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


//Put navigation here if a constant menu is wanted
class App extends Component {
  state = {
    activeTab: '',
    open: false
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

  handleToggle = () => {
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <div>
        <header>
          <Row>
              <MuiThemeProvider muiTheme={getMuiTheme()}>
                <AppBar
                  id="navbar-appbar"
                title="Jevin West"
                onLeftIconButtonTouchTap={this.handleToggle}
                />
              </MuiThemeProvider>
          </Row>
          <div className="container">
            <Row>
              <Col s={12}>
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                  <Tabs className="hide-on-med-and-down"
                    id="nav-tabs"
                    value={this.state.activeTab}>
                    <Tab value="home" onActive={() => this.handleActive('/')} data-route="/" label="Home" />
                    <Tab value="research" onActive={() => this.handleActive('/research')} data-route="/research" label="Research" />
                    <Tab value="publications" onActive={() => this.handleActive('/publications')} data-route="/publications" label="Publications" />
                    <Tab value="teaching" onActive={() => this.handleActive('/teaching')} data-route="/teaching" label="Teaching" />
                    <Tab value="presentations" onActive={() => this.handleActive('/presentations')} data-route="/presentations" label="Presentations" />
                    <Tab value="bio" onActive={() => this.handleActive('/bio')} data-route="/bio" label="Bio" />
                    <Tab value="cv" onActive={() => this.handleActive('/cv')} data-route="/cv" label="CV" />
                    <Tab value="news" onActive={() => this.handleActive('/news')} data-route="/news" label="News" />
                  </Tabs>
                </MuiThemeProvider>
              </Col>
            </Row>
            <MuiThemeProvider muiTheme={getMuiTheme()}>
              <Drawer
                width={230}
                open={this.state.open}
                docked={false}
                onRequestChange={(open) => this.setState({open})}
              >
                <div style={{height: 64, backgroundColor: '#000'}}></div>
                <Link to="/research" onTouchTap={() => this.setState({open: false})}><MenuItem>Research</MenuItem></Link>
                <Link to="/publications" onTouchTap={() => this.setState({open: false})}><MenuItem>Publications</MenuItem></Link>
                <Link to="/teaching" onTouchTap={() => this.setState({open: false})}><MenuItem>Teaching</MenuItem></Link>
                <Link to="/presentations" onTouchTap={() => this.setState({open: false})}><MenuItem>Presentations</MenuItem></Link>
                <Link to="/bio" onTouchTap={() => this.setState({open: false})}><MenuItem>Bio</MenuItem></Link>
                <Link to="/cv" onTouchTap={() => this.setState({open: false})}><MenuItem>CV</MenuItem></Link>
                <Link to="/news" onTouchTap={() => this.setState({open: false})}><MenuItem>News</MenuItem></Link>
              </Drawer>
            </MuiThemeProvider>
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
