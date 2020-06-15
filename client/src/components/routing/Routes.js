import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Loginm from '../auth/Loginm';
import Loginh from '../auth/Loginh';
import Loginp from '../auth/Loginp';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import CreateProfile from '../profile-forms/CreateProfile';
import EditProfile from '../profile-forms/EditProfile';
import AddExperience from '../profile-forms/AddExperience';
import AddEducation from '../profile-forms/AddEducation';
import Profiles from '../profiles/Profiles';
import Profile from '../profile/Profile';
import Posts from '../posts/Posts';
import Post from '../post/Post';
import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';
import Forms from '../credittrans/formone';
import COURSELIST from '../courselist/courselists';
import AddAssign from '../profile-forms/AddAssign';
import ScheduleAssign from '../profile-forms/ScheduleAssign';
import UserhDisp from '../profile-forms/UserhDisp';
import AddTeam from '../profile-forms/AddTeam';
import DispTeams from '../profile-forms/DispTeams';
import GTeams from '../../DispTeams';
import GAssign from '../profile-forms/DispAssign';
import GSchedule from '../profile-forms/DispSchedule';

const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/loginm" component={Loginm} />
        <Route exact path="/loginh" component={Loginh} />
        <Route exact path="/loginp" component={Loginp} />
        <Route exact path="/profiles" component={Profiles} />
        <Route exact path="/profile/:id" component={Profile} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/create-profile" component={CreateProfile} />
        <PrivateRoute exact path="/add-assign" component={AddAssign} />
        <PrivateRoute exact path="/add-team" component={AddTeam} />
        <PrivateRoute
          exact
          path="/schedule-assign"
          component={ScheduleAssign}
        />
        <PrivateRoute exact path="/userh-disp" component={UserhDisp} />
        <PrivateRoute exact path="/edit-profile" component={EditProfile} />
        <PrivateRoute exact path="/add-experience" component={AddExperience} />
        <PrivateRoute exact path="/add-education" component={AddEducation} />
        <PrivateRoute exact path="/posts" component={Posts} />
        <PrivateRoute exact path="/posts/:id" component={Post} />
        <PrivateRoute exact path="/formonee" component={Forms} />
        <PrivateRoute exact path="/courselistss" component={COURSELIST} />
        <PrivateRoute exact path="/disp-teams" component={DispTeams} />
        <Route path="/teams" component={GTeams} />
        <Route path="/disp-assigns" component={GAssign} />
        <Route path="/disp-schedule" component={GSchedule} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
