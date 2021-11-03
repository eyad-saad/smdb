import React, {useContext} from 'react';
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

// const ratingChanged = (newRating) => {
//   };
const BuyMovie = () =>{
    const [user, setUser] = useContext(Context);

    const {movieId} = useParams();
    const { state: movie, loading, error} = useMovieFetch(movieId);

    
    return (
        <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Thumb
                image={
                    movie.poster_path 
                    ?`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                    : NoImage
                }
                clickable={false}
            />
            <Text>
            
            </Text>
        </Content>
    </Wrapper>
    )
}


export default BuyMovie