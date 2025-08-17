import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { IDoctor, IScheduling } from "@/src/store/root/interfaces";
import { doctorImages } from "../utils/DoctorImageMap";
import SchedulingStatusTag from "./SchedulingStatusTag";
import IconCalendarMenu from "./Icons/IconCalendarMenu";

type SchedulingCardProps = {
  scheduling: IScheduling;
  doctor: any;
  navigation?: any;
};

export default function SchedulingCard({
  scheduling,
  doctor,
  navigation,
}: SchedulingCardProps) {
  
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        if (navigation) {
          navigation.navigate("SchedulingDetail", { scheduling, doctor });
        }
      }}
      style={styles.container}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={doctorImages[scheduling.imageUrl]}
        ></Image>
      </View>
      <View style={styles.cardHeader}>
        <View style={styles.schedulingLabelContainer}>
          <View style={styles.titleContainer}>
            {/* <IconCalendarMenu /> */}
            <Text style={styles.schedulingName}>#{scheduling.id + 1}</Text>
            <Text style={styles.schedulingName}>
              |  {scheduling.doctor.role}
            </Text>
          </View>
          <View style={[styles.divisor, { marginVertical: 10 }]} />
          <View style={styles.schedulingLabelContent}>
            <Text style={styles.schedulingTag}>Profissional:</Text>
            <Text style={styles.schedulingTagValue}>
              {scheduling.doctor.name}
            </Text>
          </View>
          <View style={styles.schedulingLabelContent}>
            <Text style={styles.schedulingTag}>Status: </Text>
            <SchedulingStatusTag value={scheduling.status} />
          </View>
          <View style={styles.schedulingLabelContent}>
            <Text style={styles.schedulingTag}>Local:</Text>
            <Text style={styles.schedulingTagValue}>{scheduling.address}</Text>
          </View>
        </View>
      </View>
      <View style={styles.divisor} />
      <View style={styles.openingDateHoursContainer}>
        <View style={styles.openingContainer}>
          <Text style={styles.openingDate}>{scheduling.openingDate}</Text>
        </View>
        <View style={[styles.openingContainer, { justifyContent: "flex-end" }]}>
          <Text style={styles.openingHour}>{scheduling.openingHour}</Text>
        </View>
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
    position: "relative",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  imageContainer: {
    position: "absolute",
    top: -10,
    right: 20,
  },
  image: {
    height: 60,
    objectFit: "cover",
    width: 60,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#3097E1",
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
    paddingTop: 15,
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
  schedulingLabelContainer: {
    flex: 1,
    gap: 5,
  },
  schedulingName: {
    color: "#3097E1",
    fontSize: 18,
    fontFamily: "Outfit-Medium",
    bottom: -2,
  },
  schedulingTag: {
    color: "#999",
    fontSize: 14,
    fontFamily: "Outfit-Bold",
  },
  schedulingTagValue: {
    color: "#999",
    fontSize: 14,
    fontFamily: "Outfit-Regular",
    maxWidth: "65%",
    textAlign: "right",
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
  schedulingLabelContent: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
});