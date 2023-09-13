import { StyleSheet } from "react-native";
import { color_black, color_blue_dark, color_white } from "./colors";

export const text_styles = StyleSheet.create({
  index_font_home_page: {
    fontSize: 14,
    top: 10,
    color: color_blue_dark,
  },

  label_font_home_page: {
    fontSize: 24,
    color: color_black,
    fontWeight: "bold",
  },

  btn_text: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 12,
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: color_white,
  },

  connect_text: {
    fontSize: 16,
    fontWeight: "bold",
    color: color_white,
  },
});
