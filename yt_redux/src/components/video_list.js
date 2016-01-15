import React, { Component } from 'react';
import { Grid, ListGroup, Col } from 'react-bootstrap';
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
      <Col md={4}>
        <ListGroup>
          {videoItems}
        </ListGroup>
      </Col>
    )
  }
}