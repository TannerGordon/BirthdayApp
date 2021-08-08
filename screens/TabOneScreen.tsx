import * as React from "react";
import { View, Alert, StyleSheet, Text, TouchableOpacity } from "react-native";
import firebase from "../firebase";

import EditScreenInfo from "../components/EditScreenInfo";
// import { Text, View } from "../components/Themed";

const sendTestFirebase = () => {
  Alert.alert("hi");
  firebase
    .firestore()
    .collection("users")
    .doc("tanner")
    .set({ name: "The coolest kid ever" });
};

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What up Hank!</Text>
      <View style={styles.separator} />
      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
      <Text style={styles.getStartedText}>Love you bro man!!!</Text>
      <TouchableOpacity
        style={styles.test_btn}
        onPress={() => sendTestFirebase()}
      >
        <Text>Hi</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },

  test_btn: {
    height: 30,
    width: 40,
    backgroundColor: "blue",
  },
});
