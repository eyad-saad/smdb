import React from 'react';
import { render } from "react-dom";

// Components
import Thumb from '../Thumb';

// Config
import {IMAGE_BASE_URL, POSTER_SIZE} from '../../config';

// Image'
import NoImage from '../../images/no_image.jpg';

//styles
import {Wrapper, Content, Text} from './MovieInfo.styles'

// external
import ReactStars from "react-rating-stars-component";


const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  
const MovieInfo = ({ movie}) => (
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
                <h1>{movie.title}</h1>
                <h3>Plot</h3>
                <p>{movie.overview}</p>
                <div className = "rating-directors">
                    <div>
                        <h3>Average Rating</h3>
                        <div className="score">{movie.vote_average}</div>
                    </div>
                    <div className="director">
                        <h3>DIRECTOR{movie.directors.length>1? 'S': ''}</h3>
                        {movie.directors.map(director => (
                            <p key={director.credit_id}>{director.name}</p>
                            ))}
                    </div>
                </div>
                <h3>Rate:</h3>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                />
            </Text>
        </Content>
    </Wrapper>
)

export default MovieInfo