import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoryList from "./components/CategoryList";
import Meds from "./assets/meds.png";
import Soap from "./assets/soap.png";
import Shampoo from "./assets/shampoo.png";
export default function App() {
  return (
    <View style={styles.container}>
      <CategoryList title="Thực phẩm chức năng" image={Meds} />
      <CategoryList title="Sữa tắm" image={Soap} />
      <CategoryList title="Dầu gội" image={Shampoo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },
});
