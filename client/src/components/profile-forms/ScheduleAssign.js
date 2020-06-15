import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { addSchedule } from '../../actions/post';

const PostSchedule = ({ setAlert, addSchedule }) => {
  const [formData, setFormData] = useState({
    cname: '',
    batch: '',
    teamno: '',
    topic: '',
    datep: '',
    period: ''
  });

  const { cname, batch, teamno, topic, datep, period } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    addSchedule({ cname, batch, teamno, topic, datep, period });
    alert('Assignment Schedule added successfully');
  };

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

PostSchedule.propTypes = {
  setAlert: PropTypes.func.isRequired,
  addSchedule: PropTypes.func.isRequired
};

export default connect(null, { setAlert, addSchedule })(PostSchedule);
