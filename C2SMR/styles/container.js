import {Dimensions, StyleSheet} from "react-native";
import {color_white} from "./colors";

export const container_styles = StyleSheet.create({
    container_circle_alert : {
        width : Dimensions.get("window").width * .5,
        height : 100,
        marginTop : Dimensions.get("window").height * .1,
        backgroundColor : color_white,
        borderRadius : 20,
        elevation : 5
    },

    container_flag : {
        width : Dimensions.get("window").width * .3,
        height : 100,
        marginTop : Dimensions.get("window").height * .1,
        backgroundColor : color_white,
        borderRadius : 20,
        elevation : 5
    },

    nav_bar: {
        width : Dimensions.get("window").width,
        height : Dimensions.get("window").height * .1,
        backgroundColor : color_white,
        position : "absolute",
        top : Dimensions.get("window").height * .97,
        zIndex : 2,
        elevation : 10,
    },

    home_text : {
        marginTop : Dimensions.get("window").height * .1,
        marginBottom : -(Dimensions.get("window").height * .05),
        marginLeft : 24
    },

    graph : {
        borderRadius : 20,
        elevation : 10,
        backgroundColor : color_white,
        width : Dimensions.get("window").width * .9,
        marginLeft : Dimensions.get("window").width * .05,
        height : 400,
        marginTop : 75,
    }
})
