import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = props => {
  const [credentials, setCredentials] = useState({
      username: '',
      password: ''
  });

  const handleChange = evt => {
      setCredentials({ ...credentials, [evt.target.name]: evt.target.value })
  };

  const login = evt => {
      evt.preventDefault();
      axiosWithAuth()
        .post('/login', credentials)
        .then(res => {
          localStorage.setItem('token', res.data.payload);
          props.history.push('/bubbles');
        })
        .catch(err => console.log(err));
  };

  return (
      <div className="login-page">
          <h1>Bubbles: Log in</h1>
          <Form className="react-bootstrap-form" onSubmit={login}>
              <Form.Group controlId="formBasicUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control 
                      type="text" 
                      name="username"
                      value={credentials.username}
                      onChange={evt => handleChange(evt)}
                  />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                      type="password"
                      name="password"
                      value={credentials.password}
                      onChange={evt => handleChange(evt)}
                  />
              </Form.Group>
              <Button variant="primary" type="submit">
                  Submit
              </Button>
          </Form>
      </div>
  )
}

export default Login