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
    const [email, setEmail] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [martialStatus, setMaritalStatus] = useState('single');
    const [error, setError] = useState(false);

    const [_user, setUser] = useContext(Context);
    const navigate = useNavigate();

    const handleInput = e => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;

        if (name === 'username') setUserName(value);
        if (name === 'password') setPassword(value);
        if (name === 'email') setEmail(value);
        if (name === 'birth-date') setBirthDate(value);

    };

    const handleChange = (event) =>{
        setMaritalStatus(event.target.value)
    }

    const handleSubmit = async () => {
        setError(false);
        try {
            const requestToken = await API.register(
                username,
                email,
                password,
                birthDate,
                martialStatus,
            );

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

            <label>Email</label>
            <input 
                type='text'
                value={email}
                name='email'
                onChange={handleInput}
            />

            <label>Password</label>

            <input 
                type='password'
                value={password}
                name='password'
                onChange={handleInput}
            />
            <label>Date of birth</label>

            <input 
                type='Date'
                value={birthDate}
                name='birth-date'
                onChange={handleInput}
            />
            <label>marital status</label>

            <select onChange={(value) => {handleChange(value)}} >
                <option value="single">single</option>
                <option value="married">married</option>
            </select>

            <Button text='Register' callback={handleSubmit}/>

        </Wrapper>
    )
}

export default Register;