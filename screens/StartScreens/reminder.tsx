// when would you like to be reminded about your friends' birthdays? (select all that apply)
//
// on their birthday
// 1 day before
// 1 week before
// custom

import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Modal,
  View,
  Text,
  TouchableOpacity,
  Touchable,
} from "react-native";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { CheckBox } from "../../components/CheckBox";
import { SafeAreaView } from "react-native-safe-area-context";
import { Item } from "react-native-paper/lib/typescript/components/Drawer/Drawer";
import { Picker } from "react-native-wheel-pick";
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

export const Reminder = ({ navigation, route }: any) => {
  const { firstName, lastName, phoneNumber, day, month, year } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [customDate, setCustomDate] = useState("4 days");
  const [CheckBox1, setCheckBox1] = useState(false);
  const [CheckBox2, setCheckBox2] = useState(false);
  const [CheckBox3, setCheckBox3] = useState(false);
  const [checkColor, setCheckColor] = useState("white");

  // console.log(day, month, year);

  const [CheckedBox, setCheckedBox] = useState([false, false, false]);

  var initialElements = [
    { id: "0", text: "On their birthday", custom: false },
    { id: "1", text: "1 day before", custom: false },
    { id: "2", text: "1 week before", custom: false },
    { id: "3", text: "1 month before", custom: false },
    { id: "4", text: "Custom", custom: true },
  ];

  const [exampleState, setExampleState] = useState(initialElements);
  const [idx, incr] = useState(4);

  const addElement = () => {
    var pickerData = [
      "2 days",
      "3 days",
      "4 days",
      "5 days",
      "6 days",
      "7 days",
      "8 days",
      "9 days",
      "10 days",
      "11 days",
      "12 days",
      "13 days",
      "14 days",
      "15 days",
      "16 days",
      "17 days",
      "18 days",
      "19 days",
      "20 days",
      "21 days",
      "22 days",
      "23 days",
      "24 days",
      "25 days",
      "26 days",
      "27 days",
      "28 days",
      "29 days",
      "30 days",
    ];

    // let str = customDate;
    var index = pickerData.indexOf(customDate) + 2;
    // console.log(index);
    var str = index.toString();
    str = str.concat(" days before");
    // str = str.slice(0,2);
    // str = str.trim();
    // console.log("hey");
    // console.log(Number(str));

    var newNum = idx + 1;
    var newStr = newNum.toString();
    var oldStr = idx.toString();

    var newArray = [
      ...exampleState,
      { id: newStr, text: "Custom", custom: true },
    ];
    let num: any = idx;
    newArray[num] = { id: oldStr, text: str, custom: false };
    var x: number = +idx;
    x = x + 1;
    incr(newNum);
    // incr(idx + 1);
    setExampleState(newArray);
    console.log(newArray);
    // changeEl(newArray);
  };

  const setBox = (id: number) => {
    // console.log(CheckedBox[id])
    CheckedBox[id] = !CheckedBox[id];
    setCheckedBox(CheckedBox);
  };

  const getBox = (id: number) => {
    // console.log("hey")
    return CheckedBox[id];
  };

  const reminderItem = (text: string, custom: boolean, id: number) => {
    if (custom) {
      return (
        <TouchableOpacity
          style={styles.checkItem}
          onPress={() => setModalVisible(!modalVisible)}
          activeOpacity={0.6}
        >
          <Text style={styles.checkboxText}>{text}</Text>
        </TouchableOpacity>
      );
    }
    return (
      <>
        <TouchableOpacity
          style={styles.checkItem}
          // onPress={() => setCheckBox1(!CheckBox1)}
          onPress={() => setBox(id)}
          activeOpacity={0.6}
        >
          {/* <CheckBox selected={CheckBox1} /> */}
          <CheckBox selected={CheckedBox[id]} />
          {/* {console.log(CheckedBox[id])} */}
          <Text style={styles.checkboxText}>{text}</Text>
        </TouchableOpacity>
      </>
    );
  };
  return (
    <View style={styles.container}>
      {/* <Picker
  style={{ backgroundColor: 'white', width: 300, height: 215 }}
  selectedValue='item4'
  pickerData={['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7']}
  onValueChange={value => { }}
/> */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        // onRequestClose={() => {
        //   console.log("Modal has been closed.");
        //   addElement;
        //   setModalVisible(!modalVisible);
        // }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Picker
              style={{ backgroundColor: "white", width: 300, height: 215 }}
              selectedValue="4 days"
              pickerData={[
                "2 days",
                "3 days",
                "4 days",
                "5 days",
                "6 days",
                "7 days",
                "8 days",
                "9 days",
                "10 days",
                "11 days",
                "12 days",
                "13 days",
                "14 days",
                "15 days",
                "16 days",
                "17 days",
                "18 days",
                "19 days",
                "20 days",
                "21 days",
                "22 days",
                "23 days",
                "24 days",
                "25 days",
                "26 days",
                "27 days",
                "28 days",
                "29 days",
                "30 days",
              ]}
              onValueChange={(value) => {
                setCustomDate(value);
              }}
            />
            <TouchableOpacity
              style={styles.selectBtn}
              onPress={() => {
                setModalVisible(!modalVisible);
                addElement();
              }}
            >
              <Text style={styles.selectBtnTxt}>Select</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

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

      {/* By passing extraData={selectedId} to FlatList we make sure FlatList itself will re-render
      //  when the state changes. Without setting this prop, FlatList would not know it needs to re-render 
      // any items because it is a PureComponent and the prop comparison will not show any changes. */}

      <SafeAreaView style={styles.safeContainer}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={exampleState}
          // renderItem = {item => (<Text>{item.item.text}</Text>)}
          renderItem={(item) =>
            reminderItem(item.item.text, item.item.custom, item.item.id)
          }
          // extraData={this.state} // this is how you force flatlist to rerender
          extraData={CheckedBox}
        />
      </SafeAreaView>
      {/* <TouchableOpacity
          onPress={addElement}
          style={styles.checkItem}>
          <Text style={styles.question}>Add element</Text>
      </TouchableOpacity> */}

      {/* <TouchableOpacity
            style={styles.checkItem}
            onPress={() => setCheckBox1(!CheckBox1)}
            activeOpacity={0.6}
          >
            <CheckBox selected={CheckBox1} />
            <Text style={styles.checkboxText}>On their birthday</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.checkItem}
            onPress={() => setCheckBox2(!CheckBox2)}
            activeOpacity={0.6}
          >
            <CheckBox selected={CheckBox2} />
            <Text style={styles.checkboxText}>1 day before</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.checkItem}
            onPress={() => setCheckBox3(!CheckBox3)}
            activeOpacity={0.6}
          >
            <CheckBox selected={CheckBox3} />
            <Text style={styles.checkboxText}>1 week before</Text>
          </TouchableOpacity> */}

      {/* ADD CUSTOM BUTTON */}
      {/* when clicked, it brings user to another page where the user can add more */}
      {/* can finish from there, or if press back, have somewhere that includes */}
      {/* the added dates */}
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
    // marginBottom: 0,
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
    // marginTop: 50,
    position: "absolute",
    bottom: 60,
    backgroundColor: "#282828",
    width: 65,
    height: 65,
    justifyContent: "center",
    alignItems: "center",
  },

  nextBtnText: {
    // marginTop: 10,
    position: "absolute",
    bottom: 30,
    color: "#424242",
    fontSize: 18,
    alignSelf: "center",
    fontWeight: "bold",
    fontFamily: "Futura",
  },

  checkItem: {
    width: "100%",
    flexDirection: "row",
    borderColor: "black",
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

  safeContainer: {
    width: "100%",
    height: "60%",
  },

  modalView: {
    // margin: 20,
    width: "88%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 30,
  },

  selectBtn: {
    width: "91%",
    backgroundColor: "#E960FF",
    alignItems: "center",
    borderRadius: 5,
    paddingVertical: 10,
    marginBottom: 10,
  },

  selectBtnTxt: {
    color: "white",
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
