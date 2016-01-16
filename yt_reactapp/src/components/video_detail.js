import React, { Component } from 'react';
import { Grid, Col } from 'react-bootstrap'

export default class VideoDetail extends Component {
  render() {
    const {video} = this.props;

    if (!video) {
      return <div></div>
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`

    return (
      <Col className='video-detail' md={8}>
        <div className='embed-responsive embed-responsive-16by9'>
          <iframe className='embed-responsive-item' src={url}></iframe>
        </div>
        <div className='details'>
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </Col>

    )
  }
}