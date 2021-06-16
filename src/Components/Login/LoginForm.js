import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {

    const [username, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleSubmit(event){
        event.preventDefault();
        console.log(username);
        console.log(password);

        fetch('http://dogsapi.origamid.dev/json/jwt-auth/v1/token',{
            method: 'POST',
            Headers:{
                'Content-Type': 'aplication/json',
            },
            body: JSON.stringify({username, password}),
        }).then((response) =>{
            console.log(response);
            return response.json();
        }).then(json =>{
            console.log(json);
        })
    }

    return (
        <section onSubmit={handleSubmit}>
            <h1> Login </h1>
            <form action=''>
                <input type="text" onChange={ ({target}) => setUserName(target.value) } value={username}/>
                <input type="password" onChange={ ({target}) => setPassword(target.value) } value={password}/>
            
                <button>Entrar</button>
            </form>

            <Link to="/login/criar">Cadastro</Link>
        </section>
    )
}

export default LoginForm
