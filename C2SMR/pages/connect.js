import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Pressable, TextInput } from "react-native";
import { text_styles } from "../styles/text";
import { settings_styles } from "../styles/settings";
import { url_api } from "../modules/env";
import { container_styles } from "../styles/container";
import { sentences } from "../modules/language";
import { insertCity } from "../modules/db";

export const Connect = ({ set_name, set_city }) => {
  const [cities, setCities] = useState([]);
  const [citiesFilter, setCitiesFilter] = useState([]);
  const [param, setParam] = useState("");

  useEffect(() => {
    getCityNames();
  }, []);

  const getCityNames = () => {
    fetch(url_api + "/get_name")
      .then((response) => response.json())
      .then((data) => {
        setCities(data.name);
        setCitiesFilter(data.name);
      });
  };

  const updateFilter = (input) => {
    setParam(input);
    const filtered = cities.filter(city =>
      city[0].toUpperCase().includes(input.toUpperCase())
    );
    setCitiesFilter(filtered);
  };

  const selectCity = async (city) => {
    await insertCity(city);
    set_city(city);
    set_name("home");
  };

  return (
    <View>
      <View style={[settings_styles.background]}>
        <ScrollView style={settings_styles.scroll_container}>
          <View style={[settings_styles.flex_container, { marginTop: 100, marginBottom: 100 }]}>
            <Text style={[settings_styles.basic_font, text_styles.title]}>
              {sentences.fr.where_are_you}
            </Text>
          </View>
          <View style={[container_styles.input]}>
            <TextInput
              onChangeText={updateFilter}
              value={param}
              placeholder={"Ex: Etretat"}
            />
          </View>
          {citiesFilter.map((city) => (
            <Pressable
              onPress={() => selectCity(city)}
              style={[settings_styles.flex_container, container_styles.choice_city]}
              key={city}
            >
              <Text style={[settings_styles.basic_font, { textAlign: "center" }]}>
                {city}
              </Text>
            </Pressable>
          ))}
          <View style={settings_styles.void_container_for_scroll_view}></View>
        </ScrollView>
      </View>
    </View>
  );
};
