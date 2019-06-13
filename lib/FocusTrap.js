import PropTypes from 'prop-types';
import React from 'react';

class FocusTrap extends React.Component {
  static propTypes = {
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    component: PropTypes.any,
    children: PropTypes.node,
    innerRef: PropTypes.any
  };

  static defaultProps = {
    component: 'div'
  };

  render() {
    const {
      component: Component,
      children,
      innerRef,
      ...props
    } = this.props;

    return (
      <Component ref={innerRef} tabIndex="-1" {...props}>
        {children}
      </Component>
    );
  }
}

export default FocusTrap;
