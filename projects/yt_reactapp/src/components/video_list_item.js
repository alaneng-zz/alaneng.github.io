import React, { Component } from 'react';
import { ListGroupItem, Image } from 'react-bootstrap';

export default class VideoListItem extends Component {
  render() {
    const {video, onVideoSelect} = this.props
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
      <ListGroupItem onClick={() => onVideoSelect(video)}>
        <div className='video-list media'>
          <div className='media-left'>
            <Image rounded src={imageUrl} />
          </div>
          <div className='media-body'>
            <div className='media-heading'>{video.snippet.title}</div>
          </div>
        </div>
      </ListGroupItem>
    )
  }
}