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

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page_name : "connect",
            is_connected : getData("email-c2smr-")
        }
        this.setData = this.setData.bind(this);

    }

    setData(data) {
        this.setState({
            page_name: data,
            is_connected : getData("email-c2smr-")
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

