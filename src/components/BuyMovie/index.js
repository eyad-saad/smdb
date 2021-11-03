import React, {useState, useContext} from 'react';
import { render } from "react-dom";
import {Context} from '../../context';

// Components
import Thumb from '../Thumb';
import Button from '../Button';

// Config
import {IMAGE_BASE_URL, POSTER_SIZE} from '../../config';

// Image'
import NoImage from '../../images/no_image.jpg';

//styles
import {Wrapper, Content, Text} from './BuyMovie.styles'

// external
import ReactStars from "react-rating-stars-component";

import API from '../../API';
import {useMovieFetch} from '../../hooks/useMovieFetch';
import {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

// const ratingChanged = (newRating) => {
//   };
const BuyMovie = () =>{
    const [user, setUser] = useContext(Context);
    const navigate = useNavigate();

    const {movieId} = useParams();
    const { state: movie, loading, error} = useMovieFetch(movieId);
    const [email, setEmail] = useState('');
    const [creditCard, setCreditCard] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [buyError, setBuyError] = useState(false);
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);

    const handleInput = e => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;

        if (name === 'firstname') setFirstName(value);
        if (name === 'lastname') setLastName(value);
        if (name === 'email') setEmail(value);
        if (name === 'credit-card') setCreditCard(value);
    };
    const handleSubmit = async () => {
        setBuyError(false);
        try {
            const response = await API.buyMovie(user.token, movieId, firstName, lastName, email, creditCard);
            console.log(response.detail)
            if (response.detail == 'success'){
                setMessage('succes')
                setSuccess(true)
            }
            
            if (response.detail == "already bought"){
                setBuyError(true);
                setMessage('You have already bought this movie')
            }
            
            else{
                setMessage('invalid data')
            }
        } catch(error){
            setMessage('there was an error')
            setBuyError(true);
        }

    };
    return (
        <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Thumb
                image={
                    movie.image 
                    ?`${IMAGE_BASE_URL}/${movie.image}`
                    : NoImage
                }
                clickable={false}
            />
            <Text>
            {!success? <>
            <label>First Name</label>
            <input 
                type='text'
                value={firstName}
                name='firstname'
                onChange={handleInput}
            />
            <label>Last Name</label>
            <input 
                type='text'
                value={lastName}
                name='lastname'
                onChange={handleInput}
            />
            <label>Email</label>
            <input 
                type='text'
                value={email}
                name='email'
                onChange={handleInput}
            />
            <label>Credit Card Number</label>
            <input onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }}
                type='text'
                value={creditCard}
                name='credit-card'
                onChange={handleInput}
            />
            <Button text='Buy Movie' callback={handleSubmit}/>
            {message && <div className='error'> {message}</div>}
            </>: <h3>movie purchased successfully</h3>
            
            }
            </Text>

        </Content>
    </Wrapper>
    )
}


export default BuyMovie