import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
// import { connect } from "react-redux";
// import { AppState, AppDispatch } from "../store";
// import { RouteProp } from "@react-navigation/native";
// import { StackNavigationProp } from "@react-navigation/stack";
// import { StackParamList } from "../lib/params/StackParamList";

// type FirstNameRouteProp = RouteProp<StackParamList, "FirstName">;

// type FirstNameNavigationProp = StackNavigationProp<StackParamList, "FirstName">;

// type FirstNameProps = {
//   route: FirstNameRouteProp;
//   navigation: FirstNameNavigationProp;
// };

export const FirstName = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.screenNumberContainer}>
        <View style={styles.screenNumberTrue} />
        <View style={styles.screenNumberFalse} />
        <View style={styles.screenNumberFalse} />
        <View style={styles.screenNumberFalse} />
        <View style={styles.screenNumberFalse} />
      </View>
      <Text style={styles.subtitle}>welcome</Text>
      <Text style={styles.question}>What is your first name?</Text>
      <View style={styles.answer}>
        <TextInput
          style={styles.answerText}
          placeholder="First name"
          placeholderTextColor="#666666"
        />
      </View>
      <TouchableOpacity
        style={styles.nextBtn}
        onPress={() => navigation.push("LastName")}
      >
        <Ionicons name="chevron-forward-outline" size={30} color="#E960FF" />
      </TouchableOpacity>
      <Text style={styles.nextBtnText}>Next</Text>
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

  screenNumberContainer: {
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 10,
  },

  screenNumberTrue: {
    height: 15,
    width: 15,
    borderRadius: 100,
    marginHorizontal: 3,
    backgroundColor: "#E960FF",
    borderWidth: 1.5,
  },

  screenNumberFalse: {
    height: 15,
    width: 15,
    borderRadius: 100,
    marginHorizontal: 3,
    borderColor: "#000",
    backgroundColor: "white",
    borderWidth: 1.5,
  },

  subtitle: {
    fontSize: 18,
    color: "#9C9C9C",
    alignSelf: "flex-start",
    paddingVertical: 5,
    fontWeight: "bold",
    letterSpacing: 0.6,
    fontFamily: "Georgia",
  },

  question: {
    fontSize: 30,
    alignSelf: "flex-start",
    fontFamily: "Futura",
    // fontFamily: "Avenir",
    // fontFamily: "Al Nile",
    // fontFamily: "Futura",
    // fontFamily: "Georgia",
    // fontFamily: "Futura-CondensedExtraBold",
    // fontFamily: "Futura-Medium",
    fontWeight: "bold",
    color: "#282828",
  },

  answer: {
    marginTop: 80,
    width: "100%",
    height: 60,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 25,
    backgroundColor: "white",
    justifyContent: "center",
  },

  answerText: {
    paddingLeft: 20,
    height: 70,
  },

  nextBtn: {
    borderRadius: 100,
    marginTop: 90,
    backgroundColor: "#282828",
    width: 65,
    height: 65,
    justifyContent: "center",
    alignItems: "center",
  },

  nextBtnText: {
    marginTop: 10,
    color: "#424242",
    fontSize: 18,
    alignSelf: "center",
    fontWeight: "bold",
    fontFamily: "Futura",
  },
});

// const mapStateToProps = (state: AppState) => ({
//   account: state.account,
//   chat: state.chat,
// });

// export default connect(mapStateToProps, mapDispatchToProps)(FirstName);
