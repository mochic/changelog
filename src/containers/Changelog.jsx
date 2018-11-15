import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { withCache } from './withCache';

const Changelog = ({ cache, changelogResource }) => (
  <>
    <ReactMarkdown source={changelogResource.read(cache)} />
  </>
);

// require injected props, injected functions === easier to debug?
Changelog.propTypes = {
  cache: PropTypes.object.isRequired,
  changelogResource: PropTypes.object.isRequired,
};

export default withCache(Changelog);
