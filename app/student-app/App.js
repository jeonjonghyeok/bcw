//Student

import * as React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "./Components/Navigator/DrawerNavigator";
import MainNavigator from "./Components/Navigator/MainNavigator";

export default class App extends React.Component {
  render() {
    return <MainNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
