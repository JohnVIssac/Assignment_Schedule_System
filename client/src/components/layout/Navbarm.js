import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbarm = ({ authm: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
   { /*  <li>
       <Link to='/courselistss'>Course List</Link>
   </li>*/}
   <li>
        <Link to='/profiles'>Courses</Link>
     </li>
      <li>
        <Link to='/posts'>Posts</Link>
      </li>
      <li>
        <Link to='/dashboard'>
          <i className='fas fa-user' />{' '}
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li>
      <li>
        <Link to='/formonee'>
          <i className='fas fa-list' />{' '}
          <span className='hide-sm'>CeditTransfer</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
     {/* <li>
      <Link to='/profiles'>Courses</Link>
     </li>*/}
     {/* <li>
        <Link to='/register'>Register</Link>
     </li>
     <li>
       <Link to='/courselistss'>Course List</Link>
     </li>*/}
      <li>
        <Link to='/login'>LOGIN</Link>
      </li>
    </ul>
  );

  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-sitemap' /> Online Course Companion
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};


Navbarm.propTypes = {
  logout: PropTypes.func.isRequired,
  authm: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  authm: state.authm
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbarm);
