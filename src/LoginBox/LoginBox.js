import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const LoginBox = ({
  children,
  className: classNameProp,
  ...other
}) => {
  const className = classNames({
    'login-box': true
  }, classNameProp);

  return (
    <div
      className={className}
      style={{
        marginTop: '0',
        marginBottom: '0',
        paddingTop: '26.5vh',
        paddingBottom: '26.5vh'
      }}
      {...other}
    >
      {children}
    </div>
  );
};

LoginBox.propTypes = {
  /**
   * The contents of the component.
   */
  children: PropTypes.node.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string
};

export default LoginBox;