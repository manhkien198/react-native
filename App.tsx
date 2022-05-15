import * as React from "react";
import "react-native-gesture-handler";
import NavigationWrapper from "./NavigationContainer";
import GlobalState from "./productsContext";

export default function App() {
  return (
    <GlobalState>
      <NavigationWrapper />
    </GlobalState>
  );
}
