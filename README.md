# react-sw-update-tips
> Update tips for service-worker.

## installation
```shell
npm install -S @feizheng/react-sw-update-tips
```
## properties
| property  | type    | description |
| --------- | ------- | ----------- |
| className | -       | -           |
| text      | Boolean | -           |
| value     | Boolean | -           |
| onChange  | Boolean | -           |

## usage
1. import css
  ```scss
  @import "~@feizheng/react-sw-update-tips/dist/style.scss";

  // customize your styles:
  $react-sw-update-tips-options: ()
  ```
2. import js
  ```js
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

  ```

## documentation
- https://afeiship.github.io/react-sw-update-tips/
