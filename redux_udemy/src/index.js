import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCI8vgkomXybo4JGV91bB830op0Xf2sqC4'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }
  }

  componentDidMount() {
    YTSearch({key: API_KEY, term: 'ellen'}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[1]
       })
    });
  }

  render() {
    return (
      <Grid>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </Grid>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));