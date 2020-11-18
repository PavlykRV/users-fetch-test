import React from 'react';
import { Link } from 'react-router-dom';

const UserListItem = (props) => {
  const { user } = props;

  return (
    <li key={user.id}>
      <Link to={`/${user.login}`} className='list-item'>
        <div className='list-item-descr'>
          <p>User name: {user.login}</p>
          <p>User profile: {user.html_url}</p>
        </div>
        <img src={user.avatar_url} alt={user.login} />
      </Link>
    </li>
  );
};

export default UserListItem;
