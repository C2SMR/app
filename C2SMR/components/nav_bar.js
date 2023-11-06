import React from "react";
import { Pressable, View } from "react-native";
import { container_styles } from "../styles/container";
import { color_blue_dark, color_white } from "../styles/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { settings_styles } from "../styles/settings";

export class Nav_bar extends React.Component {
  constructor({ props, number_page, set_name }) {
    super(props);
    this.state = {
      set_name: set_name,
    };
    this.number_page = number_page;
    this.lst_home_icon = ["home", "alert", "settings"];
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
              size={25}
              color={i === this.number_page ? color_blue_dark : color_white}
            />
          </Pressable>
        ))}
      </View>
    );
  }
}
