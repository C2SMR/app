import React from "react";
import { ScrollView, View } from "react-native";
import { Nav_bar } from "../components/nav_bar";
import { settings_styles } from "../styles/settings";

import { color_blue_dark, color_red } from "../styles/colors";
import * as Linking from "expo-linking";
import { Icon_text_button } from "../components/icon_text_button";
import { Label } from "../components/label";
import { Configuration } from "../components/configuration";
import { removeData } from "../modules/data";

export class Settings extends React.Component {
  constructor({ props, set_name, city }) {
    super(props);
    this.city = city;
    this.state = {
      set_page_name: set_name,
      name_of_the_city: this.city,
    };
  }

  render() {
    return (
      <View>
        <View style={[settings_styles.background]}>
          <ScrollView style={settings_styles.scroll_container}>
            <Label text={"Type de notification : "} />
            <View style={{ height: 50 }}></View>
            <Configuration
              value={false}
              text={"Alertes de type rouge"}
              level_notif={"red"}
            />
            <Configuration
              value={false}
              text={"Alertes de type orange"}
              level_notif={"orange"}
            />
            <Configuration
              value={false}
              text={"Alertes de type verte"}
              level_notif={"green"}
            />

            {/*END BUTTON */}
            <View style={{ height: 50 }}></View>
            <Icon_text_button
              text={"Contact"}
              icon={"mail-outline"}
              color={color_blue_dark}
              action={() => {
                Linking.openURL("mailto:victordalet@protonmail.com").then((r) =>
                  console.log(r),
                );
              }}
            />
            <Icon_text_button
              text={"Déconnection"}
              icon={"log-in-outline"}
              color={color_red}
              action={() => {
                removeData("email-c2smr-").then(
                  this.state.set_page_name("connect"),
                );
              }}
            />

            <View style={settings_styles.void_container_for_scroll_view}></View>
          </ScrollView>
        </View>
        <Nav_bar number_page={4} set_name={this.state.set_page_name} />
      </View>
    );
  }
}
