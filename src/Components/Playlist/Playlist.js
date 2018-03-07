import React from 'react';
import './TrackList';
import './TrackList.css';

class Playlist extends React.Component{
  constructor(props){
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this)
  }
  render(){
    return(
      <div className="Playlist">
     <input defaultValue={'New Playlist'}/>
     <TrackList tracks={this.props.playlistTracks}
                onRemove={this.props.onRemove}/>
     <a className="Playlist-save">SAVE TO SPOTIFY onClick= this.props.onSave</a>
   </div>
     <a onChange={this.handleNameChange} </a>
    );

  }
  handleNameChange(event){
    this.props.onNameChange(event.target.value);
  }

}

export default Playlist;
