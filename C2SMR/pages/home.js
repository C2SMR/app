import React from "react";
import { View, Text, ScrollView, Pressable, Image } from "react-native";
import { settings_styles } from "../styles/settings";
import { Alert_circle } from "../components/alert_circle";
import {
  color_green,
  color_orange,
  color_red,
  color_white,
} from "../styles/colors";
import { container_styles } from "../styles/container";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Nav_bar } from "../components/nav_bar";
import { text_styles } from "../styles/text";
import { Label } from "../components/label";
import { url_api } from "../modules/env";
import { sentences } from "../modules/language";
import { images_styles } from "../styles/image";

export class Home extends React.Component {
  constructor({ props, set_name, city }) {
    super(props);
    this.city = city;
    this.state = {
      set_page_name: set_name,
      color_flag: "green",
      number_red_alert: "",
      number_orange_alert: "",
      number_green_alert: "",
      number_person_detected_on_beach: 0,
      number_person_detection_on_sea: 0,
      data_person_per_hour_on_beach: [],
      data_person_per_hour_on_sea: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      visibility_sea: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      weather_temperature_sea: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      weather_temperature_beach: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      weather_swell: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      weather_wind: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      weather_visibility: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      image_base_64: "",
    };

    this.fetch_speed_data();
    this.fetch_data_graph();
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
            image_base_64: r["picture"],
        });
      });
  }

  fetch_speed_data() {
    // nb person
    fetch(url_api + "/get_nb_person", {
      method: "POST",
      body: JSON.stringify({
        city: this.city,
      }),
    })
      .then((r) => r.json())
      .then((r) => {
        this.setState({
          number_person_detected_on_beach: r["beach"],
          number_person_detection_on_sea: r["sea"],
        });
      });
    // nb alerts
    fetch(url_api + "/get_nb_alert", {
      method: "POST",
      body: JSON.stringify({
        city: this.city,
      }),
    })
      .then((r) => r.json())
      .then((r) => {
        this.setState({
          number_red_alert: r["red"],
          number_orange_alert: r["orange"],
          number_green_alert: r["green"],
        });
      });
    // flag
    fetch(url_api + "/get_flag", {
      method: "POST",
      body: JSON.stringify({
        city: this.city,
      }),
    })
      .then((r) => r.json())
      .then((r) => {
        this.setState({
          color_flag:
            r["flag"] === 0
              ? color_green
              : r["flag"] === 1
              ? color_orange
              : color_red,
        });
      });
  }

  fetch_data_graph() {
    fetch(url_api + "/get_data_list", {
      method: "POST",
      body: JSON.stringify({
        city: this.city,
      }),
    })
      .then((r) => r.json())
      .then((r) => {
        this.setState({
          data_person_per_hour_on_beach: r["data_person_per_hour_on_beach"],
          data_person_per_hour_on_sea: r["data_person_per_hour_on_sea"],
          visibility_sea: r["visibility_sea"],
          weather_temperature_sea: r["weather_temperature_beach"],
          weather_temperature_beach: r["weather_temperature_beach"],
          weather_swell: r["cloud_cover"],
          weather_wind: r["weather_wind"],
          weather_visibility: r["weather_visibility"],
        });
      });
  }

  render() {
    return (
      <View style={[settings_styles.background]}>
        <ScrollView style={settings_styles.scroll_container}>
          {/*FLAG AND NUMBER ALERT STEP*/}
          <View style={settings_styles.flex_container}>
            <View
              style={[
                container_styles.container_flag,
                settings_styles.flex_container,
              ]}
            >
              <Ionicons name="flag" size={40} color={this.state.color_flag} />
            </View>
            <Pressable
              onPress={() => {
                this.state.set_page_name("alert");
              }}
              style={[
                settings_styles.flex_container,
                container_styles.container_circle_alert,
              ]}
            >
              {this.state.number_red_alert !== "" ? (
                <Alert_circle
                  color={color_red}
                  number={this.state.number_green_alert}
                />
              ) : (
                ""
              )}
              {this.state.number_orange_alert !== "" ? (
                <Alert_circle
                  color={color_orange}
                  number={this.state.number_orange_alert}
                />
              ) : (
                ""
              )}
              {this.state.number_red_alert !== "" ? (
                <Alert_circle
                  color={color_green}
                  number={this.state.number_red_alert}
                />
              ) : (
                ""
              )}
            </Pressable>
          </View>

          {/*POPULATION DETECTION STEP*/}
          <Label text={sentences.fr.label_population} />
          <View style={settings_styles.flex_container}>
            <View
              style={[
                settings_styles.flex_container_column,
                container_styles.container_flag,
              ]}
            >
              <Text style={settings_styles.basic_font}>
                {this.state.number_person_detected_on_beach}
              </Text>
              <Text style={text_styles.index_font_home_page}>
                {sentences.fr.beach}
              </Text>
            </View>
            <View
              style={[
                settings_styles.flex_container_column,
                container_styles.container_flag,
              ]}
            >
              <Text style={settings_styles.basic_font}>
                {this.state.number_person_detection_on_sea}
              </Text>
              <Text style={text_styles.index_font_home_page}>
                {sentences.fr.sea}
              </Text>
            </View>
          </View>

          {/*POPULATION NUMBER BY TIME STEP*/}
          <Label text={sentences.fr.label_picture} />
          <View
            style={[settings_styles.flex_container, container_styles.graph]}
          >
            {this.state.image_base_64 === "" ? (
              <View
                style={[
                  settings_styles.flex_container,
                  container_styles.choice_city,
                  { marginLeft: 0, backgroundColor: color_white },
                ]}
              >
                <Text
                  style={[
                    settings_styles.basic_font,
                    { fontSize: 16, textAlign: "center" },
                  ]}
                >
                  Plage non surveillée (Aucune caméra installée)
                </Text>
              </View>
            ) : (
              <Image
                style={images_styles.actual_picture}
                source={{
                  uri: "data:image/png;base64," + this.state.image_base_64,
                }}
              ></Image>
            )}
          </View>

          {/* WEATHER STEP*/}
          <Label text={sentences.fr.label_report_step} />
          <View style={settings_styles.flex_container}>
            <View
              style={[
                settings_styles.flex_container_column,
                container_styles.container_flag,
              ]}
            >
              <Text style={settings_styles.basic_font}>
                {this.state.weather_temperature_beach[0]}
              </Text>
              <Text style={text_styles.index_font_home_page}>
                {sentences.fr.temperature}
              </Text>
            </View>
            <View
              style={[
                settings_styles.flex_container_column,
                container_styles.container_flag,
              ]}
            >
              <Text style={settings_styles.basic_font}>
                {this.state.weather_swell[0]}
              </Text>
              <Text style={text_styles.index_font_home_page}>
                {sentences.fr.cloud_cover}
              </Text>
            </View>
          </View>
          <View style={settings_styles.flex_container}>
            <View
              style={[
                settings_styles.flex_container_column,
                container_styles.container_flag,
              ]}
            >
              <Text style={settings_styles.basic_font}>
                {this.state.weather_wind[0]}
              </Text>
              <Text style={text_styles.index_font_home_page}>
                {sentences.fr.wind}
              </Text>
            </View>
            <View
              style={[
                settings_styles.flex_container_column,
                container_styles.container_flag,
              ]}
            >
              <Text style={settings_styles.basic_font}>
                {this.state.weather_visibility[0]}
              </Text>
              <Text style={text_styles.index_font_home_page}>
                {sentences.fr.visibility}
              </Text>
            </View>
          </View>

          <View style={settings_styles.void_container_for_scroll_view}></View>
        </ScrollView>

        <Nav_bar number_page={0} set_name={this.state.set_page_name} />
      </View>
    );
  }
}
