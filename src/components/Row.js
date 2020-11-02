import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Row.css";
const base_url = "https://image.tmdb.org/t/p/original";
toast.configure();
function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            console.log(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: "400",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };
    const handleError = (error) => {
        toast.error(
            "Sorry for inconvenience. Trailer for this movie is not present now. We will update it soon",
        );
        // alert("Sorry for inconvenience. The error is " + error);
    };
    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.name || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                })
                .catch((error) => {
                    handleError(error);
                });
        }
    };
    return (
        <div className='row'>
            {/* title */}
            <h2>{title}</h2>
            <div className='row_posters'>
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row_poster ${
                            isLargeRow && "row_posterLarge"
                        }`}
                        src={`${base_url}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`}
                        alt={movie.name}
                    />
                ))}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    );
}

export default Row;
