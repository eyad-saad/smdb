import { useState, useEffect } from "react";
import API from '../API';

export const useMovieFetch = (movieId) => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                setLoading(true);
                setError(false);

                const movie = await API.fetchMovie(movieId);
                const actors  = await API.fetchCredits(movieId);
                // const directors = await API.fetchDirectors(movieId);


                setState({
                    ...movie, 
                    actors: actors,
                    directors: movie.directors,
                    genres: movie.genres,
                })

                setLoading(false);

             } catch(error){
                 setError(true);
             }
        }
        fetchMovie();
    }, [movieId])

    return {state, loading, error}
};