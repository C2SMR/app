import React from "react";
import {View, Text, ScrollView, Dimensions, Pressable} from 'react-native';
import {chart_graph, settings_styles} from "../styles/settings";
import {Alert_circle} from "../components/alert_circle";
import {color_green, color_orange, color_red} from "../styles/colors";
import {container_styles} from "../styles/container";
import Ionicons from '@expo/vector-icons/Ionicons';
import {Nav_bar} from "../components/nav_bar";
import {text_styles} from "../styles/text";
import {Label} from "../components/label";
import {
    LineChart
} from "react-native-chart-kit";
import {Icon_text_button} from "../components/icon_text_button";

export class Home extends React.Component {

    constructor({props, set_name}) {
        super(props);
        this.state = {
            set_page_name : set_name,
            number_red_alert: 0,
            number_orange_alert: 0,
            number_green_alert: 0,
            number_person_detected_on_beach: 0,
            number_person_detection_on_sea: 0,
            data_person_per_hour_on_beach: [20,10,2,10,40,10,20,1,0],
            data_person_per_hour_on_sea: [10,2,2,1,6,20,10,1,0],
            visibility_sea: [40,60,30,100,80,20,10,0,30]
        };

        this.data_person_per_hour = {
            labels: ["-8","-7","-6","-5","-4","-3","-2","-1","mtn"],
            datasets: [
                {
                    data: this.state.data_person_per_hour_on_sea,
                    strokeWidth: 2
                },
                {
                    data: this.state.data_person_per_hour_on_beach,
                    color: (opacity = 1) => `rgba(255, 231, 160, ${opacity})`, // optional
                    strokeWidth: 2
                }
            ],
            legend: ["Mer", "Plage"]
        }

        this.data_visibility_sea = {
            labels: ["-8","-7","-6","-5","-4","-3","-2","-1","mtn"],
            datasets: [
                {
                    data: this.state.visibility_sea,
                    strokeWidth: 2
                }
            ],
            legend: ["en %"]
        }
    }

    render() {
        return (
            <View style={[settings_styles.background]}>

                <ScrollView style={settings_styles.scroll_container}>
                    {/*FLAG AND NUMBER ALERT STEP*/}
                    <View style={settings_styles.flex_container}>
                        <View style={[container_styles.container_flag, settings_styles.flex_container]}>
                            <Ionicons name="flag" size={40} color={color_green}/>
                        </View>
                        <View style={[settings_styles.flex_container, container_styles.container_circle_alert]}>
                            <Alert_circle color={color_red} number={this.state.number_red_alert}/>
                            <Alert_circle color={color_orange} number={this.state.number_orange_alert}/>
                            <Alert_circle color={color_green} number={this.state.number_green_alert}/>
                        </View>
                    </View>


                    {/*POPULATION DETECTION STEP*/}
                    <Label text={"Population détéctés : "}/>
                    <View style={settings_styles.flex_container}>
                        <View style={[settings_styles.flex_container_column, container_styles.container_flag]}>
                            <Text style={settings_styles.basic_font}>{this.state.number_person_detected_on_beach}</Text>
                            <Text style={text_styles.index_font_home_page}>Plage</Text>
                        </View>
                        <View style={[settings_styles.flex_container_column, container_styles.container_flag]}>
                            <Text style={settings_styles.basic_font}>{this.state.number_person_detection_on_sea}</Text>
                            <Text style={text_styles.index_font_home_page}>Mer</Text>
                        </View>
                    </View>


                    {/*POPULATION NUMBER BY TIME STEP*/}
                    <Label text={"Population détéctés dans le temps : "}/>
                    <View style={[settings_styles.flex_container,container_styles.graph]}>
                        <LineChart
                            data={this.data_person_per_hour}
                            width={Dimensions.get("window").width * .8}
                            height={Dimensions.get("window").height * .4}
                            chartConfig={chart_graph}
                            bezier
                        />
                    </View>


                    {/*WEATHER REPORT STEP*/}
                    <Label text={"Rapports métérologique : "}/>
                    <View style={[settings_styles.flex_container,container_styles.graph]}>
                    </View>


                    {/*VISION STEP*/}
                    <Label text={"Visibilité de la mer : "}/>
                    <View style={[settings_styles.flex_container,container_styles.graph]}>
                        <LineChart
                            data={this.data_visibility_sea}
                            width={Dimensions.get("window").width * .8}
                            height={Dimensions.get("window").height * .4}
                            chartConfig={chart_graph}
                            bezier
                        />
                    </View>


                    {/*MAP ACCESS*/}
                    <Icon_text_button text={"Accès Carte"} icon={"map"} color={color_green} action={()=> {
                        this.state.set_page_name("map")
                    }}/>


                    <View style={settings_styles.void_container_for_scroll_view}></View>
                </ScrollView>

                <Nav_bar number_page={0} set_name={this.state.set_page_name}/>
            </View>
        );
    }
}


