import React from "react";
import {View} from 'react-native';
import {settings_styles} from "../styles/settings";
import {Alert_circle} from "../components/alert_circle";
import {color_green, color_orange, color_red} from "../styles/colors";
import {container_styles} from "../styles/container";
import Ionicons from '@expo/vector-icons/Ionicons';

export class Home extends React.Component {
    render() {
        return (
            <View style={[settings_styles.background]}>
                <View style={settings_styles.flex_container}>
                    <View style={[container_styles.container_flag, settings_styles.flex_container]}>
                        <Ionicons name="flag" size={40} color={color_green}/>
                    </View>
                    <View style={[settings_styles.flex_container, container_styles.container_circle_alert]}>
                        <Alert_circle color={color_red} number={"10"}/>
                        <Alert_circle color={color_orange} number={"7"}/>
                        <Alert_circle color={color_green} number={"1"}/>
                    </View>
                </View>
            </View>
        );
    }
}


