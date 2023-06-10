import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainScreen from "./views/MainScreen";
import IntroScreen from "./views/IntroScreen";

export default function App() {
  const [isLoading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 2000);
  return (
    <View style={styles.container}>
      {isLoading ? <MainScreen /> : <IntroScreen />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
