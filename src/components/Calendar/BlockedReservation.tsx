import { View, Text, StyleSheet } from "react-native";
import React from "react";
import IconBlock from "../Icons/IconBlock";

export default function BlockedReservation() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Horário Reservado</Text>
      <IconBlock />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EE707015",
    paddingVertical: 15,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  text: {
    color: "#EE7070",
    fontSize: 16,
    fontFamily: "Outfit-Regular",
  },
});
