import React from "react";
import {Pressable, View, Image} from "react-native";
import {Nav_bar} from "../components/nav_bar";
import {color_black, color_red, color_white} from "../styles/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import {settings_styles} from "../styles/settings";
import {container_styles} from "../styles/container";
import {images_styles} from "../styles/image";

export class Camera extends React.Component {
    constructor({props, set_name}) {
        super(props);
        this.state = {
            set_page_name: set_name,
            path_picture: "https://inspiranium.fr/cdn/54.png"
        }
    }

    render() {
        return(
            <View>

                {/*IMAGE STEP*/}
                <Image
                    style={images_styles.actual_picture}
                    source={{
                        uri: this.state.path_picture,
                    }}
                ></Image>

                {/*RELOAD STEP*/}
                <Pressable style={[settings_styles.flex_container,container_styles.reload_center_btn]}>
                    <Ionicons name="reload-outline" size={30} color={color_black}/>
                </Pressable>


                <Nav_bar number_page={2} set_name={this.state.set_page_name}/>
            </View>
        )
    }
}
