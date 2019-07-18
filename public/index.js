import ReactSwUpdateTips from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import NxOfflineSw from 'next-offline-sw';
import './assets/style.scss';

class App extends React.Component {
  state = {
    hasUpdate: true
  };

  componentDidMount() {
    this.installSw();
  }

  installSw() {
    NxOfflineSw.install({
      onUpdateReady: function() {
        nx.$memory = { hasUpdate: true };
        console.log('SW Event:', 'onUpdateReady');
      }
    });
  }

  render() {
    return (
      <div className="app-container">
        <ReactSwUpdateTips hasUpdate={this.state.hasUpdate} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
