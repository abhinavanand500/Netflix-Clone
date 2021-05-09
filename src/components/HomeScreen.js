import React from "react";
import Nav from "./Nav";
import Banner from "./Banner";
import requests from "../api/request";
import Row from "./Row";
const HomeScreen = () => {
    return (
        <div>
            <Nav />
            <Banner />
            <Row
                title='NETFLIX ORIGINAL'
                fetchUrl={requests.fetchNetflixOriginal}
                isLargeRow
            />
            <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
            <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
            <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
            <Row
                title='Romantic Movies'
                fetchUrl={requests.fetchRomanceMovies}
            />
            <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
            <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
            <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
        </div>
    );
};

export default HomeScreen;
