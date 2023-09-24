import React from "react";
import { View } from "react-native";
import { Nav_bar } from "../components/nav_bar";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { images_styles } from "../styles/image";
import { url_api } from "../modules/env";

export class Map extends React.Component {
  constructor({ props, set_name, city }) {
    super(props);
    this.city = city;
    this.state = {
      set_page_name: set_name,
      init_position: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      pointer_position: [],
    };
    this.get_data();
  }

  get_data() {
    // all pointer position
    fetch(url_api + "/get_all_position", {
      method: "POST",
      body: JSON.stringify({
        city: this.city,
      }),
    })
      .then((r) => r.json())
      .then((r) => {
        this.setState({
          pointer_position: r["data"],
        });
        // Change init Region
        r["data"].map((array) => {
          if (array[2] === this.city[0]) {
            this.setState({
              init_position: {
                latitude: array[0],
                longitude: array[1],
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              },
            });
          }
        });
      });
  }

  render() {
    return (
      <View>
        {this.state.init_position.latitude !== 0 ? (
          <MapView
            initialRegion={this.state.init_position}
            style={images_styles.actual_picture}
          >
            {this.state.pointer_position.map((a, i) => (
              <Marker
                key={"mark-" + i.toString()}
                coordinate={{ latitude: a[0], longitude: a[1] }}
                title={a[2]}
                description={"nb alert : " + a[3].toString()}
              />
            ))}
          </MapView>
        ) : (
          ""
        )}
        <Nav_bar number_page={3} set_name={this.state.set_page_name} />
      </View>
    );
  }
}
