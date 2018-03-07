import React from 'react';
import './TrackList';
import './SearchResults.css'

class SearchResults extends React.Component{
  render(){
    return(
      <div className="SearchResults">
    <h2>Results</h2>
    {

      <TrackList onAdd= {this.props.onAdd}  tracks={this.props.searchResults} />

    }
    </div>
    );
  }
}

export default SearchResults;