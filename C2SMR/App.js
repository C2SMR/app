import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { Home } from "./pages/home";
import { Settings } from "./pages/settings";
import { Alert } from "./pages/alert";
import { getData } from "./modules/data";
import { Connect } from "./pages/connect";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page_name: "connect",
      is_connected: getData("city"),
      city: "",
    };
    this.setData = this.setData.bind(this);
    this.setCity = this.setCity.bind(this);
  }

  setData(data) {
    this.setState({
      page_name: data,
      is_connected: getData("city"),
    });
  }

  setCity(city) {
    this.setState({
      city: city,
    });
  }

  render() {
    return (
      <View>
        {this.state.page_name === "connect" ? (
          <Connect set_name={this.setData} set_city={this.setCity} />
        ) : (
          ""
        )}
        {this.state.page_name === "home" ? (
          <Home set_name={this.setData} city={this.state.city} />
        ) : (
          ""
        )}
        {this.state.page_name === "alert" ? (
          <Alert set_name={this.setData} city={this.state.city} />
        ) : (
          ""
        )}
        {this.state.page_name === "settings" ? (
          <Settings set_name={this.setData} city={this.state.city} />
        ) : (
          ""
        )}
      </View>
    );
  }
}
