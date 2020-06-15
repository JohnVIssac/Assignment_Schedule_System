import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import UserhItem from './UserhItem';
import { getUserh } from '../../actions/auth';

const Userhs = ({ getUserh, userh: { userhs, loading } }) => {
  useEffect(() => {
    getUserh();
  }, [getUserh]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className="large text-primary">Assignments</h1>
          <div className="profiles">
            {userhs.length > 0 ? (
              userhs.map((userh) => <UserhItem key={userh._id} userh={userh} />)
            ) : (
              <h4>No Assignment Added...</h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Userhs.propTypes = {
  getUserh: PropTypes.func.isRequired,
  userh: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  userh: state.userh
});

export default connect(mapStateToProps, { getUserh })(Userhs);
