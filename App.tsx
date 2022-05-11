import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import Diet from "./assets/diet.png";
import Clothes from "./assets/fashion.png";
import Meds from "./assets/meds.png";
import Shampoo from "./assets/shampoo.png";
import Soap from "./assets/soap.png";
import CategoryList from "./components/CategoryList";
interface Category {
  id: number;
  title: string;
  image: HTMLImageElement;
}
export default function App() {
  const category: Array<Category> = [
    { id: 1, title: "Thực phẩm chức năng", image: Meds },
    { id: 2, title: "Sữa tắm", image: Soap },
    { id: 3, title: "Dầu gội", image: Shampoo },
    { id: 4, title: "Thực phẩm", image: Diet },
    { id: 5, title: "Quần áo", image: Clothes },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={category}
        renderItem={({ item }) => (
          <CategoryList title={item.title} image={item.image} />
        )}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={{ paddingLeft: 16, paddingRight: 16 }}
      />
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
