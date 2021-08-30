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
        <Ionicons name="checkmark-outline" size={20} color="#E960FF" />
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
    borderColor: "#9C9C9C",
    borderWidth: 2,
    marginVertical: 5,
    borderRadius: 10,
  },

  checkboxEmpty: {
    width: 30,
    height: 30,
    borderColor: "#9C9C9C",
    borderWidth: 2,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  checkboxFilled: {
    width: 30,
    height: 30,
    borderColor: "#9C9C9C",
    borderWidth: 2,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },

  checkboxText: {
    fontSize: 20,
    alignSelf: "center",
    fontFamily: "Futura",
  },
});
