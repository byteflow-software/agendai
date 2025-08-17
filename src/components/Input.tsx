import { View, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import React, { ComponentType, useState } from "react";
import IconOpenedEyes from "./Icons/IconOpenedEyes";
import IconClosedEyes from "./Icons/IconClosedEyes";

type InputProps = {
  type: any;
  multiline: boolean;
  onChangeText: (text: string) => void;
  value: any;
  placeholder: string;
  Icon: ComponentType;
  maxLength?: number;
};

export default function Input({
  type,
  multiline,
  onChangeText,
  value,
  placeholder,
  maxLength,
  Icon,
}: InputProps) {
  const [showPassword, setShowPassword] = useState<any>(true);

  return (
    <>
      {type != "password" && (
        <>
          {/* {multiline && (
            <View style={styles.textareaContainer}>
              <TextInput
                multiline={multiline}
                style={styles.textarea}
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                keyboardType={type}
                maxLength={maxLength}
                autoCapitalize="none"
                placeholderTextColor="#C1C1C1"
              />
            </View>
          )} */}
          {!multiline && (
            <View style={styles.inputContainer}>
              <View>
                <Icon />
              </View>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                keyboardType={type}
                maxLength={maxLength}
                autoCapitalize="none"
                placeholderTextColor="#C1C1C1"
              />
            </View>
          )}
        </>
      )}
      {type == "password" && (
        <View style={styles.inputContainer}>
          <View>
            <Icon />
          </View>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            onChangeText={onChangeText}
            value={value}
            maxLength={maxLength}
            placeholder={placeholder}
            placeholderTextColor="#C1C1C1"
            secureTextEntry={showPassword}
          />
          <TouchableOpacity
            style={styles.eyeContainer}
            onPress={() => setShowPassword(showPassword ? false : true)}
          >
            {showPassword && <IconOpenedEyes />}
            {!showPassword && <IconClosedEyes />}
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    height: 60,
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#eee",
    shadowColor: "#E3E3E3",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
  },
  eyeContainer: {
    height: "100%",
    justifyContent: "center",
  },
  input: {
    flex: 1,
    height: "100%",
    fontSize: 16,
    fontFamily: "Outfit-Regular",
  },
  textarea: {
    flex: 1,
    height: "100%",
    textAlignVertical: "top",
  },
});
