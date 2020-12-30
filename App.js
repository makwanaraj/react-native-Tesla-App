import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import CarItem from "./components/CarItem";

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem
        name={"Model S"}
        tagline={"Order Online For"}
        taglineCTA={'Touchable Delivery'}
        image={require("./assets/ModelS.jpeg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
