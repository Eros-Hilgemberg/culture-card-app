import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
  bg: {
    backgroundColor: themas.colors.bgScreen,
    height: "100%",
    width: "100%",
    padding: 37,
    gap: 10,
  },
  textTitle: {
    fontSize: 18,
    fontWeight: "medium",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },

  card: {
    backgroundColor: themas.colors.primary,
    width: "100%",
    height: Dimensions.get("window").height / 4,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  imageCard: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  button: {
    width: "auto",
    borderWidth: 1,
    borderColor: "#007bff",
    padding: 10,
    color: "red",
  },
});
