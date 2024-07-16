import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { Home } from "./pages/home";
import { Settings } from "./pages/settings";
import { Alert } from "./pages/alert";
import { Connect } from "./pages/connect";
import { initDB, getCity } from "./modules/db";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page_name: "connect",
      city: "",
    };
    this.setData = this.setData.bind(this);
    this.setCity = this.setCity.bind(this);
  }

  async componentDidMount() {
    initDB();
    const cityCache = await getCity();
    if (cityCache.length > 0) {
      this.setState({ city: cityCache[0].city, page_name: "home" });
    }
  }

  setData(data) {
    this.setState({ page_name: data });
  }

  setCity(city) {
    this.setState({ city: city });
  }

  render() {
    return (
      <View>
        {this.state.page_name === "connect" ? (
          <Connect set_name={this.setData} set_city={this.setCity} />
        ) : null}
        {this.state.page_name === "home" ? (
          <Home set_name={this.setData} city={this.state.city} />
        ) : null}
        {this.state.page_name === "alert" ? (
          <Alert set_name={this.setData} city={this.state.city} />
        ) : null}
        {this.state.page_name === "settings" ? (
          <Settings set_name={this.setData} city={this.state.city} />
        ) : null}
      </View>
    );
  }
}
