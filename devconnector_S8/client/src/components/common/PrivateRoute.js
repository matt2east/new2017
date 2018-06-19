import React from "react";
import { Route, Router, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const privateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenicated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

privateRoute.PropTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(privateRoute);
