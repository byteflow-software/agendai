import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { IDoctor, IDoctorNearby } from "@/src/store/root/interfaces";
import IconLocation from "./Icons/IconLocation";
import IconCalendar from "./Icons/IconCalendar";
import IconClock from "./Icons/IconClock";
import { doctorImages } from "../utils/DoctorImageMap";

type DoctorCardProps = {
  doctor: IDoctorNearby | any;
  distance: boolean;
  clickCard?: boolean;
  actionButton: boolean;
  navigation?: any;
};

export default function DoctorCard({
  doctor,
  distance,
  clickCard,
  actionButton,
  navigation,
}: DoctorCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={clickCard ? 0.7 : 1}
      onPress={
        clickCard
          ? () => navigation.navigate("DoctorDetail", { doctor })
          : () => {}
      }
      style={styles.container}
    >
      <View style={styles.cardHeader}>
        <Image
          style={styles.image}
          source={doctorImages[doctor.imageUrl]}
        ></Image>
        <View style={styles.doctorLabel}>
          <Text style={styles.doctorName}>{doctor?.doctor?.name}</Text>
          <Text style={styles.doctorRole}>{doctor?.doctor?.role}</Text>
        </View>
        {distance && (
          <View style={styles.distanceContainer}>
            <IconLocation />
            <Text style={styles.distanceText}>{doctor?.distance} KM</Text>
          </View>
        )}
      </View>
      <View style={styles.divisor} />
      <View>
        <View
          style={[
            styles.openingDateHoursContainer,
            { paddingBottom: actionButton ? 15 : 0 },
          ]}
        >
          <View style={styles.openingContainer}>
            <IconCalendar />
            <Text style={styles.openingDate}>{doctor?.openingDate}</Text>
          </View>
          <View
            style={[styles.openingContainer, { justifyContent: "flex-end" }]}
          >
            <IconClock />
            <Text style={styles.openingHour}>{doctor?.openingHour}</Text>
          </View>
        </View>
        {actionButton && (
          <TouchableOpacity
            onPress={() => navigation.navigate("DoctorDetail", { doctor })}
            style={styles.cardAction}
          >
            <Text style={styles.cardActionText}>Detalhes</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#eee",
    shadowColor: "#E3E3E3",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
    padding: 20,
  },
  image: {
    height: 60,
    objectFit: "cover",
    width: 60,
    borderRadius: 100,
  },
  title: {
    color: "#3097E1",
    fontSize: 16,
    fontFamily: "Outfit-Bold",
  },
  cardActionText: {
    color: "#3097E1",
    fontSize: 14,
    fontFamily: "Outfit-Medium",
  },
  cardAction: {
    borderRadius: 10,
    backgroundColor: "#3097E120",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  cardHeader: {
    flexDirection: "row",
    gap: 15,
    paddingBottom: 15,
    alignItems: "flex-start",
  },
  divisor: {
    height: 1,
    backgroundColor: "#eee",
    width: "100%",
  },
  openingDateHoursContainer: {
    paddingVertical: 15,
    flexDirection: "row",
    gap: 5,
  },
  openingContainer: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    flex: 1,
  },
  openingDate: {
    color: "#999",
    fontSize: 14,
    fontFamily: "Outfit-Regular",
  },
  openingHour: {
    color: "#999",
    fontSize: 14,
    fontFamily: "Outfit-Regular",
  },
  doctorLabel: {
    flex: 1,
  },
  doctorName: {
    color: "#3097E1",
    fontSize: 16,
    fontFamily: "Outfit-Bold",
  },
  doctorRole: {
    color: "#999",
    fontSize: 14,
    fontFamily: "Outfit-Regular",
  },
  distanceContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  distanceText: {
    color: "#999",
    fontSize: 14,
    fontFamily: "Outfit-Regular",
  },
});
