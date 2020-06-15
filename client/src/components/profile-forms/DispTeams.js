import React, { Fragment, useEffect, Component } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import { setState } from 'react';
//import PropTypes from 'prop-types';
//import { connect } from 'react-redux';
//import Spinner from '../layout/Spinner';
//import { useState, state, setState } from 'react';
//import TeamItem from './TeamItem';
//import { getTeams } from '../../actions/post';
//const Team = require('../../models/Team');
import '../../App.css';

class GTeams extends React.Component {
  state = {
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
    roll6: '',
    date: '',
    teams: [],
    team: null
  };
  componentDidMount = () => {
    this.getT();
  };
  getT = () => {
    axios
      .get('/api/team')
      .then((response) => {
        const data = response.data;
        this.setState({ teams: data });
        console.log('Data has been received!!');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  };

  displayTeams = (teams) => {
    if (!teams.length) return null;

    return teams.map((team, index) => (
      <div key={index}>
        <div className="bg-primarys">
          <p className="bg-primarys-tag">
            Posted By : {team.rollno} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Posted on <Moment format="DD/MM/YYYY">{team.date}</Moment>
          </p>
          <h3>Course Name: {team.cname}</h3>
          <h4>Team Number: {team.teamno}</h4>
          <p>
            {team.roll1} &nbsp;&nbsp;&nbsp; {team.stud1}
            <br />
            {team.roll2} &nbsp;&nbsp;&nbsp; {team.stud2}
            <br />
            {team.roll3} &nbsp;&nbsp;&nbsp; {team.stud3}
            <br />
            {team.roll4} &nbsp;&nbsp;&nbsp; {team.stud4}
            <br />
            {team.roll5} &nbsp;&nbsp;&nbsp; {team.stud5}
            <br />
            {team.roll6} &nbsp;&nbsp;&nbsp; {team.stud6}
          </p>
        </div>
      </div>
    ));
  };

  render() {
    //console.log('State: ', this.state);
    return (
      <Fragment>
        <h1 className="large text-primary">Teams</h1>
        <div className="posts">{this.displayTeams(this.state.teams)}</div>
      </Fragment>
    );
  }
}

export default GTeams;
