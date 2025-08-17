import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

type TouchableLinkProps = {
  label: string;
};

export default function TouchableLink({ label }: TouchableLinkProps) {
  return (
    <TouchableOpacity>
      <Text style={styles.link}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  link: {
    color: "#3097E1",
    fontSize: 14,
    fontFamily: "Outfit-Regular",
    textAlign: "right",
  },
});
