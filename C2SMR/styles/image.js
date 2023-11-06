import { Dimensions, StyleSheet } from "react-native";

export const images_styles = StyleSheet.create({
  alert_image: {
    width: Dimensions.get("window").width * 0.8,
    height: 400,
    position: "absolute",
    zIndex: 3,
    marginLeft: Dimensions.get("window").width * 0.05,
  },

  pop_up_container: {
    width: Dimensions.get("window").width,
    height: 400,
    position: "absolute",
    zIndex: 2,
    elevation: 10,
  },

  actual_picture: {
    width: "90%",
    height: "60%",
    borderRadius: 20,
    elevation: 10,
  },
});
