import NxOfflineSw from '@feizheng/next-offline-sw';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const CLASS_NAME = 'react-sw-update-tips';

export default class ReactSwUpdateTips extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * Tips text.
     */
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    /**
     * Default value.
     */
    value: PropTypes.bool,
    /**
     * The html hidden status.
     */
    hidden: PropTypes.bool,
    /**
     * The change handler.
     */
    onChange: PropTypes.func
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
    inEvent.preventDefault();
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
