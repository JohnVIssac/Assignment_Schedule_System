import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTeam } from '../../actions/post';
import { setAlert } from '../../actions/alert';

const PostForm = ({ setAlert, addTeam }) => {
  const [formData, setFormData] = useState({
    cname: '',
    batch: '',
    teamno: '',
    stud1: '',
    roll1: '',
    stud2: '',
    roll2: '',
    stud3: '',
    roll3: '',
    stud4: '',
    roll4: '',
    stud5: '',
    roll5: '',
    stud6: '',
    roll6: ''
  });

  const {
    cname,
    batch,
    teamno,
    stud1,
    roll1,
    stud2,
    roll2,
    stud3,
    roll3,
    stud4,
    roll4,
    stud5,
    roll5,
    stud6,
    roll6
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    addTeam({
      cname,
      batch,
      teamno,
      stud1,
      roll1,
      stud2,
      roll2,
      stud3,
      roll3,
      stud4,
      roll4,
      stud5,
      roll5,
      stud6,
      roll6
    });
    alert('Assignment Team added successfully');
  };

  return (
    <div className="post-form">
      <h2 className="large text-primary">Add Assignment Team</h2>
      <form className="form my-1" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Course Name"
            name="cname"
            value={cname}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="Batch"
            name="batch"
            value={batch}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="Team Number"
            name="teamno"
            value={teamno}
            onChange={(e) => onChange(e)}
            mix="1"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Studnet 1 Name"
            name="stud1"
            value={stud1}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Studnet 1 Roll Number"
            name="roll1"
            value={roll1}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Studnet 2 Name"
            name="stud2"
            value={stud2}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Studnet 2 Roll Number"
            name="roll2"
            value={roll2}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Studnet 3 Name"
            name="stud3"
            value={stud3}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Studnet 3 Roll Number"
            name="roll3"
            value={roll3}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Studnet 4 Name"
            name="stud4"
            value={stud4}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Studnet 4 Roll Number"
            name="roll4"
            value={roll4}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Studnet 5 Name"
            name="stud5"
            value={stud5}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Studnet 5 Roll Number"
            name="roll5"
            value={roll5}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Studnet 6 Name"
            name="stud6"
            value={stud6}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Studnet 6 Roll Number"
            name="roll6"
            value={roll6}
            onChange={(e) => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Submit" />
      </form>
    </div>
  );
};

PostForm.propTypes = {
  setAlert: PropTypes.func.isRequired,
  addTeam: PropTypes.func.isRequired
};

/*const mapStateToProps = (state) => ({
  postTeam: state.postTeam
});
*/
export default connect(null, { setAlert, addTeam })(PostForm);
