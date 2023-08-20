import {Dimensions, StyleSheet} from "react-native";
import {color_beige_light, color_blue_dark, color_blue_light, color_blue_light_less_opacity} from "./colors";

export const settings_styles = StyleSheet.create({
    background: {
        margin : 0,
        padding : 0,
        backgroundColor : color_blue_light_less_opacity,
        width : Dimensions.get("window").width,
        height : Dimensions.get("window").height + 50
    },

    flex_container: {
        justifyContent : "space-around",
        alignItems : "center",
        display : "flex",
        flexDirection : "row"
    },

    basic_font : {
        fontSize : 24
    }
});
