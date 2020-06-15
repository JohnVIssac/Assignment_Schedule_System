import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const initialState = {
  rollno: '',
  names: '',
  dep: '',
  status: '',
  skills: '',
  id: '',
  phn: '',
  twitter: '',
  facebook: '',
  linkedin: '',
  youtube: '',
  instagram: ''
};

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history
}) => {
  const [formData, setFormData] = useState(initialState);

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    rollno,
    names,
    dep,
    status,
    skills,
    id,
    phn,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  return (
    <Fragment>
    <h1 className='large text-primary'>Create Your Profile</h1>
    <p className='lead'>
      <i className='fas fa-user' /> Let's get some information to make your
      profile stand out
    </p>
    <small>* = required field</small>
    <form className='form' onSubmit={e => onSubmit(e)}>
      <div className='form-group'>
        <select name='status' value={status} onChange={e => onChange(e)}>
          <option value='0'>* Select Degree</option>
          <option value='UG'>Under Graduate</option>
          <option value='PG'>Post Graduate</option>
        </select>
        <small className='form-text'>
          Give us an idea of where you are at in your career
        </small>
      </div>
      <div className='form-group'>
        <input
          type='text'
          placeholder='Rollno'
          name='rollno'
          value={rollno}
          onChange={e => onChange(e)}
        />
        <small className='form-text'>
          Enter Your Rollno
        </small>
      </div>
      <div className='form-group'>
        <input
          type='text'
          placeholder='Name'
          name='names'
          value={names}
          onChange={e => onChange(e)}
        />
        <small className='form-text'>
          Enter Your Name
        </small>
      </div>
      <div className='form-group'>
        <input
          type='text'
          placeholder='Department'
          name='dep'
          value={dep}
          onChange={e => onChange(e)}
        />
        <small className='form-text'>
          Enter Your Department
        </small>
      </div>
      <div className='form-group'>
        <input
          type='text'
          placeholder='* Course'
          name='skills'
          value={skills}
          onChange={e => onChange(e)}
        />
        <small className='form-text'>
          Please use comma separated values for the list of course you have taken (eg. HTML,CSS,JavaScript,PHP)
        </small>
      </div>
      <div className='form-group'>
        <input
          type='text'
          placeholder='Gmail ID'
          name='id'
          value={id}
          onChange={e => onChange(e)}
        />
        <small className='form-text'>
          Enter Your Gmail ID
        </small>
      </div>
      <div className='form-group'>
        <input
            type='text'
          placeholder='Contact No'
          name='phn'
          value={phn}
          onChange={e => onChange(e)}
        />
        <small className='form-text'>Enter Your Contact No</small>
      </div>

      {/*<div className='my-2'>
        <button
          onClick={() => toggleSocialInputs(!displaySocialInputs)}
          type='button'
          className='btn btn-light'
        >
          Add Social Network Links
        </button>
        <span>Optional</span>
      </div>
  */}
      {displaySocialInputs && (
        <Fragment>
          <div className='form-group social-input'>
            <i className='fab fa-twitter fa-2x' />
            <input
              type='text'
              placeholder='Twitter URL'
              name='twitter'
              value={twitter}
              onChange={e => onChange(e)}
            />
          </div>

          <div className='form-group social-input'>
            <i className='fab fa-facebook fa-2x' />
            <input
              type='text'
              placeholder='Facebook URL'
              name='facebook'
              value={facebook}
              onChange={e => onChange(e)}
            />
          </div>

          <div className='form-group social-input'>
            <i className='fab fa-youtube fa-2x' />
            <input
              type='text'
              placeholder='YouTube URL'
              name='youtube'
              value={youtube}
              onChange={e => onChange(e)}
            />
          </div>

          <div className='form-group social-input'>
            <i className='fab fa-linkedin fa-2x' />
            <input
              type='text'
              placeholder='Linkedin URL'
              name='linkedin'
              value={linkedin}
              onChange={e => onChange(e)}
            />
          </div>

          <div className='form-group social-input'>
            <i className='fab fa-instagram fa-2x' />
            <input
              type='text'
              placeholder='Instagram URL'
              name='instagram'
              value={instagram}
              onChange={e => onChange(e)}
            />
          </div>
        </Fragment>
      )}

      <input type='submit' className='btn btn-primary my-1' />
      <Link className='btn btn-light my-1' to='/dashboard'>
        Go Back
      </Link>
    </form>
  </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
