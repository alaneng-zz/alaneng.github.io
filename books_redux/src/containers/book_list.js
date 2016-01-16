import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index';
import { ListGroup, ListGroupItem, Col } from 'react-bootstrap';

class BookList extends Component {

  renderList() {
    return this.props.books.map(book => {
      return (
        <ListGroupItem 
          onClick={() => this.props.selectBook(book)}
          key={book.title}>
          {book.title}
        </ListGroupItem>
      )
    })
  }

  render() {
    return (
      <Col md={4}>
        <ListGroup>
          {this.renderList()}
        </ListGroup>
      </Col>
    )
  }
}

function mapStateToProps(state) {
  // whatever is returned will show up as props inside of BookList above
  // this.props.books is made available
  // take pieces of state and make them available on container
  return {
    books: state.books
  }
}

// anything returned from this function will end up
// as props on the BookList container
// takes action creators you define and make them available on container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, result shall be
  // passed to all of our reducers
  // dispatch receives all actions and spits to reducers
  // this.props.selectBook will call action creator
  // takes the result of selectBook and passes it to reducers
  return bindActionCreators( { selectBook: selectBook }, dispatch)
}

// promote BookList from component to a container
// it needs to know about this new dispatch method, selectBook
// make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);


