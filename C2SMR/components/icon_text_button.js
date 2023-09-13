import { Pressable, Text } from "react-native";
import { settings_styles } from "../styles/settings";
import { container_styles } from "../styles/container";
import Ionicons from "@expo/vector-icons/Ionicons";
import { text_styles } from "../styles/text";
import React from "react";

export class Icon_text_button extends React.Component {
  constructor({ props, text, icon, color, action }) {
    super(props);
    this.text = text;
    this.icon = icon;
    this.color = color;
    this.action = action;
  }

  render() {
    return (
      <Pressable
        style={[settings_styles.flex_container_center, container_styles.btn]}
        onPress={() => {
          this.action();
        }}
      >
        <Ionicons name={this.icon} size={20} color={this.color} />
        <Text style={[settings_styles.basic_font, text_styles.btn_text]}>
          {this.text}
        </Text>
      </Pressable>
    );
  }
}
