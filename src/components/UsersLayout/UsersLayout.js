import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserListItem from './components/UserListItem/UserListItem';
import Filter from './components/Filter/Filter';
import './UsersLayout.css'

const selectUsers = (state) => state.users;
const selectCurrentSince = (state) => state.currentSince;
const selectQuantity = (state) => state.quantity;

const UsersLayout = () => {
  const users = useSelector(selectUsers);
  const currentSince = useSelector(selectCurrentSince);
  const quantity = useSelector(selectQuantity);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'USERS_FETCH_REQUESTED',
      payload: { quantity, currentSince },
    });
  }, [users.length, dispatch, quantity, currentSince]);

  return (
    <div className='list-wrp'>
      <div className='list-title'>
        <p>Users</p>
        <Filter />
      </div>
      {users.length ? (
        <ul className='list'>
          {users.map((user) => (
            <UserListItem user={user} key={user.id} />
          ))}
        </ul>
      ) : (
        'Loading...'
      )}
    </div>
  );
};

export default UsersLayout;
