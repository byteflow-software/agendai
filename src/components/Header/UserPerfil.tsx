import { View, Image, StyleSheet } from "react-native";
import React from "react";

export default function UserPerfil() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/empty_user.webp")}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: 45,
    borderRadius: 100,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.8
  },
  image: {
    height: "100%",
    objectFit: "contain",
    width: "100%",
  },
});
