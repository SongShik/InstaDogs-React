import React from 'react'
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_LOST } from '../../Api';
import Error from '../Helper/Error';

const LoginPasswordLost = () => {

    const login = useForm();
    const {data, loading, error, request} = useFetch();

    async function handleSubmit(event){
        event.preventDefault();
        if(login.validate()){
        const {url , options} = PASSWORD_LOST({login: login.value, url: window.location.href.replace('perdeu' , 'resetar') })
        await request(url , options)
        }
    }

    return (
        <section>
            <h1 className="title">Perdeu a senha?</h1>
            {data ? <p>{data}</p> : (
            <form onSubmit={handleSubmit}>
                <Input label="Email ou Usuário" type="text"  name="email" {...login}/>
                {loading ? <Button disabled> enviando... </Button> : <Button> Enviar Email </Button>}
                <Error error={error} />
            </form> )}
        </section>
    )
}

export default LoginPasswordLost;
