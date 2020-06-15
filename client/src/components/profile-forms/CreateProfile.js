import React, { useState, Fragment } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
//import { createProfile, getCurrentProfile } from '../../actions/profile';

const Register = ({ setAlert, register }) => {
  const [formData, setFormData] = useState({
    name: '',
    rollno: '',
    batch: '',
    password: '',
    password2: ''
  });

  const { name, rollno, batch, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, rollno, batch, password });
    }
    alert('Student added successfully');
  };

  //const [displaySocialInputs, toggleSocialInputs] = useState(false);
  return (
    <Fragment>
      <h1 className="large text-primary">Add Student</h1>
      <p className="lead">
        <i className="fas fa-user" /> Create Student Account
      </p>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Roll Number"
            name="rollno"
            value={rollno}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="Batch"
            name="batch"
            value={batch}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={(e) => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Back
        </Link>
      </form>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  register: state.register
});

export default connect(mapStateToProps, { setAlert, register })(Register);
/*
CreateProfile.propTypes = {
	createProfile: PropTypes.func.isRequired,
	getCurrentProfile: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
	profile: state.profile
});
export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
	withRouter(CreateProfile)
);
*/
