import React from 'react';
import {User} from '../../types';
import UserItem from '../UserItem/UserItem';

interface Props {
  users: User[];
}

const Users: React.FC<Props> = ({users}) => {
  return (
    <div>
      <h4>Users</h4>
      {users.map((user) => (
        <UserItem key={user.id} user={user}/>
      ))}
    </div>
  );
};

export default Users;
