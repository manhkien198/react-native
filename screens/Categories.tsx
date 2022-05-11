import React from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ImageStyle,
  TouchableOpacity,
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
const Categories = ({ title, image }: ItemProps) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Image source={image} style={styles.categoryImg} />
      </View>
    </TouchableOpacity>
  );
};
export default Categories;

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
    shadowOffset: { width: 1, height: 1 },
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
