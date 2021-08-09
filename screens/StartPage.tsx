import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
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

export const StartPage = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.screenNumberContainer}>
        <View style={styles.screenNumberTrue} />
        <View style={styles.screenNumberFalse} />
        <View style={styles.screenNumberFalse} />
        <View style={styles.screenNumberFalse} />
      </View>
      <Text style={styles.question}>What is your first name?</Text>
      <View style={styles.answer}>
        <TextInput
          style={styles.answerText}
          placeholder="First name"
          placeholderTextColor="#666666"
        />
      </View>
      <TouchableOpacity style={styles.nextBtn}>
        <Text style={styles.nextBtnText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    width: "100%",
  },

  screenNumberContainer: {
    flexDirection: "row",
    marginTop: -50,
  },

  screenNumberTrue: {
    height: 30,
    width: 30,
    borderRadius: 100,
    marginHorizontal: 3,
    backgroundColor: "#E960FF",
    // shadowColor: "#000",
    // shadowOpacity: 0.25,
    // shadowRadius: 5,
    // shadowOffset: {
    //   width: 0,
    //   height: 0,
    // },
  },

  screenNumberFalse: {
    height: 30,
    width: 30,
    borderRadius: 100,
    marginHorizontal: 3,
    borderColor: "#E960FF",
    backgroundColor: "white",
    borderWidth: 1,
    // shadowColor: "#000",
    // shadowOpacity: 0.25,
    // shadowRadius: 5,
    // shadowOffset: {
    //   width: 0,
    //   height: 0,
    // },
  },

  question: {
    fontSize: 30,
    marginTop: -20,
    fontFamily: "Palatino",
    textAlign: "center",
  },

  answer: {
    marginTop: -40,
    borderWidth: 1,
    width: "70%",
    height: 40,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    backgroundColor: "white",
    justifyContent: "center",
  },

  answerText: {
    paddingLeft: 20,
  },

  nextBtn: {
    borderRadius: 30,
    marginTop: -20,
    backgroundColor: "#E960FF",
    width: 120,
    height: 60,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },

  nextBtnText: {
    color: "#fff",
    fontSize: 20,
    alignSelf: "center",
    fontWeight: "bold",
  },
});

// const mapStateToProps = (state: AppState) => ({
//   account: state.account,
//   chat: state.chat,
// });

// export default connect(mapStateToProps, mapDispatchToProps)(StartPage);
