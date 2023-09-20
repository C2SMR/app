import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log(key, value);
  } catch (e) {
    console.log(e);
  }
};

export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log(e);
  }
};

export const getData = async (key) => {
  const value = await AsyncStorage.getItem(key);
  if (value !== null) {
    console.log(value);
    return value["_j"];
  }
  return false;
};
