import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';
import {hashHistory} from 'react-router';
import {AppBar, Drawer, MenuItem, Tabs, Tab} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import _ from 'lodash';
import {purple500, blueGrey100} from 'material-ui/styles/colors';
import {drawerLinks} from './Data';
import JWBanner from './img/jw.png';


//Put navigation here if a constant menu is wanted
class App extends Component {
  state = {
    activeTab: '',
    open: false
  }

  componentWillMount = () => {
  let path = hashHistory.getCurrentLocation().pathname;
  let currentTab = path.split('/').pop();
  // you can add more validations here
  this.setState({ activeTab: currentTab || 'home' });
  }

  componentDidUpdate = () => {
    //Should handle in-site page changes and reflect it on the Tab Navigation.
    //Might not actually handle going from a page back to home, prob add something to handle that later down the line.
    let newTab = hashHistory.getCurrentLocation().pathname.split('/').pop();
    if(newTab !== this.state.activeTab) {
      if(newTab) {
        this.setState({ activeTab: newTab });
      }
    }
  }

  handleActive = (path) => {
    let currentTab = path.split('/').pop();
    this.setState({ activeTab: currentTab || 'home' , open: false});
    if(hashHistory.getCurrentLocation().pathname !== path) hashHistory.push(path);
  }

  handleToggle = () => {
    this.setState({open: !this.state.open});
  }

  handleActiveLink = (link) => {
    let path = hashHistory.getCurrentLocation().pathname;
    if(path === link) {
      if(hashHistory.getCurrentLocation().pathname !== '/' && link === '/') return {color: '#000'};
      return {backgroundColor: blueGrey100, color: '#000'};
    } else {
      return {color: '#000'};
    }
  }

  render() {
    const tabStyle = {
      backgroundColor: '#fff',
      color: '#000'
    };

    let drawerlinks = _.map(drawerLinks.toArray(), (elem, index) => {
      let activeStyle = this.handleActiveLink(elem.link);
      return (
        <MenuItem  style={activeStyle} key={'drawerlink-' + index} onTouchTap={() => this.handleActive(elem.link)}>{elem.body}</MenuItem>
      )
    });

    let tablinks = _.map(drawerLinks.toArray(), (elem, index) => {
      let value = elem.body.toLowerCase();
      return (
        <Tab key={'tablink-' + index} style={tabStyle} value={value} onActive={() => this.handleActive(elem.link)} data-route={elem.link} label={elem.body} />
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
                  title={<span style={{color: '#000'}}>Jevin D. West</span>}
                  onLeftIconButtonTouchTap={this.handleToggle}
                  iconElementRight={<img src={JWBanner} style={{marginTop: -8}} alt="Jevin West Banner"/>}
                />
              </MuiThemeProvider>
          </Row>
          <div className="container">
            <Row>
              <Col s={12}>
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                  <Tabs className="hide-on-med-and-down"
                    id="nav-tabs"
                    inkBarStyle={{backgroundColor: purple500}}
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
                <div style={{height: 64, backgroundColor: '#4A148C'}}></div>
                {drawerlinks}
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
