import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import Communications from "react-native-communications";
import _ from "lodash";

import { Card, CardSection, Button, Confirm } from "./common";
import EmployeeForm from "./EmployeeForm";
import {
  employeeUpdate,
  employeeSave,
  employeeDelete,
  clearEmployeeForm
} from "../actions";

class EmployeeEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  componentWillUnmount() {
    this.props.clearEmployeeForm();
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeSave({
      name,
      phone,
      shift,
      uid: this.props.employee.uid
    });
  }

  onTextPress() {
    const { phone, shift, name } = this.props;
    Communications.text(phone, `your upcoming shift is on ${shift}`);
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={() => this.onButtonPress()}>
            Save Changes
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => this.onTextPress()}>
            Text Schedule
          </Button>
        </CardSection>
        <CardSection>
          <Button
            onPress={() => this.setState({ showModal: !this.state.showModal })}
          >
            Fire
          </Button>
        </CardSection>
        <Confirm
          visible={this.state.showModal}
          onAccept={() => this.props.employeeDelete(this.props.employee)}
          onDecline={() => this.setState({ showModal: !this.state.showModal })}
        >
          Are you sure you want to do this?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = ({ employeeForm: { name, phone, shift } }) => {
  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeSave,
  employeeDelete,
  clearEmployeeForm
})(EmployeeEdit);
