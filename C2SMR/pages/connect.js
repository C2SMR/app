import React from "react";
import { View, Text, ScrollView, Pressable, TextInput } from "react-native";
import { text_styles } from "../styles/text";
import { settings_styles } from "../styles/settings";
import { url_api } from "../modules/env";
import { container_styles } from "../styles/container";
import {sentences} from "../modules/language";

export class Connect extends React.Component {
  constructor({ props, set_name, set_city }) {
    super(props);
    this.set_name = set_name;
    this.set_city = set_city;
    this.state = {
      cities: [],
      cities_filter: [],
      param: "",
    };
    this.get_city();
  }

  update_filter() {
    setTimeout(() => {
      const new_filter_list_temp = [];
      this.state.cities.map((a) => {
        if (a[0].split(this.state.param).length !== 1) {
          new_filter_list_temp.push(a);
        }
      });
      this.setState({
        cities_filter: new_filter_list_temp,
      });
    }, 200);
  }

  get_city() {
    fetch(url_api + "/get_name")
      .then((r) => r.json())
      .then((r) => {
        this.setState({
          cities: r["name"],
          cities_filter: r["name"],
        });
      });
  }

  render() {
    return (
      <View>
        <View style={[settings_styles.background]}>
          <ScrollView style={settings_styles.scroll_container}>
            <View
              style={[
                settings_styles.flex_container,
                { marginTop: 100, marginBottom: 100 },
              ]}
            >
              <Text style={[settings_styles.basic_font, text_styles.title]}>
                  {sentences.fr.where_are_you}
              </Text>
            </View>
            <View style={[container_styles.input]}>
              <TextInput
                onChangeText={(letter) => {
                  this.setState({ param: letter });
                  this.update_filter();
                }}
                value={this.state.param}
                placeholder={"Ex: Etretat"}
              />
            </View>
            {this.state.cities_filter.map((a) => (
              <Pressable
                onPress={async () => {
                  this.set_city(a);
                  this.set_name("home");
                }}
                style={[
                  settings_styles.flex_container,
                  container_styles.choice_city,
                ]}
              >
                <Text style={[settings_styles.basic_font]}>{a}</Text>
              </Pressable>
            ))}
            <View style={settings_styles.void_container_for_scroll_view}></View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
