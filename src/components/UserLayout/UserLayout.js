import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './UserLayout.css';

const selectUser = (state) => state.user;

const UserLayout = (props) => {
  const { id } = props.match.params;

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'USER_FETCH_REQUESTED', id });
  }, [id, dispatch]);

  return (
    <div className="user-page">
      <div className="user-page-head">
        <Link to="/">Go back</Link>
        <h4>User: {user.login}</h4>
      </div>
      
      <div className='user-card'>
        <img src={user.avatar_url} alt={user.login} />
        <div className='user-info'>
          <p>Company: {user.company}</p>
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
          <p>Registered: {new Date(user.created_at).toLocaleDateString()}</p>
          <p>
            Links: <br />
            <a href={user.html_url}>GitHub</a>
            <br />
            <a href={user.blog}>Blog</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
