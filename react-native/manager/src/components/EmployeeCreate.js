import React, { Component } from "react";
import { View, Text, Picker } from "react-native";
import { CardSection, Card, Button } from "./common";
import { connect } from "react-redux";
import { employeeUpdate, employeeCreate } from "../actions";
import EmployeeForm from "./EmployeeForm";

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || "Monday" });
  }

  render() {
    return (
      <Card>

        <EmployeeForm {...this.props} />

        <CardSection>
          <Button onPress={() => this.onButtonPress()}>Create</Button>
        </CardSection>

      </Card>
    );
  }
}

const mapStateToProps = ({ employeeForm: { name, phone, shift } }) => {
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(
  EmployeeCreate
);
