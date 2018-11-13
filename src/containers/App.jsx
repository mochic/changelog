import React from 'react';
import Post from '../components/Post';

import './styles/App.css';

// this is fine for now...we need to be able to blog about making the blog...
const CONTENT_LIST_011 = [
  'update temporary blogging solution to better blog about making the blog...',
];

const POSTS = [
  { title: '0.1.0 (2018-11-13T20:58:39+0000)', content: 'bootstrapped project...' },
  { title: '0.1.1', contentList: CONTENT_LIST_011 },
].reverse(); // changelog entries are typically ordered in descending order

export default () => (
  <div className="App">
    <h1>changelog</h1>
    <hr />
    {POSTS.map(post => (
      <Post {...post} />
    ))}
  </div>
);
