import React from "react";
import {View} from "react-native";
import {Nav_bar} from "../components/nav_bar";

export class Map extends React.Component {
    constructor({props, set_name}) {
        super(props);
        this.state = {
            set_page_name: set_name
        }
    }

    render() {
        return(
            <View>
                <Nav_bar number_page={3} set_name={this.state.set_page_name}/>
            </View>
        )
    }
}
