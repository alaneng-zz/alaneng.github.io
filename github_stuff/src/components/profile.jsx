import React from 'react';
import { Router } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import Repos from './Github/repos.jsx';
import UserProfile from './Github/userProfile.jsx';
import Notes from './Notes/notes.jsx';
import ReactFireMixin from 'reactfire';
import Firebase from 'firebase';

var Profile = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState() {
    return {
      notes: [1,2,3,4],
      bio: {},
      repos: ['a','b','c','d']
    }
  },

  componentDidMount() {
    this.ref = new Firebase('https://github-userlookup.firebaseio.com/');
    var childRef = this.ref.child(this.props.params.username)
    this.bindAsArray(childRef, 'notes'); // bind notes to username endpoint
  },

  componentWillUnmount() {
    this.unbind('notes');
  },

  handleAddNote(newNote) {
    // update Firebase with new note. determins how many notes, append newNote
    this.ref.child(this.props.params.username).child(this.state.notes.length).set(newNote)
  },

  render() {
    return (
      <Row>
        <Col xs={4}>
          <UserProfile 
            username={this.props.params.username} 
            bio={this.state.bio.name} />
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