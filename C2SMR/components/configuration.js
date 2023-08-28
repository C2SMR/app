import React from "react";
import {View, Text} from "react-native"
import Checkbox from 'expo-checkbox';
import {settings_styles} from "../styles/settings";
import {container_styles} from "../styles/container";
import {text_styles} from "../styles/text";
import {color_blue_dark} from "../styles/colors";

export class Configuration extends React.Component {
    constructor({props,value,text}) {
        super(props);
        this.text = text
        this.state = {
            isChecked : value
        }
    }

    render() {
        return (
            <View style={[settings_styles.flex_container,container_styles.checkbox]}>
                <Checkbox
                          value={this.state.isChecked}
                          color={color_blue_dark}
                          onValueChange={()=>{this.setState({isChecked : !this.state.isChecked})}} />
                <Text style={[settings_styles.basic_font,text_styles.btn_text]}>{this.text}</Text>
            </View>
        );
    }
}