import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        position: "relative",
        margin: 0,
    },
    card: {
        backgroundColor: "gray",
        position: "absolute",
        transform: [{ rotate: "90deg" }],
        width: "99%",
        height: "45%",
        top: 50

    },
    vertical: {

    }
})