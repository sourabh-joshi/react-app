import React from 'react';
import PostList from './PostList';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';

const store = createStore(reducers, applyMiddleware(thunk));

const BlogApp = () => {
  return (
    <Provider store={store}>
      <PostList />
    </Provider>
  );
};

export default BlogApp;
