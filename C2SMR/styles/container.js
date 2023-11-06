import { Dimensions, StyleSheet } from "react-native";
import {
  color_beige_light,
  color_blue_dark,
  color_dark_grey,
  color_white,
} from "./colors";

export const container_styles = StyleSheet.create({
  container_circle_alert: {
    width: Dimensions.get("window").width * 0.5,
    height: 100,
    marginTop: Dimensions.get("window").height * 0.1,
    backgroundColor: color_white,
    borderRadius: 20,
    elevation: 5,
  },

  container_flag: {
    width: Dimensions.get("window").width * 0.3,
    height: 100,
    marginTop: Dimensions.get("window").height * 0.1,
    backgroundColor: color_white,
    borderRadius: 20,
    elevation: 5,
  },

  nav_bar: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.1,
    borderTopWidth: 1,
    borderTopColor: color_white,
    backgroundColor: color_dark_grey,
    position: "absolute",
    top: Dimensions.get("window").height * 0.9,
    zIndex: 2,
    elevation: 10,
  },

  home_text: {
    marginTop: Dimensions.get("window").height * 0.1,
    marginBottom: -(Dimensions.get("window").height * 0.05),
    marginLeft: 24,
  },

  graph: {
    borderRadius: 20,
    width: Dimensions.get("window").width ,
    height: 300,
    marginTop: 20,
  },

  btn: {
    width: Dimensions.get("window").width * 0.5,
    height: 50,
    elevation: 20,
    backgroundColor: color_white,
    borderRadius: 50,
    marginLeft: Dimensions.get("window").width * 0.25,
    marginTop: 50,
  },

  round_btn: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: color_white,
    elevation: 20,
    marginLeft: Dimensions.get("window").width - 100,
    marginTop: 75,
    marginBottom: -30,
  },

  card: {
    width: Dimensions.get("window").width * 0.8,
    height: 100,
    backgroundColor: color_white,
    borderRadius: 20,
    elevation: 5,
    marginLeft: Dimensions.get("window").width * 0.1,
    marginTop: 50,
  },

  reload_center_btn: {
    width: 50,
    height: 50,
    borderRadius: 50,
    elevation: 1,
    backgroundColor: color_blue_dark,
    marginLeft: Dimensions.get("window").width * 0.5 - 25,
    position: "absolute",
    top: Dimensions.get("window").height * 0.8,
    zIndex: 2,
  },

  checkbox: {
    width: Dimensions.get("window").width * 0.8,
    marginLeft: Dimensions.get("window").width * 0.1,
    height: 70,
    marginTop: 50,
    borderRadius: 20,
    backgroundColor: color_white,
    elevation: 2,
  },

  connect_card: {
    position: "absolute",
    top: Dimensions.get("window").height * 0.4,
    width: Dimensions.get("window").width,
    height: 270,
  },

  connect_btn: {
    width: "70%",
    height: 50,
    borderRadius: 20,
    backgroundColor: color_blue_dark,
  },

  input: {
    backgroundColor: color_white,
    borderRadius: 20,
    width: Dimensions.get("window").width * 0.8,
    height: 45,
    marginBottom: 20,
    paddingLeft: 20,
    marginLeft: Dimensions.get("window").width * 0.1,
    display: "flex",
    justifyContent: "center",
  },

  choice_city: {
    backgroundColor: color_blue_dark,
    borderRadius: 20,
    textAlign: "center",
    width: Dimensions.get("window").width * 0.8,
    marginLeft: Dimensions.get("window").width * 0.1,
    height: 70,
    elevation: 5,
    marginTop: 20,
  },
});
