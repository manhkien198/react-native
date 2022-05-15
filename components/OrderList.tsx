import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
interface OrderProps {
  title: string;
  image: string;
  price: number;
  quantity: number;
}
const OrderList = ({ title, image, price, quantity }: OrderProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: `${image}` }} style={styles.categoryImg} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <View>
          <Text>{price}K</Text>
          <Text>Số lượng: {quantity}</Text>
        </View>
      </View>
    </View>
  );
};
export default OrderList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    marginBottom: 20,
    fontWeight: "700",
    marginTop: 20,
    textTransform: "capitalize",
  },
  categoryImg: {
    width: 64,
    height: 64,
  },
  info: {
    justifyContent: "center",
  },
});
