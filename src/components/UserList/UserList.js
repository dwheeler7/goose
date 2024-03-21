import React, { useState, useEffect } from 'react';
import User from '../User/User';

const UserList = ({ users, onUserClick }) => {
  const handleUserClick = (user) => {
    onUserClick(user);
  };

  return (
    <div>
      <h2>Found Users</h2>
      {users.map((user, index) => {
        if (!user.username) {
          console.log('User with undefined or null username:', user);
        }
        return (
          <div key={user.username ? user.username + index : index} onClick={() => handleUserClick(user)}>
            <User user={user} />
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
