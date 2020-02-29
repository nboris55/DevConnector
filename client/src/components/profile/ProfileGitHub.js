import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getGitHubRepos } from '../../actions/profile';

const ProfileGitHub = ({ username, getGitHubRepos, repos }) => {
  useEffect(() => {
    getGitHubRepos(username);
  }, [getGitHubRepos, username]);

  //GIT HUB NO WORK
  //CAN ADD MORE GITHUB INFO AFTER WORK
  return (
    <div className='profile-github'>
      <h2 className='text-primary my-1'>Github Repos</h2>
      {repos === null ? (
        <Spinner />
      ) : (
        <div key={repos._id} className='repo bg-white p-1 my-1'>
          <div>
            <h4>
              <a href={repos.html.url} target='_blank' rel='noopener noreferrer'>
                {repos.name}
              </a>
            </h4>
          </div>
        </div>
      )}
    </div>
  );
};

ProfileGitHub.propTypes = {
  getGitHubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  repos: state.profile.repos
});

export default connect(mapStateToProps, { getGitHubRepos })(ProfileGitHub);
