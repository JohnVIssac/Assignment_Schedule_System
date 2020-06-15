import React, { Fragment, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import ReactDOM from 'react-dom';
import Experience from './Experience';
import Education from './Education';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import { param } from 'express-validator';
//import GTeams from '../profile-forms/DispTeams';
//import '../../App.css';

//let ans;

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  auth: { userm },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  //let uroll = user.rollno || userm.rollno;
  //ans = uroll.match('MX');
  //console.log(ans);
  //if (user.rollno.match('MX'))
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome {user && user.name}{' '}
        {userm && userm.name}
      </p>
      {profile !== null ? (
        <Fragment>
          <DashboardActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />
        </Fragment>
      ) : (
        <Fragment>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Add Student
          </Link>
        </Fragment>
      )}
      {/*ans.length > 1 ? (
        <Fragment>
          <Link to="disp-schedule" className="btn btn-primary my-1">
            Show Assignments Schedule
          </Link>
        </Fragment>
      ) : (
        <Fragment>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Add Student
          </Link>
        </Fragment>
      )*/}
      <br />
      <br />
      <Fragment>
        <Link to="/add-assign" className="btn btn-primary my-1">
          Create Assignment
        </Link>
      </Fragment>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Fragment>
        <Link to="disp-assigns" className="btn btn-primary my-5">
          Show Assignments
        </Link>
      </Fragment>
      <br />
      <br />
      <Fragment>
        <Link to="/schedule-assign" className="btn btn-primary my-1">
          Schedule Assignment
        </Link>
      </Fragment>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Fragment>
        <Link to="disp-schedule" className="btn btn-primary my-4">
          Show Assignments Schedule
        </Link>
      </Fragment>
      <br />
      <br />
      <Fragment>
        <Link to="add-team" className="btn btn-primary my-1">
          Add Assignment Team
        </Link>
      </Fragment>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Fragment>
        <Link to="disp-teams" className="btn btn-primary my-4">
          Show Assignment Teams
        </Link>
      </Fragment>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
  //ans: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
  //ans: state.ans
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
