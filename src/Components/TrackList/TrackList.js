import React from 'react';
import './Track';
import './TrackList.css';

class TrackList extends React.Component{
  render(){
    return(
      <div className="TrackList">
      {
        this.props.tracks.map(track => {
          return <Track onAdd={this.props.onAdd}
                        key={track.id}
                        track={Track}
                        onRemove={this.props.onRemove}/>
        })
      }
      </div>
    );
    this.props.track.name
    this.props.track.artist
    this.props.track.album

  }
}

export default TrackList;
