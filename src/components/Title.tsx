import { View, Text, StyleSheet } from "react-native";
import React from "react";

type TitleProps = {
  value: string;
};

export default function Title({ value }: TitleProps) {
  return (
    <>
      <Text style={styles.title}>{value}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#3097E1",
    fontSize: 24,
    fontFamily: "Outfit-Bold",
  },
});
