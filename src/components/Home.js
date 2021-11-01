import React from 'react';
import HeroImage from './HeroImage'
import {useHomeFetch, } from '../hooks/useHomeFetch'
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../config';
import { API_URL } from '../config';
import Grid from './Grid'
import Thumb from './Thumb'
import Spinner from './Spinner'
import SearchBar from './SearchBar'
import Button from './Button'



const Home = () => {
    const {state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore} = useHomeFetch();
    if (error) return <div>Something went wrong ...</div>;
    return (
        <>
            {!searchTerm && state.results[0]?
            <HeroImage
                image={`${API_URL}${state.results[0].backdrop}`}
                title={state.results[0].title}
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
                            movie.image
                            ? API_URL + movie.image
                            : null
                        }
                        movieId={movie.id}
                    />
                ))}
            </Grid>
            {loading && <Spinner/>}
            {state.page < state.total_pages && !loading && (
                <Button text='Load More' callback={() => setIsLoadingMore(true)}/>
            )}
        </>
    )
}

export default Home;