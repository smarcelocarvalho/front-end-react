import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MoviesService } from "../api/MoviesService";
import { MovieDetailContainer } from "../styles/MovieDetailContainer";

export const MovieDetail = () => {
    const { id } = useParams();

    const [movie, setMovie] = useState({});

    const fetchMovie = async () => {
        const { data } = await MoviesService.getMovieById(id);
        setMovie(data);
        console.log(data);
    }
    useEffect(() => {
        fetchMovie();
    }, []);

    return (
        <MovieDetailContainer>
            <h2>{movie.title}</h2>
            <article>{movie.overview}</article>
            <article>More about this in: {movie.homepage}</article>
        </MovieDetailContainer>
    )
}