# react-sw-update-tips
> Update tips for service-worker.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @feizheng/react-sw-update-tips
```

## update
```shell
npm update @feizheng/react-sw-update-tips
```

## properties
| Name      | Type   | Required | Default                      | Description                           |
| --------- | ------ | -------- | ---------------------------- | ------------------------------------- |
| className | string | false    | -                            | The extended className for component. |
| text      | union  | false    | '↺ 有新版本更新啦，点击刷新' | Tips text.                            |
| value     | bool   | false    | false                        | Default value.                        |
| hidden    | bool   | false    | false                        | The html hidden status.               |
| onChange  | func   | false    | -                            | The change handler.                   |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-sw-update-tips/dist/style.scss";

  // customize your styles:
  $react-sw-update-tips-options: ()
  ```
2. import js
  ```js
  import NxOfflineSw from '@feizheng/next-offline-sw';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactSwUpdateTips from '@feizheng/react-sw-update-tips';
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
        onUpdateReady: function () {
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

  ```

## documentation
- https://afeiship.github.io/react-sw-update-tips/


## license
Code released under [the MIT license](https://github.com/afeiship/react-sw-update-tips/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/react-sw-update-tips
[version-url]: https://npmjs.org/package/@feizheng/react-sw-update-tips

[license-image]: https://img.shields.io/npm/l/@feizheng/react-sw-update-tips
[license-url]: https://github.com/afeiship/react-sw-update-tips/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/react-sw-update-tips
[size-url]: https://github.com/afeiship/react-sw-update-tips/blob/master/dist/react-sw-update-tips.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/react-sw-update-tips
[download-url]: https://www.npmjs.com/package/@feizheng/react-sw-update-tips
