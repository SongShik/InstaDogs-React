import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPassordLost from './LoginPassordLost';
import LoginPassordReset from './LoginPassordReset';
import { UserContext } from '../../UserContext';
import style from './Login.module.css';

const Login = () => {
  const {login} = React.useContext(UserContext);

  if(login === true) return <Navigate to='/conta' />
  return <section className={style.login}>
    <div className={style.forms}>
    <Routes>
      <Route path="/" element={ <LoginForm />} />
      <Route path="/criar" element={ <LoginCreate />} />
      <Route path="/perdeu" element={ <LoginPassordLost />} />
      <Route path="/reset" element={ <LoginPassordReset />} />
    </Routes>
    </div>
  </section>;
};

export default Login;
