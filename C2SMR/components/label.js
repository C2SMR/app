import React from "react";
import { View, Text } from "react-native";
import { container_styles } from "../styles/container";
import { settings_styles } from "../styles/settings";
import { text_styles } from "../styles/text";

export class Label extends React.Component {
  constructor({ props, text }) {
    super(props);
    this.text = text;
  }

  render() {
    return (
      <View style={container_styles.home_text}>
        <Text
          style={[settings_styles.basic_font, text_styles.label_font_home_page]}
        >
          {this.text}
        </Text>
      </View>
    );
  }
}
