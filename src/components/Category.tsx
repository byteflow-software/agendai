import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { ComponentType } from "react";

type CategoryProps = {
  label: string;
  size: string;
  onClick: () => void;
  Icon: ComponentType;
};

export default function Category({
  label,
  Icon,
  size,
  onClick,
}: CategoryProps) {
  return (
    <>
      {size == "normal" && (
        <TouchableOpacity onPress={onClick} style={styles.container}>
          <Icon />
          <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
      )}
      {size == "largest" && (
        <TouchableOpacity onPress={onClick} style={styles.containerXl}>
          <Icon />
          <Text style={styles.labelXl}>{label}</Text>
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3097E1",
    padding: 25,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    flex: 1,
  },
  label: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Outfit-Regular",
  },
  containerXl: {
    backgroundColor: "#3097E115",
    padding: 25,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    flex: 1,
  },
  labelXl: {
    color: "#3097E1",
    fontSize: 20,
    fontFamily: "Outfit-Bold",
  },
});
