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

class GAssign extends React.Component {
  state = {
    cname: '',
    batch: '',
    studno: '',
    date: '',
    assigns: [],
    assign: null
  };
  componentDidMount = () => {
    this.getAssign();
  };
  getAssign = () => {
    axios
      .get('/api/assign')
      .then((response) => {
        const data = response.data;
        this.setState({ assigns: data });
        console.log('Data has been received!!');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  };

  displayAssign = (assigns) => {
    if (!assigns.length) return null;

    return assigns.map((assign, index) => (
      <div key={index}>
        <div className="bg-primarys">
          <p className="bg-primarys-tag">
            Posted By : {assign.rollno} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Posted on <Moment format="DD/MM/YYYY">{assign.date}</Moment>
          </p>
          <h3>Course Name: {assign.cname}</h3>
          <h4>Batch: {assign.batch}</h4>
          <h4>Number of Students Per Team: {assign.studno}</h4>
        </div>
      </div>
    ));
  };

  render() {
    //console.log('State: ', this.state);
    return (
      <Fragment>
        <h1 className="large text-primary">Assignments</h1>
        <div className="posts">{this.displayAssign(this.state.assigns)}</div>
      </Fragment>
    );
  }
}

export default GAssign;
