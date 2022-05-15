import React, { EventHandler } from "react";
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
  buy: TextStyle;
}
interface ItemProps {
  title: string;
  image: HTMLImageElement;
  price: string;
  addToCard: EventHandler<any>;
}
const ProductsList = ({ title, image, price, addToCard }: ItemProps) => {
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View style={styles.container}>
        <Image source={{ uri: `${image}` }} style={styles.categoryImg} />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.priceRow}>
          <Text style={styles.price}>{price}K</Text>
          <TouchableOpacity onPress={addToCard}>
            <Text style={styles.buy}>Mua +</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ProductsList;

const styles = StyleSheet.create<Styles>({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    marginBottom: 20,
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
  buy: {
    color: "#3f6600",
  },
});
