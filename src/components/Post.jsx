import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ title, content }) => (
  <>
    <h3>{title}</h3>
    <hr />
    <p>{content}</p>
  </>
);

Post.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

Post.defaultProps = {
  title: '',
  content: '',
};

export default Post;
