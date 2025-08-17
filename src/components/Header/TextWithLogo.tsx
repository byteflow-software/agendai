import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

type TextWithLogoProps = {
  label: boolean;
};

export default function TextWithLogo({ label }: TextWithLogoProps) {
  return (
    <>
      <Image
        style={styles.image}
        source={require("../../assets/images/logo.png")}
      ></Image>
      {label && <Text style={styles.title}>Agendai</Text>}
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    height: "100%",
    objectFit: "contain",
    width: 50,
  },
  title: {
    color: "#3097E1",
    fontSize: 16,
    fontFamily: "Outfit-Bold",
    paddingTop: 4,
  },
});
