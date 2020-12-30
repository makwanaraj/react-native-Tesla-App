import React from "react";
import { View, Text, ImageBackground } from "react-native";
import StyledButton from "../StyledButton";

import styles from "./styles";

const CarItem = (props) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/ModelX.jpeg")}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subTitle}>Starting at ₹1.50 Cr</Text>
      </View>

      <StyledButton
        type="primary"
        content={"Custom Order"}
        onPress={() => {
          console.warn("Custom Order Pressed");
        }}
      />

      <StyledButton
        content={"Existing Inventory"}
        onPress={() => {
          console.warn("Existing Inventory Pressed");
        }}
      />
    </View>
  );
};

export default CarItem;
