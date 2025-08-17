import { View, Text, StyleSheet } from "react-native";
import React from "react";

type SchedulingStatusTagProps = {
  value: string;
};

const statusColors: Record<string, { background: string; text: string }> = {
  "FINALIZADO": { background: "#E0F7EA", text: "#2E7D32" },
  "AGUARDANDO CONSULTA": { background: "#e0e2ffff", text: "#3097E1" },
  "CONSULTA EM ANDAMENTO": { background: "#FFF3E0", text: "#F57C00" },
  "CANCELADO": { background: "#FFEBEE", text: "#C62828" },
};

export default function SchedulingStatusTag({ value }: SchedulingStatusTagProps) {
  const colors = statusColors[value] || { background: "#E0E0E0", text: "#424242" };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.value, { color: colors.text }]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 4,
    alignSelf: "flex-start",
  },
  value: {
    fontSize: 12,
    fontFamily: "Outfit-Bold",
  },
});
