import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import logo from "../assets/logo.png";
const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Image source={logo} style={styles.innerimg} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
  },
  inner: {
    width: 100,
    height: 100,
  },
  innerimg: {
    width: 100,
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default IntroScreen;
