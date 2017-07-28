import React, { Component } from "react";
import { ListView } from "react-native";
import { connect } from "react-redux";
import _ from "lodash";

import { employeesFetch } from "../actions";
import ListItem from "./ListItem";

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // this.props is still the old set of props
    // nextProps is the next set of props that this component will be rendered with
    this.createDataSource(nextProps);
  }

  createDataSource(props) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(props.employees);
  }

  renderRow(employee) {
    return <ListItem employee={employee} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={employee => this.renderRow(employee)}
      />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid }; // {shift: 'Monday', name: 'blah', uid: '1lj43lkj'}
  });
  // _.map puts all transformed objects into one array

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
