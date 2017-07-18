import React, { Component } from "react";
import { Scene, Router, Actions } from "react-native-router-flux";
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeCreate from "./components/EmployeeCreate";

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Log In" initial />
      </Scene>
      <Scene key="main">
        <Scene
          initial
          key="employeeList"
          component={EmployeeList}
          title="Employees"
          rightTitle="New"
          onRight={() => Actions.employeeCreate()}
        />
        <Scene
          key="employeeCreate"
          component={EmployeeCreate}
          title="Create New Employee"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;