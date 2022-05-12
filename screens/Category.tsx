import { StyleSheet, Text, View } from "react-native";

export default function Category({ route, navigation }: any) {
  const { categoryName } = route.params;
  return (
    <View style={styles.container}>
      <Text>Category</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
});
