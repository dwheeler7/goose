import React from 'react';
import User from '../User/User';

const UserList = ({ users, onUserClick }) => {
  const handleUserClick = (user) => {
    onUserClick(user);
  };

  return (
    <div>
      {users.map((user, index) => {
        const key = user._id || user.username || index; // Use id, username, or index as the key
        return (
          <div key={key} onClick={() => handleUserClick(user)}>
            <User user={user} userType={user.userType} /> 
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
