import React, { Component } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  LayoutAnimation
} from "react-native";
import { CardSection, Card } from "./common";

import { connect } from "react-redux";
import { selectLibraryId } from "../actions";

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  render() {
    const { titleStyle } = styles;
    const { id, title, description } = this.props.library;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibraryId(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.props.expanded &&
            <CardSection>
              <Text>{description}</Text>
            </CardSection>}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  // ownProps is exactly equal to this.props as passed into the component
  // allows for precalculation in this function
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
};

export default connect(mapStateToProps, { selectLibraryId })(ListItem);
