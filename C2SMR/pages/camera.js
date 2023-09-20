import React from "react";
import { Pressable, View, Image } from "react-native";
import { Nav_bar } from "../components/nav_bar";
import { color_black } from "../styles/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { settings_styles } from "../styles/settings";
import { container_styles } from "../styles/container";
import { images_styles } from "../styles/image";
import { url_api } from "../modules/env";

export class Camera extends React.Component {
  constructor({ props, set_name, city }) {
    super(props);
    this.city = city;
    this.state = {
      set_page_name: set_name,
      path_picture: "",
    };
    this.get_path_picture();
  }

  get_path_picture() {
    fetch(url_api + "/get_picture", {
      method: "POST",
      body: JSON.stringify({
        city: this.city + ".png",
      }),
    })
      .then((r) => r.json())
      .then((r) => {
        this.setState({
          path_picture: r["picture"],
        });
      });
  }

  render() {
    return (
      <View>
        {/*IMAGE STEP*/}
        {this.state.path_picture !== "" ? (
          <Image
            style={images_styles.actual_picture}
            source={{
              uri: "data:image/png;base64," + this.state.path_picture,
            }}
          ></Image>
        ) : (
          ""
        )}

        {/*RELOAD STEP*/}
        <Pressable
          onPress={() => {
            this.get_path_picture();
          }}
          style={[
            settings_styles.flex_container,
            container_styles.reload_center_btn,
          ]}
        >
          <Ionicons name="reload-outline" size={30} color={color_black} />
        </Pressable>

        <Nav_bar number_page={2} set_name={this.state.set_page_name} />
      </View>
    );
  }
}
