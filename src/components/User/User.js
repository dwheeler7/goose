import React from 'react';
import styles from './User.module.scss'

const User = ({ user, userType }) => {
  return (
    <div>
       <h3 className={`${styles.UserName} ${styles.Common}`}>
        {user.name} 
        <span className={`${styles[userType === 'developer' ? 'Developer' : 'Employer']} ${styles.Role}`}>
          ({user.userType})
        </span>
      </h3>
    </div>
  );
};

export default User;
