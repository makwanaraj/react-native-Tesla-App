import React from 'react';
import { Image, View } from "react-native";
import styles from './styles';

const Header = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/logo.png')} />
      <Image style={styles.menu} source={require('../../assets/menu.png')} />
    </View>
  );
}

export default Header;