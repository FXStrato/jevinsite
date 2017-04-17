import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';
import {browserHistory} from 'react-router';
import {AppBar, Drawer, MenuItem, Tabs, Tab} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import _ from 'lodash';
import {purple500, deepPurple300} from 'material-ui/styles/colors';
import {drawerLinks} from './Data';
import JWBanner from './img/jw.png';
import twitterIcon from './img/twitter.jpg';
import drawerBanner from './img/favicon.png';

/* This file handles generation of navigation. Any navigational changes will occur here, including footer */

class App extends Component {
  state = {
    activeTab: '',
    open: false
  }

  componentWillMount = () => {
  let path = browserHistory.getCurrentLocation().pathname;
  let currentTab = path.split('/').pop();
  this.setState({ activeTab: currentTab || 'home' });
  }

  componentDidUpdate = () => {
    //Should handle in-site page changes and reflect it on the Tab Navigation.
    //Might not actually handle going from a page back to home, prob add something to handle that later down the line.
    let newTab = browserHistory.getCurrentLocation().pathname.split('/').pop();
    if(newTab !== this.state.activeTab) {
      if(newTab) {
        this.setState({ activeTab: newTab });
      }
    }
  }

  //Function handles setting current active tab, and then navigating to passed in path
  handleActive = (path) => {
    let currentTab = path.split('/').pop();
    this.setState({ activeTab: currentTab || 'home' , open: false});
    if(browserHistory.getCurrentLocation().pathname !== path) browserHistory.push(path);
  }

  //Function toggles this.state.open to open drawer
  handleToggle = () => {
    this.setState({open: !this.state.open});
  }

  //Handles adding background color to active tab
  handleActiveLink = (link) => {
    let path = browserHistory.getCurrentLocation().pathname;
    if(path === link) {
      if(browserHistory.getCurrentLocation().pathname !== '/' && link === '/') return {color: '#000'};
      return {backgroundColor: deepPurple300, color: '#000'};
    } else {
      return {color: '#000'};
    }
  }

  render() {
    const regularTabStyle = {
      backgroundColor: '#fff',
      color: '#000',
    };

    const activeTabStyle = {
      backgroundColor: deepPurple300,
      color: '#000'
    }

    let drawerlinks = _.map(drawerLinks.toArray(), (elem, index) => {
      let activeStyle = this.handleActiveLink(elem.link);
      return (
        <MenuItem  style={activeStyle} key={'drawerlink-' + index} onTouchTap={() => this.handleActive(elem.link)}>{elem.body}</MenuItem>
      )
    });

    let tablinks = _.map(drawerLinks.toArray(), (elem, index) => {
      let value = elem.body.toLowerCase();
      let tabStyle;
      if(this.handleActiveLink(elem.link).backgroundColor) tabStyle = activeTabStyle;
      else tabStyle = regularTabStyle;
      return (
        <Tab key={'tablink-' + index} style={tabStyle} className="tab-header" value={value} onActive={() => this.handleActive(elem.link)} data-route={elem.link} label={elem.body} />
      )
    });
    return (
      <div>
        <header>
          <Row>
              <MuiThemeProvider muiTheme={getMuiTheme()}>
                <AppBar
                  id="navbar-appbar"
                  style={{backgroundColor: '#fff !important', height: 60}}
                  title={<span id="navbar-title" style={{color: '#000'}}>Jevin D. West</span>}
                  onLeftIconButtonTouchTap={this.handleToggle}
                  iconElementRight={<img src={JWBanner} style={{ height: 61, marginRight: -8, marginTop: -8}} alt="Jevin West Banner"/>}
                />
              </MuiThemeProvider>
          </Row>
          <div className="container">
            <Row style={{marginBottom: '0 !important'}}>
              <Col s={12}>
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                  <Tabs className="hide-on-med-and-down"
                    id="nav-tabs"
                    inkBarStyle={{backgroundColor: purple500, display: 'none'}}
                    style={{border: 'solid 2px grey'}}
                    value={this.state.activeTab}>
                    {tablinks}
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
                <div style={{height: 61, backgroundColor: '#6A1B9A'}}><img src={drawerBanner} style={{height: 61}} className="responsive-img" alt="Jevin West Banner"/></div>
                {drawerlinks}
              </Drawer>
            </MuiThemeProvider>
          </div>
        </header>
        <main>
          {this.props.children}
        </main>
        <footer className="center-align">
          <div className="footer-copyright">
            <div className="container">
              <span className="footer-separator">© 2017 Jevin. D. West.</span>
              <span className="footer-separator">Last Modified April 11th 2017.</span>
              <span className="footer-separator"><a href="mailto:jevinw@uw.edu">jevinw@uw.edu</a></span>
              <span className="footer-separator"><a href="https://twitter.com/jevinwest" target="_blank"><img src={twitterIcon} alt="twitter: @jevinwest" title="twitter: @jevinwest" className="responsive-img" style={{height: 20}}/></a></span>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
