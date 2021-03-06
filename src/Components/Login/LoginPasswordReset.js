import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_RESET } from '../../Api';
import Error from '../Helper/Error';
import { useNavigate } from 'react-router-dom';

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');
  const password = useForm();
  const { error, loading, request } = useFetch();
  const navegate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

    async function handleSubmit(event){
      event.preventDefault();
      if(login.validate()){
      const {url , options} = PASSWORD_RESET({login: login.value, key, password: password.value })
      const {response} = await request(url , options)
      if(response.ok) navegate('/login');
      }
  }


  return <div>
    <h1 className="title">Reset a Senha</h1>
    <form  onSubmit={handleSubmit}>
      <Input label="Nova Senha" type="password" name="password" {...password}/>
      {loading ? <Button disabled> Ressetando... </Button> : <Button> Ressetar</Button>}
      <Error error={error} />
    </form>
  </div>;
};

export default LoginPasswordReset;
