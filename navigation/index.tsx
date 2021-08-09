import React, { useState, useEffect, useContext } from "react";
// import firebase from "../../firebase";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import LoginNavigator from "./LoginNavigator";
import BottomTabNavigator from "./BottomTabNavigator";
import NotFoundScreen from "../screens/NotFoundScreen";
import { StartPage } from "../screens/StartPage";
import TabOneScreen from "../screens/TabOneScreen";
import { Title } from "react-native-paper";
// import AppNavigator from "./AppNavigator";
// import { MixpanelContext } from "../components/AnalyticsService";
// import { connect } from "react-redux";
// import { AppState, AppDispatch } from "../store";
// import { AccountState, loginUser } from "../store/slices/accountSlice";

const TITLE = "Birthday!";

const Stack = createStackNavigator<RootStackParamList>();

// type RootNavigatorProps = {
//   account: AccountState;
//   login: Function;
// };

export const RootNavigator = () => {
  // const { loggedIn } = account;
  // const [loading, setLoading] = useState(true);
  // const mixpanel = useContext(MixpanelContext);

  // useEffect(() => {
  //   const usersRef = firebase.firestore().collection("users");
  //   firebase.auth().onAuthStateChanged(async (user) => {
  //     if (user) {
  //       usersRef
  //         .doc(user.uid)
  //         .get()
  //         .then(async (document) => {
  //           const userData = document.data();
  //           if (userData !== null) {
  //             if (mixpanel) {
  //               mixpanel.track("User Login");
  //               mixpanel.identify(user.uid);
  //               mixpanel.people_increment("Logins");
  //               mixpanel.people_set({
  //                 "Last Login": new Date().toISOString(),
  //               });
  //             }
  //             await login(user.uid);
  //             setLoading(false);
  //           }
  //         })
  //         .catch((error) => {
  //           setLoading(false);
  //         });
  //     } else {
  //       setLoading(false);
  //     }
  //   });
  // }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StartPage"
        component={StartPage}
        options={{
          title: TITLE,
          headerBackTitle: "",
          headerTitleStyle: {
            // fontWeight: "bold",
            fontSize: 30,
            fontFamily: "Marker Felt",
          },
          headerTintColor: "#E960FF",
          headerStatusBarHeight: 40,
          headerStyle: { elevation: 0, shadowColor: "transparent" },
        }}
      />
      <Stack.Screen name="TabOneScreen" component={TabOneScreen} />
      {/* <Stack.Screen name="LoginNavigator" component={LoginNavigator} /> */}
      {/* <Stack.Screen name="Root" component={BottomTabNavigator} /> */}
      {/* <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      /> */}
    </Stack.Navigator>
  );
};

export default RootNavigator;
