import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
// import ProfileItem from './ProfileItem';
// import { getProfiles } from '../../actions/profileActions';

//singers
import SingerItem from './SingerItem';
import { getSingers } from '../../actions/singerActions';

class Singers extends Component {
  componentDidMount() {
    this.props.getSingers();
  }

  render() {
    const { singers, loading } = this.props.singer;
    let singerItems;

    if (singers === null || loading) {
      singerItems = <Spinner />;
    } else {
      if (singers.length > 0) {
        singerItems = singers.map(singer => (
          <SingerItem key={singer._id} singer={singer} />
        ));
      } else {
        singerItems = <h4>No singer profiles found...</h4>;
      }
    }

    return (
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Singer Profiles</h1>
              <p className="lead text-center">
                Browse and connect with singers
              </p>
              {singerItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Singers.propTypes = {
  getSingers: PropTypes.func.isRequired,
  singer: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.singer
});

export default connect(mapStateToProps, { getSingers })(Singers);
