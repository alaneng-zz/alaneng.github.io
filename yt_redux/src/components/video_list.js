import React, { Component } from 'react';
import { Grid, ListGroup } from 'react-bootstrap';
import VideoListItem from './video_list_item';

export default class VideoList extends Component {
  render() {
    const {videos, onVideoSelect} = this.props;

    const videoItems = videos.map(video => {
      return (
        <VideoListItem 
          onVideoSelect={onVideoSelect}
          key={video.etag} 
          video={video} />

      )
    })

    return (
      <ListGroup className='col-md-4'>
        {videoItems}
      </ListGroup>
    )
  }
}