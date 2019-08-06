import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import NxOfflineSw from 'next-offline-sw';
import objectAssign from 'object-assign';

const CLASS_NAME = 'react-sw-update-tips';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    hasUpdate: PropTypes.bool
  };

  static defaultProps = {
    value: '↺ 有新版本更新啦，点击刷新',
    hidden: false,
    hasUpdate: false
  };
  /*===properties end===*/

  constructor(inProps) {
    super(inProps);
    this.state = {
      hidden: inProps.hidden
    };
  }

  render() {
    const { className, hasUpdate, value, hidden, ...props } = this.props;
    return (
      hasUpdate && (
        <div
          className={classNames(CLASS_NAME, className)}
          hidden={this.state.hidden}
          {...props}>
          <a
            onClick={() => {
              NxOfflineSw.update();
            }}>
            <span className={`${CLASS_NAME}__text`}>{value}</span>
          </a>
          <a
            className={`${CLASS_NAME}__close`}
            onClick={() => {
              this.setState({ hidden: true });
            }}>
            ㄨ
          </a>
        </div>
      )
    );
  }
}
