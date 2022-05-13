import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import "react-native-gesture-handler";
import Context from "./context";
import NavigationWrapper from "./NavigationContainer";
import GlobalState from "./productsContext";

export default function App() {
  const Tab = createBottomTabNavigator();
  const { products } = React.useContext(Context);

  return (
    <GlobalState>
      <NavigationWrapper />
    </GlobalState>
  );
}
