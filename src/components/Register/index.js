import React, {useState, useContext} from 'react';
import {createRoutesFromChildren, useNavigate} from 'react-router-dom';
import API from '../../API';

//Components
import Button from '../Button';

//Styles
import {Wrapper} from './Register.styles';

//Context
import { Context } from '../../context';

const Register = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const [_user, setUser] = useContext(Context);
    const navigate = useNavigate();

    const handleInput = e => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;

        if (name === 'username') setUserName(value);
        if (name === 'password') setPassword(value);
    };
    const handleSubmit = async () => {
        setError(false);
        try {
            const requestToken = await API.register(
                username,
                password
            );
            // const sessionId = await API.authenticate(
            //     requestToken,
            //     username,
            //     password
            // );
            setUser({ token: requestToken, username});
            navigate('/')

        } catch(error){
            setError(true);
        }

    };
    return (
        <Wrapper>
            {error && <div className='error'> There was an error!</div>}
            <label>Username</label>
            <input 
                type='text'
                value={username}
                name='username'
                onChange={handleInput}
            />
            <label>Password</label>

            <input 
                type='password'
                value={password}
                name='password'
                onChange={handleInput}
            />
            <Button text='Register' callback={handleSubmit}/>

        </Wrapper>
    )
}

export default Register;