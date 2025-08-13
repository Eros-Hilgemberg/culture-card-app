import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    margin: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 600,
    height: 400,
    transform: [{ rotate: "90deg" }],
    resizeMode: "contain",
  },
});
