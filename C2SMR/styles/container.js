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
    }
})
