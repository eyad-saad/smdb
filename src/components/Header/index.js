import React, {useContext} from 'react';
import {Link} from 'react-router-dom'

import SMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg, Button } from './header.styles';

import {Context} from '../../context';
import {useNavigate} from 'react-router-dom';

const Header = () => {
    const [user, setUser] = useContext(Context);
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Content>
                <Link to='/'>
                    {/* <LogoImg src={SMDBLogo} alt='smdb-logo'/> */}
                </Link>
                {user ? (
                    <>
                    <a text='Home' onClick={() => {navigate('/')}}> Home </a>
                    <span>&nbsp;|&nbsp;</span>
                    <a className='logout-button' onClick={() => {setUser(null)}}>Logout</a>
                    <span>&nbsp;|&nbsp;</span>
                    <span>&nbsp;</span>
                    <span className="logged-in"> Logged in as: {user.username}</span>
                    
                    </>
                ):(
                    <>
                    <a text='Home' onClick={() => {navigate('/')}}> Home </a>
                    <span>&nbsp;|&nbsp;</span>
                    <a text='Login' onClick={() => {navigate('login')}}> Login </a>
                    <span>&nbsp;|&nbsp;</span>
                    <a text='Register' onClick={() => {navigate('register')}}> Register</a>

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