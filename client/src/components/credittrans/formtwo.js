import React from 'react';
import PropTypes from 'prop-types';

/* Student Details for Course Registration */

const formtwo = (props) => {
  return (
    <div>
      <section class="container">
        <h1 class="large text-primary">Credit Transfer Registration Form</h1>
        <p class="lead">
          <i class="fas fa-user"></i> Register for the completion of online
          course to do credit transfer
        </p>

        <form class="form">
          <div class="form-group">
            <small class="form-text">Enter First Name</small>
            <input type="text" placeholder="First Name" name="fname" />
          </div>
          <div class="form-group">
            <small class="form-text">Enter Last Name</small>
            <input type="text" placeholder="Last Name" name="lname" />
          </div>
          <div class="form-group">
            <small class="form-text">Enter Roll No</small>
            <input
              type="text"
              placeholder="RollNo"
              name="rollno"
              minlength="5"
              maxlength="10"
            />
          </div>
          <div class="form-group">
            <small class="form-text"> Enter Department</small>
            <select name="dept">
              <option value="BSc"> B Sc </option>
              <option value="MCA"> MCA </option>
              <option value="MSc"> M Sc </option>
              <option value="Other"> Other </option>
            </select>
          </div>
          <div class="form-group">
            <small class="form-text">Enter Branch</small>
            <input type="text" placeholder="Branch" name="branch" />
          </div>
          <div class="form-group">
            <small class="form-text">Enter Course ID</small>
            <input type="text" placeholder="Course ID" name="course_id" />
          </div>
          <div class="form-group">
            <small class="form-text"> Enter Course Title</small>
            <select name="course_title">
              <option value="Cryptography"> Cryptography </option>
              <option value="EthicalHacking">Ethical Hacking</option>
              <option value="NetworkSecurity">Network Security</option>
              <option value="Other"> Other </option>
            </select>
          </div>
          <div class="form-group">
            <small class="form-text"> Enter No. of Hours of Study</small>
            <select name="no_of_hrs">
              <option value="4"> 4 Week </option>
              <option value="8"> 8 Week </option>
              <option value="12"> 12 Week </option>
              <option value="Other"> Other </option>
            </select>
          </div>
          <div class="form-group">
            <small class="form-text">Enter Marks Secured</small>
            <input
              type="number"
              min="0"
              max="100"
              placeholder="Marks Secured"
              name="marks"
            />
          </div>

          <input type="submit" class="btn btn-primary my-1" />
          <a class="btn btn-primary my-1" href="dashboard.html">
            Go Back
          </a>
        </form>
      </section>
    </div>
  );
};

formtwo.propTypes = {};

export default formtwo;
