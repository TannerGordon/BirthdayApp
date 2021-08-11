///////////////////////////////////////////////////////////
//                                                       //
//                      Birthday!                        //
//                                                       //
//                                                       //
//                                                       //
//                                                       //
//                 birthday icon round                   //
//                                                       //
//                                                       //
//                                                       //
//                                                       //
//                      WELCOME                          //
//                     (big text)                        //
//                                                       //
//                                                       //
//                                                       //
//                                                       //
//                                                       //
//                  get started btn                      //
//                                                       //
//                                                       //
//                                                       //
//                                                       //
//                                                       //
//                                                       //
//                                                       //
//                                                       //
///////////////////////////////////////////////////////////

import { NavigationContainer, NavigationHelpersContext } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
// import { ICON_ROUND } from "../../assets/images/"
// import { connect } from "react-redux";
// import { AppState, AppDispatch } from "../store";
// import { RouteProp } from "@react-navigation/native";
// import { StackNavigationProp } from "@react-navigation/stack";
// import { StackParamList } from "../lib/params/StackParamList";

// type StartPageRouteProp = RouteProp<StackParamList, "StartPage">;

// type StartPageNavigationProp = StackNavigationProp<StackParamList, "StartPage">;

// type StartPageProps = {
//   route: StartPageRouteProp;
//   navigation: StartPageNavigationProp;
// };

export const Welcome = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Image style={styles.icon_round} source={require("../../assets/images/icon_circle.png")}/>
      <Text style={styles.title}>Welcome</Text>
      <TouchableOpacity style={styles.nextBtn} onPress={() => navigation.push("FirstName")}>
        <Text style={styles.nextBtnText}>Get started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    width: "100%",
  },

  nextBtn: {
    borderRadius: 35,
    marginTop: 110,
    backgroundColor: "#282828",
    width: 130,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#E960FF",
    // borderWidth: 2,
  },

  nextBtnText: {
    // color: "#E960FF",
    color: "white",
    fontSize: 16,
    // alignSelf: "center",
    fontWeight: "bold",
    fontFamily: "Georgia",
  },

  icon_round: {
    margin: 50,
    width: 90,
    height: 90,
    resizeMode: 'stretch',
  },

  title: {
    fontSize: 60,
    marginTop: 20,
    fontFamily: "Avenir",
  },
});

// const mapStateToProps = (state: AppState) => ({
//   account: state.account,
//   chat: state.chat,
// });

// export default connect(mapStateToProps, mapDispatchToProps)(StartPage);
