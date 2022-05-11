import React from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from "react-native";
interface Styles {
  container: ViewStyle;
  title: TextStyle;
  categoryImg: ImageStyle;
}
interface ItemProps {
  title: string;
  image: HTMLImageElement;
}
const CategoryList = ({ title, image }: ItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image source={image} style={styles.categoryImg} />
    </View>
  );
};
export default CategoryList;

const styles = StyleSheet.create<Styles>({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    // borderRadius: 4,
    // borderWidth: 1,
    // borderStyle: "solid",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "700",
  },
  categoryImg: {
    width: 64,
    height: 64,
  },
});
