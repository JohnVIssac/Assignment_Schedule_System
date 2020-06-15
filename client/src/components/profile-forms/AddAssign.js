import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { addAssign } from '../../actions/post';
//import { reg } from '../../actions/auth';

const Reg = ({ setAlert, addAssign }) => {
  const [formData, setFormData] = useState({
    cname: '',
    batch: '',
    studno: ''
  });

  const { cname, batch, studno } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    addAssign({ cname, batch, studno });
    alert('Assignment added successfully');
  };

  return (
    <Fragment>
      <h2 className="large text-primary">Create Assignment Team</h2>
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
            placeholder="Student Per Team"
            name="studno"
            value={studno}
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

Reg.propTypes = {
  setAlert: PropTypes.func.isRequired,
  addAssign: PropTypes.func.isRequired
};

/*const mapStateToProps = (state) => ({
  reg: state.reg
});
*/

export default connect(null, { setAlert, addAssign })(Reg);
