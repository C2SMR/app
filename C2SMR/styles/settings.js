import {Dimensions, StyleSheet} from "react-native";
import {color_beige_light} from "./colors";

export const settings_styles = StyleSheet.create({
    background: {
        margin : 0,
        padding : 0,
        backgroundColor : color_beige_light,
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
