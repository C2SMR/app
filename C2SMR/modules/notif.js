import * as Notifications from 'expo-notifications';
import {url_api} from "./env";
import {getData} from "./data";
import {color_green, color_orange, color_red} from "../styles/colors";


Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});


const push_notification = async (title, body, color) => {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: title,
            body: body,
            color: color
        },
        trigger: null,
    });
}

export const Notification = () => {
    setInterval(() => {
        fetch(url_api + '/get_data_alert', {
            method: "POST",
            body: JSON.stringify({
                city: getData("city")
            })
        })
            .then(r => r.json())
            .then(r => {
                r["data"].map(async (a) => {
                    if (a[3] === 0) {
                        const color = a[0] === 0
                                        ? "green"
                                        : a[0] === 1
                                            ? "orange"
                                            : "red"
                        if (await getData(color)) {
                            await push_notification(
                                "C2SMR",
                                a[1],
                                a[0] === 0
                                    ? color_green
                                    : a[0] === 1
                                        ? color_orange
                                        : color_red)
                        }
                    }
                })
            })
            .then(async () => {
                await fetch(url_api + '/set_notif',{
                    method : ["POST"],
                    body : JSON.stringify({
                        city : getData("city")
                    })
                })
            })
     },10000) // 10sec
}

