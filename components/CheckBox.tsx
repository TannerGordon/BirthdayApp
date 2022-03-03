import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

type CheckBoxProps = {
  selected: boolean;
};

export const CheckBox = ({ selected }: CheckBoxProps) => {
  if (selected) {
    return (
      <View style={styles.checkboxFilled}>
        <Ionicons name="checkmark" size={20} color="black" />
      </View>
    );
  } else {
    return <View style={styles.checkboxEmpty}></View>;
  }
};

const styles = StyleSheet.create({
  checkItem: {
    width: "100%",
    flexDirection: "row",
    borderColor: "#E960FF",
    borderWidth: 2,
    marginVertical: 5,
    borderRadius: 10,
  },

  checkboxEmpty: {
    width: 30,
    height: 30,
    borderColor: "black",
    borderWidth: 2,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },

  checkboxFilled: {
    width: 30,
    height: 30,
    borderColor: "black",
    borderWidth: 2,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E960FF",
    borderRadius: 100,
  },

  checkboxText: {
    fontSize: 20,
    alignSelf: "center",
    fontFamily: "Futura",
  },
});

