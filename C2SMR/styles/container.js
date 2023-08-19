import {Dimensions, StyleSheet} from "react-native";

export const container_styles = StyleSheet.create({
    container_circle_alert : {
        width : Dimensions.get("window").width * .5,
        height : 200,
        marginLeft : Dimensions.get("window").width * .5
    }
})
