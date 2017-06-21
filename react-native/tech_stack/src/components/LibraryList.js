import React, { Component } from "react";
import { View, Text, ListView } from "react-native";
import { connect } from "react-redux";

import ListItem from "./ListItem";

class LibraryList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library) {
    return <ListItem library={library} />;
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={library => this.renderRow(library)}
      />
    );
  }
}

// class LibraryList extends Component {
//     renderItem({ item }) {
//         const { title } = item;

//         return <Text>{title}</Text>;
//     }

//     render() {
//         return (
//             // New flatlist component
//             <FlatList
//                 data={this.props.libraries}
//                 renderItem={this.renderItem}
//                 keyExtractor={({ id }) => id}
//             />
//         );
//     }
// }

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
