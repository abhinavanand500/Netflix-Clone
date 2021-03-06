import React from "react";
import Row from "./components/Row";
import "./App.css";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import requests from "./api/request";
function App() {
    return (
        <div className='App'>
            {/* <h1>NetFlix Clone Created By Abhinav Anand 🚀 </h1> */}
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
}

export default App;
