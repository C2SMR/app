import * as Notifications from 'expo-notifications';

export async function sendPushNotification(expoPushToken, message) {
    const messageToSend = {
        to: expoPushToken,
        sound: 'default',
        title: 'New Alert',
        body: message,
        data: { message },
    };

    await fetch('https://exp.host/--/api/v2/push/send', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Accept-encoding': 'gzip, deflate',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(messageToSend),
    });
}
