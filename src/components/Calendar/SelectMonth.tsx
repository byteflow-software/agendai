import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import IconArrowSelect from "../Icons/IconArrowSelect";

type SelectMonthProps = {
  months: any;
  selectedMonth: number;
  menuClick: (index: number) => void;
};

export default function SelectMonth({
  months,
  selectedMonth,
  menuClick,
}: SelectMonthProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.select}
        onPress={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
      >
        <Text style={styles.selectText}>{months[selectedMonth]}</Text>
        {!isOpen && (
          <View style={styles.iconContainer}>
            <IconArrowSelect />
          </View>
        )}
        {isOpen && (
          <View style={styles.iconContainerActived}>
            <IconArrowSelect />
          </View>
        )}
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.menu}>
          {months.map((month: any, index: number) => {
            return (
              <View key={index}>
                {index == selectedMonth && (
                  <TouchableOpacity
                    disabled
                    activeOpacity={0.5}
                    style={styles.menuItem}
                    key={index}
                  >
                    <Text style={[styles.menuItemText, { color: "#3097E1" }]}>
                      {month}
                    </Text>
                  </TouchableOpacity>
                )}
                {index != selectedMonth && (
                  <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.menuItem}
                    key={index}
                    onPress={() => {
                      setIsOpen(false);
                      menuClick(index);
                    }}
                  >
                    <Text style={styles.menuItemText}>{month}</Text>
                  </TouchableOpacity>
                )}
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 10,
  },
  select: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#eee",
    shadowColor: "#E3E3E3",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menu: {
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    overflow: "hidden",
  },
  menuItem: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
  },
  selectText: {
    color: "#3097E1",
    fontSize: 16,
    fontFamily: "Outfit-Regular",
  },
  menuItemText: {
    color: "#999",
    fontSize: 16,
    fontFamily: "Outfit-Regular",
  },
  iconContainer: {},
  iconContainerActived: {
    transform: [{ rotate: "180deg" }],
  },
});
