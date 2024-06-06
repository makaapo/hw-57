import React, {useState} from 'react';
import {User} from '../../types';

interface Props {
  onAddUser: (user: User) => void;
}

const InitialState: User = {
  id: '',
  name: '',
  email: '',
  isActive: false,
  role: '',
};
const UserForm: React.FC<Props> = ({onAddUser}) => {
  const [user, setUser] = useState(InitialState);

  const onFormSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newUser: User = {
      ...user,
      id: Math.random().toString()
    };

    onAddUser(newUser);

    setUser(InitialState);
  };


  const changeUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(prev => ({
      ...prev,
      [event.target.name]: event.target.value}));
  };


  const changeRole = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newRole = event.target.value;
    if (newRole === 'user' || newRole === 'editor' || newRole === 'administrator') {
      setUser(prev => ({
        ...prev,
        role: newRole
      }));
    }
  };

  const changeIsActive = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(prev => ({
      ...prev,
      [event.target.name]: event.target.checked}));
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4>Create User</h4>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control mb-3"
          onChange={changeUser}
          value={user.name}
          required
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          value={user.email}
          onChange={changeUser}
          required
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="role">Role:</label>
        <select
          name="role"
          id="role"
          className="form-control"
          value={user.role}
          onChange={changeRole}
          required
        >
          <option value="" disabled>Choose a role...</option>
          <option value="user">User</option>
          <option value="editor">Editor</option>
          <option value="administrator">Administrator</option>
        </select>
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          name="isActive"
          id="isActive"
          className="form-check-input"
          checked={user.isActive}
          onChange={changeIsActive}
        />
        <label htmlFor="isActive" className="form-check-label">Active</label>
      </div>
      <button type="submit" className="btn btn-primary mt-2">Create</button>
    </form>
  );
};

export default UserForm;