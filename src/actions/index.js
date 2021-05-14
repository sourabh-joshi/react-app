import jsonPlaceholder from '../api/jsonplaceholder';

export const fetchPostsAndUsers = () => {
  return async (dispatch, getState) => {
    await dispatch(fetchPosts());
    const userIds = getState().posts.map((post) => post.userId);
    const uniqueUserIds = [...new Set(userIds)];
    uniqueUserIds.forEach((id) => dispatch(fetchUser(id)));
  };
};

export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({
      type: 'FETCH_POSTS',
      payload: response.data
    });
  };
};

export const fetchUser = (id) => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({
      type: 'FETCH_USER',
      payload: response.data
    });
  };
};

// One way to make only one call per userid but in the application we only make one call per userid even if the user details changes
// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({
//     type: 'FETCH_USER',
//     payload: response.data
//   });
// });

// export const fetchPosts = async () => {
//   // Bad Approach
//   const response = await jsonPlaceholder.get('/posts');
//   return {
//     type: 'FETCH_POSTS',
//     payload: response
//   };
// };

//Action Creators must return action objects
//Actions must have a type property
//Actions can optionally have a payload

//A middleware relaxes above rules a bit
