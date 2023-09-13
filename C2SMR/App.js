import { StatusBar } from 'expo-status-bar';
import React from "react";
import { View } from 'react-native';
import {Home} from "./pages/home";
import {Camera} from "./pages/camera";
import {Map} from "./pages/map";
import {Settings} from "./pages/settings";
import {Alert} from "./pages/alert";
import {getData} from "./modules/data";
import {Connect} from "./pages/connect";
import {useFonts} from "expo-font";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        const [_] = useFonts({
            'my-font': require("./assets/font.otf"),
        });
        this.state = {
            page_name : "connect",
            is_connected : getData("city")
        }
        this.setData = this.setData.bind(this);

    }

    setData(data) {
        this.setState({
            page_name: data,
            is_connected : getData("city")
        });
    }

    render() {
        console.log(this.state)
        return (
            <View>
                {
                    this.state.page_name === "home" || this.state.page_name === "connect"
                    ?
                        !this.state.is_connected["_j"] && this.state.page_name === "connect"
                        ?
                            <Connect set_name={this.setData}/>
                        :
                            <Home set_name={this.setData}/>
                    :
                        ""
                }
                {
                    this.state.page_name === "alert"
                        ?
                        <Alert set_name={this.setData}/>
                        :
                        ""
                }
                {
                    this.state.page_name === "camera"
                        ?
                        <Camera set_name={this.setData}/>
                        :
                        ""
                }
                {
                    this.state.page_name === "map"
                        ?
                        <Map set_name={this.setData}/>
                        :
                        ""
                }
                {
                    this.state.page_name === "settings"
                        ?
                        <Settings set_name={this.setData}/>
                        :
                        ""
                }
                <StatusBar style="auto"/>
            </View>
        );
    }
}

