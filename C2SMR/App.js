import { StatusBar } from 'expo-status-bar';
import React from "react";
import { View } from 'react-native';
import {Home} from "./pages/home";
import {Nav_bar} from "./components/nav_bar";

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

