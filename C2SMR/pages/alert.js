import React from "react";
import {
    View,
    Text,
    ScrollView,
    Pressable,
    Animated,
    Dimensions,
} from "react-native";
import { Nav_bar } from "../components/nav_bar";
import { settings_styles } from "../styles/settings";
import { container_styles } from "../styles/container";
import { text_styles } from "../styles/text";
import { color_green, color_orange, color_red } from "../styles/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Label } from "../components/label";
import * as Linking from "expo-linking";
import { url_api } from "../modules/env";
import { sentences } from "../modules/language";
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { sendPushNotification } from '../modules/notification';

export class Alert extends React.Component {
    constructor({ props, set_name, city }) {
        super(props);
        this.city = city;
        this.state = {
            set_page_name: set_name,
            num_image_to_display: 0,
            value_of_pop_up: new Animated.ValueXY({
                x: Dimensions.get("window").width * 0.05,
                y: -1000,
            }),
            lst_alert: [[]],
        };
        this.registerForPushNotificationsAsync();
        setInterval(() => {
            this.fetch_alert();
        }, 1000);
    }

    async registerForPushNotificationsAsync() {
        let token;
        if (Constants.isDevice) {
            const { status: existingStatus } = await Notifications.getPermissionsAsync();
            let finalStatus = existingStatus;
            if (existingStatus !== 'granted') {
                const { status } = await Notifications.requestPermissionsAsync();
                finalStatus = status;
            }
            if (finalStatus !== 'granted') {
                alert('Failed to get push token for push notification!');
                return;
            }
            token = (await Notifications.getExpoPushTokenAsync()).data;
            await AsyncStorage.setItem('pushToken', token);
        } else {
            alert('Must use physical device for Push Notifications');
        }

        if (Platform.OS === 'android') {
            Notifications.setNotificationChannelAsync('default', {
                name: 'default',
                importance: Notifications.AndroidImportance.MAX,
                vibrationPattern: [0, 250, 250, 250],
                lightColor: '#FF231F7C',
            });
        }
    }

    async fetch_alert() {
        const token = await AsyncStorage.getItem('pushToken');
        fetch(url_api + "/get_data_alert", {
            method: "POST",
            body: JSON.stringify({
                city: this.city,
            }),
        })
            .then((r) => r.json())
            .then((r) => {
                const new_alerts = r["data"].filter(alert => 
                    !this.state.lst_alert.some(existingAlert => 
                        existingAlert[0] === alert[0] && existingAlert[1] === alert[1]));
                if (new_alerts.length > 0 && token) {
                    sendPushNotification(token, new_alerts[0][1]);
                }
                this.setState({
                    lst_alert: r["data"],
                });
            });
    }

    moveForPopUp(is_open) {
        let new_y;
        if (is_open === true) {
            new_y = -1000;
        } else {
            new_y = Dimensions.get("window").height * 0.27;
        }
        Animated.timing(this.state.value_of_pop_up, {
            toValue: { x: Dimensions.get("window").width * 0.05, y: new_y },
            duration: 500,
            useNativeDriver: false,
        }).start();
    }

    render() {
        return (
            <View style={[settings_styles.background]}>
                <ScrollView style={settings_styles.scroll_container} ref="_scrollView">
                    {/*PHONE NUMBER STEP*/}
                    <Pressable
                        onPress={() => {
                            Linking.openURL("tel:112").then((r) => console.log(r));
                        }}
                        style={[
                            settings_styles.flex_container_center,
                            container_styles.round_btn,
                        ]}
                    >
                        <Ionicons name="call-outline" size={30} color={color_red} />
                    </Pressable>

                    {/*POP UP IMAGE STEP*/}
                    <Animated.View
                        style={[
                            images_styles.pop_up_container,
                            this.state.value_of_pop_up.getLayout(),
                        ]}
                    >
                        <Text style={[text_styles.pop_up_text]}>
                            {this.state.lst_alert[this.state.num_image_to_display][1]}
                        </Text>
                    </Animated.View>

                    {/*ALERT LIST STEP*/}
                    <Label text={sentences.fr.alert_title} />
                    {this.state.lst_alert.map((a, i) => (
                        <Pressable
                            onPress={() => {
                                this.setState({ num_image_to_display: i });
                                this.moveForPopUp(false);
                                // this.refs._scrollView.scrollTo(0);
                            }}
                            style={[
                                settings_styles.flex_container_center,
                                container_styles.card,
                            ]}
                            key={"card-alert-" + i.toString()}
                        >
                            <View style={[settings_styles.flex_container, { flex: 1 }]}>
                                <Ionicons
                                    name="triangle-outline"
                                    size={50}
                                    color={
                                        a[0] === 2
                                            ? color_red
                                            : a[0] === 1
                                                ? color_orange
                                                : color_green
                                    }
                                />
                            </View>
                            <View style={[settings_styles.flex_container, { flex: 3 }]}>
                                <Text
                                    style={[settings_styles.basic_font, text_styles.btn_text]}
                                >
                                    {a[1]}
                                </Text>
                            </View>
                        </Pressable>
                    ))}

                    <View style={settings_styles.void_container_for_scroll_view}></View>
                </ScrollView>
                <Nav_bar number_page={1} set_name={this.state.set_page_name} />
            </View>
        );
    }
}
