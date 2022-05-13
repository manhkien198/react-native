import React from "react";
import {
  Image,
  ImageStyle,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
interface Styles {
  container: ViewStyle;
  title: TextStyle;
  categoryImg: ImageStyle;
  priceRow: ViewStyle;
  price: TextStyle;
  remove: ViewStyle;
  main: ViewStyle;
  decrease: TextStyle;
  increase: TextStyle;
  wrapper: ViewStyle;
}
interface ItemProps {
  title: string;
  image: HTMLImageElement;
  price: string;
  removeFromCart: Function;
  quantity: number;
  decreaseToCart: Function;
  increaseToCart: Function;
}
const CartList = ({
  title,
  image,
  price,
  quantity,
  removeFromCart,
  decreaseToCart,
  increaseToCart,
}: ItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image source={{ uri: image }} style={styles.categoryImg} />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.priceRow}>
          <Text style={styles.price}>{price}K</Text>
          <View style={styles.wrapper}>
            <TouchableOpacity onPress={decreaseToCart}>
              <View style={styles.decrease}>
                <Text>-</Text>
              </View>
            </TouchableOpacity>
            <Text>{quantity}</Text>
            <TouchableOpacity onPress={increaseToCart}>
              <View style={styles.increase}>
                <Text>+</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.remove}
        activeOpacity={0.5}
        onPress={removeFromCart}
      >
        <Text>X</Text>
      </TouchableOpacity>
    </View>
  );
};
export default CartList;

const styles = StyleSheet.create<Styles>({
  container: {
    alignItems: "start",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    marginBottom: 20,
    flexDirection: "row",
  },
  main: {
    flex: 1,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  decrease: {
    padding: 5,
    backgroundColor: "#ccc",
    paddingHorizontal: 10,
    borderRadius: 50,
    marginRight: 5,
  },
  increase: {
    padding: 5,
    backgroundColor: "#ccc",
    paddingHorizontal: 10,
    borderRadius: 50,
    marginLeft: 5,
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
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    flex: 1,
    opacity: 0.7,
  },
  remove: {
    backgroundColor: "#ccc",
    padding: 5,
    paddingHorizontal: 8,
    borderRadius: 50,
  },
});
