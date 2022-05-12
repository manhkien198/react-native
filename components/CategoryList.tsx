import React from "react";
import {
  Image,
  ImageStyle,
  NativeTouchEvent,
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
}
interface ItemProps {
  title: string;
  image: HTMLImageElement;
  onPress: any;
}
const CategoryList = ({ title, image, onPress }: ItemProps) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Image source={image} style={styles.categoryImg} />
      </View>
    </TouchableOpacity>
  );
};
export default CategoryList;

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
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "700",
  },
  categoryImg: {
    width: 64,
    height: 64,
  },
});
