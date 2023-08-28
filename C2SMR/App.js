import { StatusBar } from 'expo-status-bar';
import React from "react";
import { View } from 'react-native';
import {Home} from "./pages/home";
import {Camera} from "./pages/camera";
import {Map} from "./pages/map";
import {Settings} from "./pages/settings";
import {Alert} from "./pages/alert";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page_name : "home"
        }
        this.setData = this.setData.bind(this);
    }

    setData(data) {
        this.setState({
            page_name: data
        });
    }

    render() {
        console.log(this.state.page_name)
        return (
            <View>
                {
                    this.state.page_name === "home"
                    ?
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

