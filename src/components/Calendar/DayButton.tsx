import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

type DayButtonProps = {
  day: {
    active: boolean;
    dayName: string;
    day: number;
  };
  onClick: () => void;
};

export default function DayButton({ day, onClick }: DayButtonProps) {
  return (
    <>
      {!day.active && (
        <TouchableOpacity onPress={onClick} style={styles.container}>
          <Text style={styles.text}>{day.dayName}</Text>
          <Text style={styles.text}>{day.day}</Text>
        </TouchableOpacity>
      )}
      {day.active && (
        <TouchableOpacity style={styles.containerActived}>
          <Text style={styles.textActived}>{day.dayName}</Text>
          <Text style={styles.textActived}>{day.day}</Text>
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3097E115",
    width: 50,
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: "center",
    gap: 5,
  },
  text: {
    color: "#3097E1",
    fontSize: 14,
    fontFamily: "Outfit-Medium",
  },
  containerActived: {
    backgroundColor: "#3097E1",
    width: 50,
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: "center",
    gap: 5,
  },
  textActived: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Outfit-Medium",
  },
});
