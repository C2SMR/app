import {Dimensions, StyleSheet} from "react-native";
import {color_beige_light, color_blue_dark, color_blue_light, color_white} from "./colors";

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
    },

    btn : {
        width : Dimensions.get("window").width * .5,
        height : 50,
        elevation : 20,
        backgroundColor : color_white,
        borderRadius : 50,
        marginLeft : Dimensions.get("window").width * .25,
        marginTop : 50
    },


    round_btn: {
        width : 50,
        height : 50,
        borderRadius : 50,
        backgroundColor : color_white,
        elevation : 20,
        marginLeft : Dimensions.get("window").width - 100,
        marginTop : 75,
        marginBottom : -30
    },

    card : {
        width : Dimensions.get("window").width * .8,
        height : 100,
        backgroundColor : color_white,
        borderRadius : 20,
        elevation : 5,
        marginLeft : Dimensions.get("window").width * .1,
        marginTop : 50
    },

    reload_center_btn: {
        width : 50,
        height : 50,
        borderRadius : 50,
        elevation : 1,
        backgroundColor : color_beige_light,
        marginLeft : Dimensions.get("window").width * .5 - 25,
        position : "absolute",
        top : Dimensions.get("window").height * .85,
        zIndex : 2
    },

    checkbox: {
        width : Dimensions.get("window").width * .8,
        marginLeft : Dimensions.get("window").width *.1,
        height : 70,
        marginTop : 50,
        borderRadius : 20,
        backgroundColor : color_white,
        elevation : 2
    },

    connect_card: {
        position : "absolute",
        top : Dimensions.get("window").height * .5,
        width : Dimensions.get("window").width * .8,
        marginLeft : Dimensions.get("window").width * .1,
        height : 270,
        backgroundColor : color_white,
        zIndex : 2,
        borderRadius : 20,
        elevation : 5
    },

    connect_btn: {
        width : '70%',
        height : 50,
        borderRadius : 20,
        backgroundColor : color_blue_dark
    },

    input : {
        backgroundColor : color_white,
        borderColor  : color_blue_light,
        borderStyle : "solid",
        borderWidth : 3,
        borderRadius : 5,
        width : '80%',
        height : 45,
        marginBottom : 20,
        paddingLeft : 20,
        display : "flex",
        justifyContent : "center"
    }
})
