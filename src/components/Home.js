import React from 'react';
import HeroImage from './HeroImage'
import {useHomeFetch, } from '../hooks/useHomeFetch'
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../config';
import Grid from './Grid'
import Thumb from './Thumb'
import Spinner from './Spinner'
import SearchBar from './SearchBar'
import Button from './Button'

const Home = () => {
    const {state, loading, error, searchTerm, setSearchTerm} = useHomeFetch();
    return (
        <>
            {!searchTerm && state.results[0]?
            <HeroImage
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                title={state.results[0].original_title}
                text={state.results[0].overview}
             />
            : null
            }
            <SearchBar setSearchTerm={setSearchTerm}/>
            <Grid header={searchTerm ? 'search result': 'Popular Movies'}>
                {state.results.map( movie => (
                    <Thumb
                        key={movie.id}
                        clickable
                        image={
                            movie.poster_path
                            ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                            : null
                        }
                        moiveID={movie.id}
                    />
                ))}
            </Grid>
            {loading && <Spinner/>}
            {state.page < state.total_pages && !loading && (
                <Button text='Load More'/>
            )}
        </>
    )
}

export default Home;