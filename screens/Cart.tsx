import { useRoute } from "@react-navigation/native";
import * as React from "react";
import { FlatList, Text, View } from "react-native";
import CartList from "../components/CartList";
import Context from "../context";

export default function Cart() {
  const { products, removeFromCart, decreaseToCart, increaseToCart } =
    React.useContext(Context);

  return (
    <FlatList
      data={products}
      renderItem={({ item }: any) => (
        <View>
          <CartList
            title={item.name}
            image={item.image}
            price={item.price}
            quantity={item.quantity}
            decreaseToCart={() => decreaseToCart(item)}
            removeFromCart={() => removeFromCart(item.id)}
            increaseToCart={() => increaseToCart(item)}
          />
        </View>
      )}
      keyExtractor={(item: any) => item.id}
      contentContainerStyle={{ paddingHorizontal: 8, paddingTop: 20 }}
    />
  );
}
