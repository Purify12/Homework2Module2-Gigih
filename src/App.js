import React, { useEffect } from "react";
import './styles/style.css';
import data from "./albumData/albumDummy";
import AlbumList from "./components/album/albumList";
import CreatePlaylist from "./components/playlist/createPlaylist";
import TracksData from "./albumData/trackDummy";
import TrackListCard from "./components/track/trackListCard";
import TrackListTable from "./components/track/trackListTable";

const SPOTIFY_CLIENT_ID = process.env;

function App() {

  useEffect(() => {
    console.log(SPOTIFY_CLIENT_ID);
    console.log(SPOTIFY_CLIENT_ID.SPOTIFY_CLIENT_SECRET)
  }, []);

  return (
    <React.Fragment>
      <CreatePlaylist />
      <AlbumList value={data} />
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
