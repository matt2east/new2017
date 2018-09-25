import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SingerHeader from './SingerHeader';
import SingerAbout from './SingerAbout';
// import SingerCreds from './SingerCreds';
// import SingerGithub from './SingerGithub';
import Spinner from '../common/Spinner';
import { getSingerByHandle } from '../../actions/singerActions';

class Singer extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getSingerByHandle(this.props.match.params.handle);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.singer.singer === null && this.props.singer.loading2) {
      this.props.history.push('/not-found');
    }
  }

  render() {
    const { singer, loading2 } = this.props.singer;
    let singerContent;

    if (singer === null || loading2) {
      singerContent = <Spinner />;
    } else {
      singerContent = (
        <div>
          <div className="row">
            <div className="col-md-6">
              <Link to="/singers" className="btn btn-light mb-3 float-left">
                Back To singers
              </Link>
            </div>
            <div className="col-md-6" />
          </div>
          <SingerHeader singer={singer} />
          <SingerAbout singer={singer} />
          {/* <singerCreds
            education={singer.education}
            experience={singer.experience}
          /> */}
          {/* {singer.githubusername ? (
            <singerGithub username={singer.githubusername} />
          ) : null} */}
        </div>
      );
    }

    return (
      <div className="singer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">{singerContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

Singer.propTypes = {
  getSingerByHandle: PropTypes.func.isRequired,
  singer: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  singer: state.singer
});

export default connect(mapStateToProps, { getSingerByHandle })(Singer);
