import React, { Fragment, useEffect, Component } from 'react';
import axios from 'axios';
//import PropTypes from 'prop-types';
//import { connect } from 'react-redux';
//import Spinner from '../layout/Spinner';
//import { useState, state, setState } from 'react';
//import TeamItem from './TeamItem';
//import { getTeams } from '../../actions/post';
//const Team = require('../../models/Team');

class GTeams extends React.Component {
  state = {
    rollno: '',
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
    teams: []
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
      <table class="table">
        <tbody>
          <tr>
            <div key={index}>
              <p>Posted By : {team.rollno}</p>
              <h3>Course Name: {team.cname}</h3>
              <h4>Team Number: {team.teamno}</h4>
              <p>
                {team.roll1} : {team.stud1}
              </p>
              <p>
                {team.roll2} : {team.stud2}
              </p>
              <p>
                {team.roll3} : {team.stud3}
              </p>
              <p>
                {team.roll4} : {team.stud4}
              </p>
              <p>
                {team.roll5} : {team.stud5}
              </p>
              <p>
                {team.roll6} : {team.stud6}
              </p>
            </div>
          </tr>
        </tbody>
      </table>
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
