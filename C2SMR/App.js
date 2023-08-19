import { StatusBar } from 'expo-status-bar';
import React from "react";
import { View } from 'react-native';
import {Home} from "./pages/home";

export default class App extends React.Component {
    render() {
        return (
            <View>
                <Home/>
                <StatusBar style="auto"/>
            </View>
        );
    }
}

