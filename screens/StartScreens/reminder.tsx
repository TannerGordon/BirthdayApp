// when would you like to be reminded about your friends' birthdays? (select all that apply)
//
// on their birthday
// 1 day before
// 1 week before
// custom

import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { Checkbox } from "react-native-paper";
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

// var CheckBox = () => {

// };

export const Reminder = ({ navigation }: any) => {
  const [CheckBox1, setCheckBox1] = useState(false);
  const [CheckBox2, setCheckBox2] = useState(false);
  const [CheckBox3, setCheckBox3] = useState(false);
  const [checkColor, setCheckColor] = useState("white");
  const changeCheckbox = (cbox: boolean, setbox: Function) => {
    setbox(!cbox);
    if (!cbox) {
      setCheckColor("black");
    } else {
      setCheckColor("white");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.screenNumberContainer}>
        <View style={styles.screenNumberFalse} />
        <View style={styles.screenNumberFalse} />
        <View style={styles.screenNumberFalse} />
        <View style={styles.screenNumberFalse} />
        <View style={styles.screenNumberTrue} />
      </View>
      <Text style={styles.subtitle}>last question!</Text>
      <Text style={styles.question}>
        when would you like to be notified about your friends' birthdays?
        (select all that apply)
      </Text>
      <TouchableOpacity
        style={styles.checkItem}
        onPress={() => changeCheckbox(CheckBox1, setCheckBox1)}
        activeOpacity={0.6}
      >
        <View style={[styles.checkbox, { backgroundColor: checkColor }]}>
          {!CheckBox1 ? (
            <Ionicons name="checkmark-outline" size={20} color="white" />
          ) : (
            <Ionicons name="checkmark-outline" size={20} color="#E960FF" />
          )}
        </View>
        <Text style={styles.checkboxText}>On their birthday</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.checkItem}
        onPress={() => changeCheckbox(CheckBox2, setCheckBox2)}
        activeOpacity={0.6}
      >
        <View style={styles.checkbox}>
          {!CheckBox2 ? (
            <Ionicons name="checkmark-outline" size={20} color="white" />
          ) : (
            <Ionicons name="checkmark-outline" size={20} color="#E960FF" />
          )}
        </View>
        <Text style={styles.checkboxText}>1 day before</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.checkItem}
        onPress={() => changeCheckbox(CheckBox3, setCheckBox3)}
        activeOpacity={0.6}
      >
        <View style={styles.checkbox}>
          {!CheckBox3 ? (
            <Ionicons name="checkmark-outline" size={20} color="white" />
          ) : (
            <Ionicons name="checkmark-outline" size={20} color="#E960FF" />
          )}
        </View>
        <Text style={styles.checkboxText}>1 week before</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.nextBtn}>
        <Ionicons name="checkmark-outline" size={30} color="#E960FF" />
      </TouchableOpacity>
      <Text style={styles.nextBtnText}>Finish</Text>
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
    fontSize: 20,
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
    marginBottom: 30,
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
    marginTop: 50,
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

  checkItem: {
    width: "100%",
    flexDirection: "row",
    borderColor: "#9C9C9C",
    borderWidth: 2,
    marginVertical: 5,
    borderRadius: 10,
  },

  checkbox: {
    width: 30,
    height: 30,
    borderColor: "#9C9C9C",
    borderWidth: 2,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  checkboxText: {
    fontSize: 20,
    alignSelf: "center",
    fontFamily: "Futura",
  },
});

// const mapStateToProps = (state: AppState) => ({
//   account: state.account,
//   chat: state.chat,
// });

// export default connect(mapStateToProps, mapDispatchToProps)(StartPage);