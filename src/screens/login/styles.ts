import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap:20,
    width: "100%",
  },
  boxTop: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  boxMid: {
    width: "100%",
    paddingHorizontal: 37,
  },
  boxBottom: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 37,
    paddingVertical: 10,
  },
  logo: {
    width: 150,
    height: 100,
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
  },
  label: {
    marginTop: 20,
    marginLeft: 5,
    color: themas.colors.basefont,
  },
  boxInput: {
    width: "100 %",
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: themas.colors.lightGray,
    borderColor: themas.colors.lightGray,
  },
  input: {
    width: "90%",
    height: "100%",
    paddingHorizontal: 10,
  },
  button: {
    height: 50,
    width: "100%",
    borderRadius: 10,
    backgroundColor: themas.colors.secondary,
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  textButton: {
    fontSize: 16,
    color: "#FFFF",
    fontWeight: "bold",
  },
  textBottom: {
    marginTop: 15,
  },
  error: {
    fontSize: 12,
    color: "red",
    paddingInline: 10,
    marginTop: 2,
  },
});
