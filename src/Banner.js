import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./request";
function Banner() {
    const [Movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginal);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ],
            );
            return request;
        }
        fetchData();
    }, []);
    return (
        <div>
            <header
                className='banner'
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${Movie?.backdrop_path}")`,
                    backgroundPosition: "center center",
                }}>
                <div className='banner_contents'>
                    <h1>
                        {Movie?.title || Movie?.name || Movie?.original_name}
                    </h1>
                </div>
            </header>
        </div>
    );
}

export default Banner;
