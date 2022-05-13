import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import Categories from "../screens/Categories";
import Category from "../screens/Category";
export default function CategoriesNavigator() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Categories} />
      <Stack.Screen
        name="Category"
        component={Category}
        options={({ route }) => ({
          title: route?.params?.categoryName || "Category",
        })}
      />
    </Stack.Navigator>
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
