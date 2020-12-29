import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  carContainer: {
    height: "100%",
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
  }
});

export default styles;