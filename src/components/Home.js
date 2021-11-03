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
    const {state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore, filter, setFilter} = useHomeFetch();
    if (error) return <div>Something went wrong ...</div>;
    const onAlphabetClick = (letter) => {
        setFilter(letter.target.innerText)
    }
    const clearSearchTerm = () =>{
        setFilter('');
    }
    const prepareAlphabets = () => {
        let result = [];
        for(let i=65; i<91; i++) {
          result.push(
            <span className="letter" type="button" key={i} onClick={onAlphabetClick} value={String.fromCharCode(i)} >{String.fromCharCode(i)}</span>
  
          )
          if (i != 91 ){
            result.push(
                <span>&nbsp; | &nbsp;</span>
            )
          if (i == 90){
            result.push(<span className="letter" onClick={clearSearchTerm}>clear</span>)
          }
          }
  
        }
        return result;
      }
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
            <div className='alphabet'>
                {prepareAlphabets()}
            </div>
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