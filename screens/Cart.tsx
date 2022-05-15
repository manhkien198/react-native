import * as React from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import MyButton from "../components/Button";
import CartList from "../components/CartList";
import Context from "../context";
import { Product } from "./Category";

export default function Cart({ navigation }: any) {
  const {
    products,
    removeFromCart,
    decreaseToCart,
    increaseToCart,
    isAuthenticated,
    setOrder,
  } = React.useContext(Context);
  const total = products.reduce((result: number, product: Product): number => {
    return result + product.quantity * product.price;
  }, 0);
  return (
    <View>
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
        contentContainerStyle={{
          paddingHorizontal: 8,
          paddingTop: 20,
          paddingBottom: 30,
        }}
      />
      {total ? (
        <View style={styles.totalWrapper}>
          <View style={styles.total}>
            <Text style={styles.text}>Tổng :</Text>
            <Text style={styles.text}>{total}K</Text>
          </View>
          <MyButton
            title="Đặt hàng"
            onPress={() => {
              if (!isAuthenticated) {
                navigation.navigate("Login");
              } else {
                setOrder(products);
                Alert.alert("Đặt hàng thành công");
              }
            }}
          />
        </View>
      ) : (
        ""
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  totalWrapper: {
    flexDirection: "row",
    position: "absolute",
    borderTopColor: "#ccc",
    borderTopWidth: 1,
    bottom: 0,
    backgroundColor: "#fff",
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  total: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
