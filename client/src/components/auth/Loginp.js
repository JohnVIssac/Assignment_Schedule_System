import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginp } from '../../actions/auth';

const Loginp = ({ loginp, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { cname, batch, teamno, topic, datep, period } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    loginp(cname, batch, teamno, topic, datep, period);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <h2 className="large text-primary">Schedule Assignment</h2>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Course Name"
            name="cname"
            value={cname}
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
            type="number"
            placeholder="Team Number"
            name="teamno"
            value={teamno}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Topic"
            name="topic"
            value={topic}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="Date"
            placeholder="Date To Present"
            name="datep"
            value={datep}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="Period To Present"
            name="period"
            value={period}
            min="1"
            onChange={(e) => onChange(e)}
          />
        </div>

        <input type="submit" className="btn btn-primary" value="Post" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

Loginp.propTypes = {
  loginp: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { loginp })(Loginp);
