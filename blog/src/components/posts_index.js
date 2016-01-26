import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

export default class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <div className='text-xs-right'>
          <Link to='/posts/new' className='btn btn-primary'>
            add a post
          </Link>
        </div>
        <div>list of blog posts</div>
      </div>
    )
  }
}

export default connect(null, { fetchPosts })(PostsIndex) // dont have any state to map over just yet