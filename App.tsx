import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Category from "./screens/Category";
import Categories from "./screens/Categories";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import * as React from "react";
export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Categories} />
        <Stack.Screen
          name="Category"
          component={Category}
          options={({ route }) => ({ title: route.params.categoryName })}
        />
      </Stack.Navigator>
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
