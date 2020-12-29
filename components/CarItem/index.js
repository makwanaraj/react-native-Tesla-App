import React from "react";
import { View, Text, ImageBackground } from "react-native";

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
    </View>
  );
};

export default CarItem;
