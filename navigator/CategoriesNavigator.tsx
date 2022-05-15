import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
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
        options={({ route }: any) => ({
          title: route?.params?.categoryName,
        })}
      />
    </Stack.Navigator>
  );
}
