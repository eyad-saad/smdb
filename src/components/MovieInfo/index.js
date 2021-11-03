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
import {Wrapper, Content, Text} from './MovieInfo.styles'

// external
import ReactStars from "react-rating-stars-component";

import API from '../../API';
import {useNavigate} from 'react-router-dom';


// const ratingChanged = (newRating) => {
//   };
const MovieInfo = ({movie}) =>{
    const [user, setUser] = useContext(Context);
    const navigate = useNavigate();

    
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
                <h1>{movie.title}</h1>
                <h3>Plot</h3>
                <p>{movie.overview}</p>
                <div className = "rating-directors">
                    <div>
                        <h3>Average Rating</h3>
                        <div className="score">{movie.average_rating? movie.average_rating: 0}</div>
                    </div>
                    <div className="director">
                        <h3>DIRECTOR{movie.directors.length>1? 'S': ''}</h3>
                        {movie.directors.map(director => (
                            <p key={director.id}>{director.name}</p>
                            ))}
                    </div>
                    <div className="director">
                        <h3>GENRE{movie.genres.length>1? 'S': ''}</h3>
                        {movie.genres.map(genre => (
                            <p key={genre.id}>{genre.name}</p>
                            ))}
                    </div>
                    <div className="director">
                        <h3>price</h3>
                        {movie.price + ' sp'}
                    </div>
                </div>
                {user
                ?<>
                <h3>Rate:</h3>
                <ReactStars
                    count={5}
                    onChange={(newRating) => {API.rateMovie(user.token, movie.id, newRating)}}
                    size={24}
                    activeColor="#ffd700"
                />
                <button onClick={() => {navigate(`/${movie.id}/buy`)}} >Download</button>
                </>
                : null
            }

            </Text>
        </Content>
    </Wrapper>
    )
}


export default MovieInfo