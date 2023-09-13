import React from "react";
import { View, Text } from "react-native";
import { settings_styles } from "../styles/settings";
import { round_alert_styles } from "../styles/alert";

export class Alert_circle extends React.Component {
  constructor({ color, number }) {
    super(undefined);
    this.color = color;
    this.number = number;
  }

  render() {
    return (
      <View
        style={[
          { backgroundColor: this.color },
          round_alert_styles.background,
          settings_styles.flex_container,
        ]}
      >
        <Text style={[settings_styles.basic_font, round_alert_styles.font]}>
          {this.number}
        </Text>
      </View>
    );
  }
}
