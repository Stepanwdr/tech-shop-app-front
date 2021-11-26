import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Navigation from './Navigation';

class Wrapper extends Component {
  render() {
    const { token } = this.props;
    if (!token) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="layout">
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.users.token,
});

const mapDispatchToProps = {};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Wrapper);

export default Container;
