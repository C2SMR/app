import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Home } from './pages/home';
import { Settings } from './pages/settings';
import { Alert } from './pages/alert';
import { Connect } from './pages/connect';
import { initDB, getCity } from './modules/db';
import { registerForPushNotificationsAsync } from './modules/notification';
import * as Notifications from 'expo-notifications';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page_name: 'connect',
      city: '',
    };
    this.setData = this.setData.bind(this);
    this.setCity = this.setCity.bind(this);
  }

  async componentDidMount() {
    initDB();
    const cityCache = await getCity();
    if (cityCache.length > 0) {
      this.setState({ city: cityCache[0].city, page_name: 'home' });
    }

    await registerForPushNotificationsAsync();

    this.notificationListener = Notifications.addNotificationReceivedListener(notification => {
      console.log(notification);
    });

    this.responseListener = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });
  }

  componentWillUnmount() {
    Notifications.removeNotificationSubscription(this.notificationListener);
    Notifications.removeNotificationSubscription(this.responseListener);
  }

  setData(data) {
    this.setState({ page_name: data });
  }

  setCity(city) {
    this.setState({ city });
  }

  render() {
    return (
      <View>
      {this.state.page_name === "connect" ? (
          <Connect set_name={this.setData} set_city={this.setCity}/>
      ) : (
          ""
      )}
      {this.state.page_name === "home" ? (
          <Home set_name={this.setData} city={this.state.city}/>
      ) : (
          ""
      )}
      {this.state.page_name === "alert" ? (
          <Alert set_name={this.setData} city={this.state.city}/>
      ) : (
          ""
      )}
      {this.state.page_name === "settings" ? (
          <Settings set_name={this.setData} city={this.state.city}/>
      ) : (
          ""
      )}
  </View>
    );
  }
}