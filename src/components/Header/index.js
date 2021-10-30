import React, {useContext} from 'react';
import {Link} from 'react-router-dom'

import SMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg, Button } from './header.styles';

import {Context} from '../../context';
import {useNavigate} from 'react-router-dom';

const Header = () => {
    const [user] = useContext(Context);
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Content>
                <Link to='/'>
                    {/* <LogoImg src={SMDBLogo} alt='smdb-logo'/> */}
                </Link>
                {user ? (
                    <span> Logged in as: {user.username}</span>
                ):(
                    <>
                    <button text='Home' onClick={() => {navigate('/')}}> Home </button>
                    <button text='Login' onClick={() => {navigate('login')}}> Login </button>
                    <button text='Register' onClick={() => {navigate('register')}}> Register</button>

                    {/* <Link to='/login'>
                        <span>Log in</span>
                    </Link>
                    <span>  </span>
                    <Link to='/register'>
                        <span>Register</span>
                    </Link> */}
                    </>
                )}
                
                {/* <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo'/> */}
            </Content>
        </Wrapper>
        )
}

export default Header;