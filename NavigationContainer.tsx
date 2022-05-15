import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import Context from "./context";
import CategoriesNavigator from "./navigator/CategoriesNavigator";
import LoginNavigator from "./navigator/LoginNavigator";
import Cart from "./screens/Cart";
import Order from "./screens/Order";
import Setting from "./screens/Setting";

export default function NavigationWrapper() {
  const Tab = createBottomTabNavigator();
  const { products, isAuthenticated } = React.useContext(Context);

  return (
    <NavigationContainer>
      {isAuthenticated ? (
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
            component={Cart}
            options={{
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
            component={Order}
            options={{
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
            component={Setting}
            options={{
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
      ) : (
        <LoginNavigator />
      )}
    </NavigationContainer>
  );
}
