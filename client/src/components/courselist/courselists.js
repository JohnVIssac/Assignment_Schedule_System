import React from 'react'
import PropTypes from 'prop-types'

const courselists = props => {
    return (
        <div>
            <h2>STUDENTS CAN SEE LIST OF AVILABLE NPETL COURSES HERE..  </h2>

<div class="container">
  <div class="row">
    <div class="col-xs-12">
      <div class="table-responsive">
        <table summary="This table shows how to create responsive tables using Bootstrap's default functionality" class="table table-bordered table-hover">
          <caption class="text-center"><a href="https://getbootstrap.com/css/#tables-responsive" target="_blank"></a></caption>
          <thead>
            <tr>
              <th>COURSES-ID</th>
              <th>DISCIPLINE</th>
              <th>COURSE NAME</th>
              <th>WEEKS</th>
              <th>CREDITS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>noc20-cs36</td>
              <td>Computer Science and Engineering</td>
              <td>The Joy of Computing using Python</td>
              <td>12</td>
              <td>3</td>
            </tr>
            <tr>
              <td>noc20-cs21</td>
              <td>Computer Science and Engineering</td>
              <td>Cryptography and Network Security</td>
              <td>12</td>
              <td>3</td>
            </tr>
            <tr>
              <td>noc20-cs32</td>
              <td>Computer Science and Engineering</td>
              <td>Social Networking</td>
              <td>12</td>
              <td>3</td>
            </tr>
            <tr>
              <td>noc20-cs19</td>
              <td>Computer Science and Engineering</td>
              <td>Software Testing</td>
              <td>12</td>
              <td>3</td>
            </tr>
            <tr>
              <td>noc20-cs50</td>
              <td>Computer Science and Engineering</td>
              <td>Deep Learning - Part 1(IIT Ropar)</td>
              <td>12</td>
              <td>3</td>
            </tr>
            <tr>
              <td>noc20-cs44</td>
              <td>Computer Science and Engineering</td>
              <td>Practical Machine Learning with Tensorflow</td>
              <td>12</td>
              <td>3</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              {/*<td colspan="5" class="text-center"><a href="http://www.infoplease.com/ipa/A0855611.html" target="_blank">infoplease</a> and <a href="http://www.worldometers.info/world-population/population-by-country/" target="_blank">worldometers</a>.</td>*/}
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</div>

{/*<p class="p"> <a href="http://www.sitepoint.com/responsive-data-tables-comprehensive-list-solutions" target="_blank">See article</a>.</p>*/}

        </div>
    )
}

courselists.propTypes = {

}

export default courselists;
