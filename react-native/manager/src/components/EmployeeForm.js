import React, { Component } from "react";
import { View, Text, Picker } from "react-native";
import { CardSection, Card, Input, Button } from "./common";

import { connect } from "react-redux";
import { employeeUpdate } from "../actions";

class EmployeeForm extends Component {
  render() {
    const Days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ].map(day => <Picker.Item key={day} label={day} value={day} />);

    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Alan"
            value={this.props.name}
            onChangeText={text =>
              this.props.employeeUpdate({ prop: "name", value: text })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={text =>
              this.props.employeeUpdate({ prop: "phone", value: text })}
          />
        </CardSection>

        <CardSection style={{ flexDirection: "column" }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            value=""
            selectedValue={this.props.shift}
            onValueChange={day =>
              this.props.employeeUpdate({ prop: "shift", value: day })}
          >
            {Days}
          </Picker>
        </CardSection>

      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = ({ employeeForm: { name, phone, shift } }) => {
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
