import React from 'react';
import { connect } from 'react-redux';

const UserHeader = ({ user }) => {
  if (!user) {
    return null;
  }
  return <div className="header">{user.name}</div>;
};

const mapStateToProps = (state, { userId }) => {
  return {
    user: state.users.find((user) => user.id === userId)
  };
};

export default connect(mapStateToProps)(UserHeader);
