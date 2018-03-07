import React from 'react';
import './App.css';
import Spotify from './util/Spotify';

class App extends React.Component{
  constructor(props){
    super(props);

      this.state.searchResults = {
      searchResults: [name, artist, album],
      playlistName: '',
      playlistTracks: [name,artist,album]

     }

     this.addTrack = this.addTrack.bind(this);
      this.updatePlaylistName = this.updatePlaylistName.bind(this);
      this.removeTrack = this.removeTrack.bind(this);
      this.savePlaylist = this.savePlaylist.bind(this);
      this.search = this.search.bind(this);
  }

  updatePlaylistName(name){
    this.setState({name: name}
  }

  addTrack(track){
  let playlistTracks = this.state.playlistTracks;

  for (let i = 0; i < playlistTracks.length; i++) {
    let currTrack = playlistTracks[i];

    if (currTrack.id === track.id){
      return; // exit the function
    }
  }

  playlistTracks.push(track);
  this.setState({playlistTracks: playlistTracks});
}

removeTrack(track) {
  let currTrack = this.state.playlistTracks;
  currTrack.filter(function(tracks) {
    if(currTrack != track.id){
      return true;
    }
    else{
      return false;
    }
  });
  this.setState({ playlistTracks: tracks });
}

savePlaylist(event){
  Spotify.savePlaylist(event).then(
    playlistName => this.setState(
      { New Playlist: playlistName})).then(
        results => this.setState(
          { searchResults: [] }));;
  let trackURIs = [$`{playlistTracks}`];
  this.props.trackURIs(this.state.name, this.state.artist, this.state.album)
   event.preventDefault();
}

search(search){
  Spotify.search(search).then(
    results => this.setState({ searchResults: results }));
  {
  console.log({search})
 }
}



render(){
return (
<div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar onSearch={this.search}
                onChange={this.handleTermChange}/>
    <div className="App-playlist">
      <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults} />
      <Playlist playlistName={this.state.playlistName}
                playlistTracks={this.state.playlistTracks}
                onRemove= {this.removeTrack}
                onNameChange= {this.updatedPlaylistName}
                onSave= {this.savePlaylist}/>
    </div>
  </div>
</div>
   );

 }
};
