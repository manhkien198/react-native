import * as React from "react";
import { Text } from "react-native";
import Context from "../context";
export interface OrderProps {}

export default function Order(props: OrderProps) {
  const { products } = React.useContext(Context);
  console.log("products :", products);

  return <Text>Order</Text>;
}
