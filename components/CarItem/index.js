import React from "react";
import { View, Text, ImageBackground } from "react-native";
import StyledButton from "../StyledButton";

import styles from "./styles";

const CarItem = (props) => {

  const { name, tagline, taglineCTA, image } = props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        style={styles.image}
        source={image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>{tagline}
          {' '}
          <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
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
    </View>
  );
};

export default CarItem;
