import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

const PostList = ({ posts, fetchPostsAndUsers }) => {
  useEffect(() => {
    fetchPostsAndUsers();
  }, []);

  const renderedList = () => {
    return posts.map((post) => {
      return (
        <div key={post.id} className="item">
          <i className="large middle aligned user icon" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  };

  return <div className="ui relaxed divided list">{renderedList()}</div>;
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
