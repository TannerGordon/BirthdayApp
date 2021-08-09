/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import { StartPage } from "../screens/StartPage";
import {
  BottomTabParamList,
  TabOneParamList,
  TabTwoParamList,
  LoginParamList,
} from "../types";

const LoginStack = createStackNavigator<LoginParamList>();

const LoginNavigator = () => {
  return (
    <LoginStack.Navigator initialRouteName="StartPage">
      <LoginStack.Screen
        name="StartPage"
        component={StartPage}
        options={{
          headerTransparent: true,
          title: "",
          headerBackTitle: "Back",
        }}
      />
      <LoginStack.Screen
        name="TabOne"
        component={TabOneScreen}
        options={{ headerTitle: "Tab One Title" }}
      />
    </LoginStack.Navigator>
  );
};

export default LoginNavigator;
