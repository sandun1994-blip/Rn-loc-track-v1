import {View, Text, StyleSheet} from "react-native";
import React from "react";
import Entypo from "react-native-vector-icons/Entypo";

export default function PlaceRow({data}) {
  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        {data.description === "Home" ? (
          <Entypo name="home" color="white" size={20} />
        ) : (
          <Entypo name="location-pin" color="white" size={20} />
        )}
      </View>
      <Text style={styles.locationText}>
        {data.description || data.vicinity}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {flexDirection: 'row', alignItems: 'center', marginVertical: 10},
  iconContainer: {
    backgroundColor: '#a2a2a2',
    padding: 5,
    borderRadius: 50,
    marginRight: 15,
  },
  locationText: {},
});
