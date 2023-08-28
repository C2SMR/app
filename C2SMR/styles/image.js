import {Dimensions, StyleSheet} from "react-native";


export const images_styles = StyleSheet.create({

    alert_image : {
        width: Dimensions.get("window").width  *.8,
        height: 400,
        position : "absolute",
        zIndex : 3,
        marginLeft : Dimensions.get("window").width * .05
    },

    pop_up_container : {
        width : Dimensions.get("window").width,
        height : 400,
        position : "absolute",
        zIndex : 2,
        elevation : 10
    },

    actual_picture: {
        width : Dimensions.get("window").width,
        height : Dimensions.get("window").height * 1.1
    }
})
