import { View, Text, StyleSheet } from "react-native";
import React from "react";
import TimeReservationButton from "./TimeReservationButton";
import BlockedReservation from "./BlockedReservation";
import { IScheduling } from '@/src/store/root/interfaces';

type HourGroupProps = {
  scheduling: IScheduling
  hour: {
    hour: string;
    avaible: boolean;
  };
  navigation: any;
};

export default function HourGroup({ hour, navigation, scheduling }: HourGroupProps) {
  return (
    <View style={styles.container}>
      <View style={styles.hour}>
        <Text style={styles.hourText}>{hour.hour}</Text>
      </View>
      <View style={styles.action}>
        <View style={styles.divisor} />
        {hour.avaible && <TimeReservationButton navigation={navigation} scheduling={scheduling} />}
        {!hour.avaible && <BlockedReservation />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
  },
  hour: {
    flex: 0.25,
  },
  hourText: {
    color: "#999",
    fontSize: 14,
    fontFamily: "Outfit-Regular",
  },
  action: {
    flex: 1,
    gap: 10,
  },
  divisor: {
    height: 2,
    width: "100%",
    backgroundColor: "#eee",
  },
});
