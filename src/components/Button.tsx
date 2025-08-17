import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

type ButtonProps = {
  label: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  onClick: () => void;
};

export default function Button({
  label,
  bgColor,
  textColor,
  borderColor,
  onClick,
}: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onClick}
      style={[
        styles.button,
        { backgroundColor: bgColor, borderColor: borderColor },
      ]}
    >
      <Text style={[styles.buttonText, { color: textColor }]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "#3097E1",
    fontSize: 16,
    fontFamily: "Outfit-Regular",
  },
});
