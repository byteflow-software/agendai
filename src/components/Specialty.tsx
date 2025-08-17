import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { ISpecialtys } from "../store/root/interfaces";

type SpecialtyProps = {
  specialtys: ISpecialtys[];
};

export default function Specialty({ specialtys }: SpecialtyProps) {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          gap: 15,
          height: "100%",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {specialtys.map((specialty: ISpecialtys, index: number) => {
          return (
            <View key={index}>
              {specialty.active && (
                <TouchableOpacity style={styles.specialtyActive}>
                  <Text style={styles.specialtyActiveText}>
                    {specialty.value}
                  </Text>
                </TouchableOpacity>
              )}
              {!specialty.active && (
                <TouchableOpacity style={styles.specialty}>
                  <Text style={styles.specialtyText}>{specialty.value}</Text>
                </TouchableOpacity>
              )}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 15,
    flexDirection: "row",
    paddingVertical: 10,
  },
  specialtyActive: {
    backgroundColor: "#3097E1",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
  },
  specialtyActiveText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Outfit-Regular",
  },
  specialty: {
    backgroundColor: "#3097E115",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
  },
  specialtyText: {
    color: "#3097E1",
    fontSize: 14,
    fontFamily: "Outfit-Regular",
  },
});
