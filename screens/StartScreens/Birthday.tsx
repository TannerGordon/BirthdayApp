import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
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

export const Birthday = ({ navigation }: any) => {
  const [date, setDate] = useState(new Date(2000, 0, 1));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showDatepicker = () => {
    showMode("date");
    console.log(date);
  };

  const showMode = (currentMode: any) => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <View style={styles.container}>
      <View style={styles.screenNumberContainer}>
        <View style={styles.screenNumberFalse} />
        <View style={styles.screenNumberFalse} />
        <View style={styles.screenNumberFalse} />
        <View style={styles.screenNumberTrue} />
        <View style={styles.screenNumberFalse} />
      </View>
      <Text style={styles.subtitle}>birthday!</Text>
      <Text style={styles.question}>When is your birthday?</Text>
      <DateTimePicker
        value={date}
        display="spinner"
        onChange={onChange}
        maximumDate={new Date(2020, 0, 1)}
        minimumDate={new Date(1900, 0, 1)}
        textColor="#B413FF"
        // textColor="black"
      />
      <TouchableOpacity
        style={styles.nextBtn}
        onPress={() => navigation.push("Reminder")}
      >
        <Ionicons name="chevron-forward-outline" size={30} color="#E960FF" />
      </TouchableOpacity>
      <Text style={styles.nextBtnText}>Next</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: "column",
    // alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    // width: "100%",
    height: "100%",
  },

  screenNumberContainer: {
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 10,
    alignSelf: "center",
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
    marginTop: 30,
    backgroundColor: "#282828",
    width: 65,
    height: 65,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
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

// export default connect(mapStateToProps, mapDispatchToProps)(StartPage);
