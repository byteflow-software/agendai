import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { ComponentType } from "react";

type MenuButtonProps = {
  label: string;
  active: boolean;
  Icon: ComponentType;
  onClick: () => void;
};

export default function MenuButton({
  label,
  Icon,
  active,
  onClick,
}: MenuButtonProps) {
  return (
    <>
      {active && (
        <View style={styles.activedMenuContainer}>
          <TouchableOpacity onPress={onClick} style={styles.activedMenu}>
            <Icon />
            <Text style={styles.activedMenuText}>{label}</Text>
          </TouchableOpacity>
        </View>
      )}
      {!active && (
        <View style={styles.menu}>
          <TouchableOpacity onPress={onClick} style={styles.menuIconContainer}>
            <Icon />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  activedMenuContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  activedMenu: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 5,
    backgroundColor: "#3097E120",
  },
  menuIconContainer: {},
  activedMenuText: {
    color: "#3097E1",
    fontSize: 14,
    fontFamily: "Outfit-Medium",
  },
});
