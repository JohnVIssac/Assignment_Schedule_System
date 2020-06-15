import React, { Fragment, useEffect, Component } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import '../../App.css';

class GSchedule extends React.Component {
  state = {
    cname: '',
    batch: '',
    teamno: '',
    topic: '',
    datep: '',
    period: '',
    date: '',
    schedules: [],
    schedule: null
  };
  componentDidMount = () => {
    this.getSchedule();
  };
  getSchedule = () => {
    axios
      .get('/api/schedule')
      .then((response) => {
        const data = response.data;
        this.setState({ schedules: data });
        console.log('Data has been received!!');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  };

  displaySchedule = (schedules) => {
    if (!schedules.length) return null;

    return schedules.map((schedule, index) => (
      <div key={index}>
        <div className="bg-primarys">
          <p className="bg-primarys-tag">
            Posted By : {schedule.rollno} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Posted on : <Moment format="DD/MM/YYYY">{schedule.date}</Moment>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Batch : {schedule.batch}MX
          </p>
          <h3>Course Name: {schedule.cname}</h3>
          <h4>Team Number: {schedule.teamno}</h4>
          <h4>Topic: {schedule.topic}</h4>
          <h4>
            Date To Present:{' '}
            <Moment format="DD/MM/YYYY">{schedule.datep}</Moment>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Period: {schedule.period}
          </h4>
        </div>
      </div>
    ));
  };

  render() {
    //console.log('State: ', this.state);
    return (
      <Fragment>
        <h1 className="large text-primary">Assignment Schedule</h1>
        <div className="posts">
          {this.displaySchedule(this.state.schedules)}
        </div>
      </Fragment>
    );
  }
}

export default GSchedule;
