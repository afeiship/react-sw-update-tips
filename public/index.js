import ReactSwUpdateTips from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import NxOfflineSw from '@feizheng/next-offline-sw';
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
        // this.setState({ hasUpdate: false });
        console.log('SW Event:', 'onUpdateReady');
      }
    });
  }

  render() {
    return (
      <div className="app-container">
        <ReactSwUpdateTips value={this.state.hasUpdate} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
