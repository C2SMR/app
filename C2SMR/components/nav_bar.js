import React from "react";
import { Pressable, View } from "react-native";
import { container_styles } from "../styles/container";
import { color_black, color_blue_dark } from "../styles/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { settings_styles } from "../styles/settings";

export class Nav_bar extends React.Component {
  constructor({ props, number_page, set_name }) {
    super(props);
    this.state = {
      set_name: set_name,
    };
    this.number_page = number_page;
    this.lst_home_icon = ["home", "alert", "camera", "map", "settings"];
  }

  render() {
    return (
      <View style={[container_styles.nav_bar, settings_styles.flex_container]}>
        {this.lst_home_icon.map((a, i) => (
          <Pressable
            key={"press-icon-" + i.toString()}
            onPress={() => {
              this.state.set_name(a);
            }}
          >
            <Ionicons
              key={"icon-" + i.toString()}
              name={a}
              size={20}
              color={i === this.number_page ? color_blue_dark : color_black}
            />
          </Pressable>
        ))}
      </View>
    );
  }
}
