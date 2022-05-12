import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { Image, StyleSheet } from "react-native";
import "react-native-gesture-handler";
import AppNavigator from "./navigator/AppNavigator";
import CartNavigator from "./navigator/CartNavigator";
import OrderNavigator from "./navigator/OrderNavigator";
import SettingNavigator from "./navigator/SettingNavigator";
import Menu from "./assets/menu.png";
import Order from "./assets/clipboard.png";
import Setting from "./assets/setting.png";
import Cart from "./assets/shopping-cart.png";
export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Categories"
          component={AppNavigator}
          options={{
            tabBarIcon(props) {
              return (
                <Image
                  style={{ width: 20, height: 20 }}
                  source={Menu}
                  alt="Categories"
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartNavigator}
          options={{
            tabBarIcon(props) {
              return (
                <Image
                  style={{ width: 20, height: 20 }}
                  source={Cart}
                  alt="Categories"
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Order"
          component={OrderNavigator}
          options={{
            tabBarIcon(props) {
              return (
                <Image
                  style={{ width: 20, height: 20 }}
                  source={Order}
                  alt="Categories"
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Setting"
          component={SettingNavigator}
          options={{
            tabBarIcon(props) {
              return (
                <Image
                  style={{ width: 20, height: 20 }}
                  source={Setting}
                  alt="Categories"
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
});
