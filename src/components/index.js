import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import NxOfflineSw from '@feizheng/next-offline-sw';
import objectAssign from 'object-assign';

const CLASS_NAME = 'react-sw-update-tips';

export default class extends Component {
  static propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    value: PropTypes.bool
  };

  static defaultProps = {
    text: '↺ 有新版本更新啦，点击刷新',
    hidden: false,
    value: false,
    onChange: () => {
      NxOfflineSw.update();
    }
  };

  constructor(inProps) {
    super(inProps);
    this.state = {
      hidden: inProps.hidden
    };
  }

  onClick = (inEvent) => {
    this.props.onChange({
      target: { value: false }
    });
  };

  render() {
    const { className, value, text, hidden, ...props } = this.props;
    return (
      value && (
        <div
          className={classNames(CLASS_NAME, className)}
          hidden={this.state.hidden}
          {...props}>
          <a onClick={this.onClick}>
            <span className={`${CLASS_NAME}__text`}>{text}</span>
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
