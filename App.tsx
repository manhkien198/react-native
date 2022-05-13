import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import Context from "./context";
import CartNavigator from "./navigator/CartNavigator";
import CategoriesNavigator from "./navigator/CategoriesNavigator";
import OrderNavigator from "./navigator/OrderNavigator";
import SettingNavigator from "./navigator/SettingNavigator";
import GlobalState from "./productsContext";
export default function App() {
  const Tab = createBottomTabNavigator();
  const { products } = React.useContext(Context);
  console.log("products :", products);

  return (
    <GlobalState>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={CategoriesNavigator}
            options={{
              headerShown: false,
              tabBarIcon({ focused }) {
                return (
                  <Icon
                    name="ios-home"
                    size={24}
                    color={focused ? "#147efb" : "#ccc"}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Cart"
            component={CartNavigator}
            options={{
              headerShown: false,
              tabBarBadge: products.length,
              tabBarIcon({ focused }) {
                return (
                  <Icon
                    name="cart"
                    size={24}
                    color={focused ? "#147efb" : "#ccc"}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Order"
            component={OrderNavigator}
            options={{
              headerShown: false,
              tabBarIcon({ focused }) {
                return (
                  <Icon
                    name="book"
                    size={24}
                    color={focused ? "#147efb" : "#ccc"}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Setting"
            component={SettingNavigator}
            options={{
              headerShown: false,
              tabBarIcon({ focused }) {
                return (
                  <Icon
                    name="settings"
                    size={24}
                    color={focused ? "#147efb" : "#ccc"}
                  />
                );
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </GlobalState>
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
