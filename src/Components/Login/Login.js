import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPassordLost from './LoginPassordLost';
import LoginPassordReset from './LoginPassordReset';

const Login = () => {
  return <div>
    <Routes>
      <Route path="/" element={ <LoginForm />} />
      <Route path="/" element={ <LoginCreate />} />
      <Route path="/" element={ <LoginPassordLost />} />
      <Route path="/" element={ <LoginPassordReset />} />
    </Routes>
  </div>;
};

export default Login;
