import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonsContainer: {
    position: 'absolute',
    bottom: 50,
    width: "100%"
  },

  carContainer: {
    height: Dimensions.get('window').height,
    width: "100%"
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute"
  },

  titles: {
    marginTop: "20%",
    width: "100%",
    alignItems: 'center',
  },

  title: {
    fontSize: 40,
    fontWeight: "500"
  },

  subTitle: {
    fontSize: 18,
    color: "#101010"
  },

  subtitleCTA: {
    textDecorationLine: 'underline',
  }
});

export default styles;