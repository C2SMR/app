import {Dimensions, StyleSheet} from "react-native";
import {color_dark_grey, color_white} from "./colors";

export const settings_styles = StyleSheet.create({
    background: {
        margin: 0,
        padding: 0,
        backgroundColor: color_dark_grey,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height + 50,
    },

    flex_container: {
        justifyContent: "space-around",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
    },

    flex_container_column: {
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
    },

    flex_container_center: {
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
    },

    basic_font: {
        fontSize: 24,
    },

    scroll_container: {
        maxHeight: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
    },

    void_container_for_scroll_view: {
        height: Dimensions.get("window").height * 0.2,
        width: Dimensions.get("window").width,
    },
});

export const chart_graph = {
    backgroundColor: color_white,
    backgroundGradientFrom: color_white,
    backgroundGradientTo: color_white,
    color: (opacity = 1) => `rgba(48, 162, 255, ${opacity})`,
};
