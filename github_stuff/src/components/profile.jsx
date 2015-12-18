import React from 'react';
import { Router } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import Repos from './Github/repos.jsx';
import UserProfile from './Github/userProfile.jsx';
import Notes from './Notes/notes.jsx';
import ReactFireMixin from 'reactfire';
import Firebase from 'firebase';
import helpers from '../utils/helpers.jsx';

var Profile = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState() {
    return {
      notes: [],
      bio: {},
      repos: []
    }
  },

  componentDidMount() {
    this.ref = new Firebase('https://github-userlookup.firebaseio.com/');
    this.init(this.props.params.username);
  },

  componentWillReceiveProps(nextProps) {
    this.unbind('notes');
    this.init(nextProps.params.username);
  },

  // componentWillUnmount() {
  //   this.unbind('notes');
  // },

  init(username) {
    var childRef = this.ref.child(username)
    this.bindAsArray(childRef, 'notes'); // bind notes to username endpoint

    helpers.getGithubInfo(username)
      .then(data => {
        this.setState({
          repos: data.repos,
          bio: data.bio
        })
      }.bind(this))
  },

  handleAddNote(newNote) {
    // update Firebase with new note. determines how many notes, append newNote
    this.ref.child(this.props.params.username).child(this.state.notes.length).set(newNote)
  },

  render() {
    return (
      <Row>
        <Col xs={4}>
          <UserProfile 
            username={this.props.params.username} 
            bio={this.state.bio} />
        </Col>
        <Col xs={3}>
          <Repos 
            username={this.props.params.username}
            repos={this.state.repos} />
        </Col>
        <Col xs={5}>
          <Notes 
            username={this.props.params.username}
            notes={this.state.notes}
            addNote={this.handleAddNote} />
        </Col>
      </Row>

    )
  }
});

export default Profile;