import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (value, key) => {
  try {
    await AsyncStorage.setItem(value, key);
  } catch (error) {
    console.log("err storing value:", error);
  }
};

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
  } catch (error) {
    console.log("err get data:", error);
  }
};
