import React from 'react';
import {User} from '../../types';

interface Props {
  user: User;
}

const UserItem: React.FC<Props> = ({user}) => {
  return (
    <div className={`card mb-3 ${user.isActive ? 'bg-success' : 'bg-danger'}`}>
      <div className="card-body text-white">
        <h5 className="card-title">Name: {user.name}</h5>
        <p className="card-text">Email: {user.email}</p>
        <p className="card-text">Role: {user.role}</p>
      </div>
    </div>
  );
};

export default UserItem;
