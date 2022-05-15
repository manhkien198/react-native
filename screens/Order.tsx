import * as React from "react";
import { FlatList, View } from "react-native";
import OrderList from "../components/OrderList";
import Context from "../context";
export default function Order() {
  const { order } = React.useContext(Context);
  return (
    <FlatList
      data={order}
      renderItem={({ item }: any) => (
        <View>
          <OrderList
            title={item.name}
            image={item.image}
            price={item.price}
            quantity={item.quantity}
          />
        </View>
      )}
      keyExtractor={(item: any) => item.id}
      contentContainerStyle={{
        paddingHorizontal: 8,
        paddingTop: 20,
        paddingBottom: 30,
      }}
    />
  );
}
