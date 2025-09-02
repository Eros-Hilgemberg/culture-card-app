import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 25,
  },
  container_loading: {
    flex: 1,
    padding: 16,
    gap: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  item: {
    padding: 24,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
