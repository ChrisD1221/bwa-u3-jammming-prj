import React from 'react';
import './Track.css';

class Track extends React.Component{
  constructor(props){
    super(props);

    this.addTrack.bind(this);
    this.removeTrack.bind(this);
  }

  render(){
    return(
      <div className="Track-Action">
        <div className="Track-information">
         <h3><!-- track name will go here --></h3>
         <p><Track artist="" /> | <!-- track album will go here --></p>
        </div>
        <a className="Track-action">
        <+  onClick={this.addTrack} />
        <-  onClick={this.removeTrack} /> </a>
      </div>
    );

    addTrack(){
      this.props.onAdd(this.props.track)

    }

    removeTrack(){
      this.props.onRemove(this.props.track)
    }

    renderAction(){
      if( isRemoval === true){
        console.log('-');
      }
      else{
        console.log('+');
      }

    }
  }
}

export default Track;
