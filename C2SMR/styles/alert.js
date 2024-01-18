import { Dimensions, StyleSheet } from "react-native";
import { color_white } from "./colors";

export const round_alert_styles = StyleSheet.create({
  background: {
    width: Dimensions.get("window").width * 0.05,
    height: Dimensions.get("window").width * 0.05,
    borderRadius: Dimensions.get("window").width * 0.1,
  },

  font: {
    fontSize: 20,
    color: color_white,
  },
});
