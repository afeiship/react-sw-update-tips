# react-sw-update-tips
> Update tips for service-worker.

## install
```shell
npm install -S afeiship/react-sw-update-tips
```

## usage
1. import css
  ```scss
  @import "~react-sw-update-tips/style.scss";

  // customize your styles:
  $react-sw-update-tips-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactSwUpdateTips from 'react-sw-update-tips';
  
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
