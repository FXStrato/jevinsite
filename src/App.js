import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';

class App extends Component {
  render() {
    return (
      <div>
        <header>

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
