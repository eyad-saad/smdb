import React, {useState, useEffect} from 'react';
import HeroImage from './HeroImage'
import {useHomeFetch, } from '../hooks/useHomeFetch'
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../config';
const Home = () => {
    const {state, loading, error} = useHomeFetch();
    return (
        <>
            {state.results[0]?
            <HeroImage
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                title={state.results[0].original_title}
                text={state.results[0].overview}
             />
            : null
            }
        </>
    )
}

export default Home;