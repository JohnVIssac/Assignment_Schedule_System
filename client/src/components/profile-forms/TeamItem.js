import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const TeamItem = ({
  auth,
  team: {
    _id,
    rollno,
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
    roll6,
    date
  }
}) => (
  <div className="post bg-white p-1 my-1">
    <div className="my-1">
      <p>Posted By : {rollno}</p>
      <h4>{cname}</h4>
      <pre>
        Batch: {batch} &nbsp;&nbsp;&nbsp; Team Number:{teamno}
      </pre>
      <p>
        {roll1} : {stud1}
      </p>
      <p>
        {roll2} : {stud2}
      </p>
      <p>
        {roll3} : {stud3}
      </p>
      <p>
        {roll4} : {stud4}
      </p>
      <p>
        {roll5} : {stud5}
      </p>
      <p>
        {roll6} : {stud6}
      </p>
    </div>
    <div>
      <p className="post-date">
        Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
      </p>
    </div>
  </div>
);

TeamItem.propTypes = {
  team: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(TeamItem);
