import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = props => {
  const initialUserState = {
    name: "",
    id: ""
  };

  const [user, setUser] = useState(initialUserState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const login = () => {
    props.login(user);
    props.history.push('/');
  }

  return (
    <form className="submit-form" onSubmit={login}>
      <div>
        <div className="form-group">
          <label htmlFor="user">Username</label>
            <input 
              type="text" 
              className="form-control" 
              id="name" 
              required 
              value={user.name} 
              onChange={handleInputChange} 
              name="name" 
            />
        </div>
        <div className="form-group">
          <label htmlFor="id">ID</label>
          <input
            type="text" 
            className="form-control" 
            id="id" 
            required 
            value={user.id} 
            onChange={handleInputChange}
            name="id" 
          />
        </div>
        <button className="btn btn-success mt-3">Login</button>
      </div>
    </form>
  );
};

export default Login;