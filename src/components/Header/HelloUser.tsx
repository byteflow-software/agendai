import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function HelloUser() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Olá,</Text>
      <Text style={styles.username}>Ryan</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
  },
  label: {
    color: "#333",
    fontSize: 14,
    fontFamily: "Outfit-Regular",
  },
  username: {
    color: "#3097E1",
    fontSize: 20,
    fontFamily: "Outfit-Bold",
  },
});
