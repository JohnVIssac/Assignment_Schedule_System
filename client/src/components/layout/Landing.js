import React from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large"> LOGIN </h1>
          <div className="buttons">
            {/* <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>*/}
            <br />
            <Link to="/login" className="btn btn-success">
              STUDENT
            </Link>
            <br />
            <br />
            <br />
            <Link to="/loginm" className="btn btn-success">
              STAFF
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
