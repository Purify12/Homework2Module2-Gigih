import React, { useEffect,useState } from "react";
import axios from "axios";
import './styles/style.css';
import data from "./albumData/albumDummy";
import AlbumList from "./components/album/albumList";
import CreatePlaylist from "./components/playlist/createPlaylist";
import TracksData from "./albumData/trackDummy";
import TrackListCard from "./components/track/trackListCard";
import TrackListTable from "./components/track/trackListTable";
import SearchTrack from "./components/track/SearchTrack";
import Login from "./components/auth/login";

const SPOTIFY_CLIENT_ID = process.env;

function App() {
  const [accesToken, setAcessToken] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [isSubmit, setIsSubmit] = useState(false)
  useEffect(() => {
    console.log(SPOTIFY_CLIENT_ID);
    console.log(SPOTIFY_CLIENT_ID.SPOTIFY_CLIENT_SECRET)
  }, []);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value)
  }

  const handleSearch = async () => {
    console.log(accesToken)
    const url = `https://api.spotify.com/v1/search?q=${searchInput}&type=track`;
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${accesToken}`
        },
      });

      setSearchResult(response.data.tracks.items)
      setIsSubmit(true)

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <React.Fragment>
       <div className="login-container">
        <Login />
      </div>
      <div className="search-container">
        <h1>SEARCH PAGE</h1>
        <div className="search-section">
          <input type={'text'} placeholder={'Search Here'} onChange={handleInputChange}></input>
          <button className="search-button" onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div className="search-tracklist-container">
        <SearchTrack value={searchResult} input={searchInput} isSubmit={isSubmit} />
      </div>
      <div className="container">
      <div className="tracklist-table">
        <h1>Tracklist</h1>
        <TrackListTable value={TracksData}/>
      </div>
      <div className="albums-container">
        {
          TracksData.map((element) => <TrackListCard value={element} key={element.id} />)
        }
      </div>
      </div>
    </React.Fragment>
  );
}

export default App;
