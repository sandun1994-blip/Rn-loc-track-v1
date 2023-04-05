import React from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import {useNavigation} from "@react-navigation/native";

export default function HomeSearch() {
  const navigation = useNavigation();
  const goToSearch = () => {
    navigation.navigate("DestinationSearch");
  };
  return (
    <>
      <Pressable style={styles.inputBox} onPress={goToSearch}>
        <Text style={styles.inputText}>Where to</Text>

        <View style={styles.timeContainer}>
          <AntDesign name={"clockcircle"} size={16} />
          <Text>Now</Text>
          <MaterialIcons name={"keyboard-arrow-down"} size={16} />
        </View>
      </Pressable>

      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <AntDesign name={"clockcircle"} size={16} color={"#ffffff"} />
        </View>

        <Text style={styles.destinationText}>Latest Dilevery</Text>
      </View>

      <View style={styles.row}>
        <View style={[styles.iconContainer, {backgroundColor: "#285180"}]}>
          <Entypo name={"home"} size={16} color={"#ffffff"} />
        </View>

        <Text style={styles.destinationText}>Latest Dilevery</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: "#b0b0b0",
    margin: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#6e6e6e",
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 100,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    alignItems: 'center',
    borderColor: "#b3b3b3",
    padding: 20,
  },
  iconContainer: {
    backgroundColor: "#b3b3b3",
    padding: 10,
    borderRadius: 25,
  },
  destinationText: {
    marginLeft: 10,
    fontWeight: 500,
    fontSize: 15,
  },
});
