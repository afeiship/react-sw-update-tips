# react-sw-update-tips
> Update tips for service-worker.

## installation
```shell
npm install -S @feizheng/react-sw-update-tips
```
## properties
| property        | type | description |
| --------------- | ---- | ----------- |
| className       | -    | -           |
| value           | -    | -           |
| onChange        | -    | -           |

## usage
1. import css
  ```scss
  @import "~@feizheng/react-sw-update-tips/dist/style.scss";

  // customize your styles:
  $react-sw-update-tips-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactSwUpdateTips from '@feizheng/react-sw-update-tips';
  
  // your app:
  class App extends React.Component{
    render(){
      return (
        <ReactSwUpdateTips />
      )
    }
  }

  // render to dom:
  ReactDOM.render(<App/>, document.getElementById('app'));
  ```

## documentation
- https://afeiship.github.io/react-sw-update-tips/

## resources
- https://www.robinwieruch.de/minimal-react-webpack-babel-setup/
- https://www.valentinog.com/blog/react-webpack-babel/
- https://jestjs.io/docs/en/tutorial-react#snapshot-testing-with-mocks-enzyme-and-react-16
- https://testing-library.com/docs/react-testing-library/api

## todos
- [ ] Add: semver number for every build files.
- [ ] Add: need output css files.
- [ ] Add: PWA support for docs.
- [ ] Add: source.map file for dist(`you can upload for production debug`).
- [ ] BUG: npm run dev will clean dist.
