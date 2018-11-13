import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ title, content, contentList }) => (
  <>
    <h3>{title}</h3>
    <hr />
    {contentList.length > 0 ? (
      <ul>
        {contentList.map(content => (
          <li>{content}</li>
        ))}
      </ul>
    ) : (
      <p>{content}</p>
    )}
  </>
);

Post.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  contentList: PropTypes.arrayOf(PropTypes.string),
};

Post.defaultProps = {
  title: '',
  content: '',
  contentList: [],
};

export default Post;
