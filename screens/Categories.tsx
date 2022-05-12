import { StyleSheet } from "react-native";
import Worker from "../assets/worker.png";
import Living from "../assets/relax.png";
import Kitchen from "../assets/kitchen.png";
import Dining from "../assets/dinner-table.png";
import Bedroom from "../assets/bedroom.png";
import Baby from "../assets/baby-boy.png";
import { FlatList } from "react-native-gesture-handler";
import CategoryList from "../components/CategoryList";
interface Category {
  id: number;
  title: string;
  image: HTMLImageElement;
  category: string;
}

const Categories = (props: any) => {
  const { navigation } = props;
  const category: Category[] = [
    {
      id: 0,
      title: "Office",
      image: Worker,
      category: "office",
    },
    {
      id: 1,
      title: "Living Room",
      image: Living,
      category: "living room",
    },
    {
      id: 2,
      title: "Kitchen",
      image: Kitchen,
      category: "kitchen",
    },
    {
      id: 3,
      title: "Bedroom",
      image: Bedroom,
      category: "bedroom",
    },
    {
      id: 4,
      title: "Dining",
      image: Dining,
      category: "dining",
    },
    {
      id: 5,
      title: "Kids",
      image: Baby,
      category: "kids",
    },
  ];
  return (
    <FlatList
      data={category}
      renderItem={({ item }) => (
        <CategoryList
          title={item.title}
          image={item.image}
          onPress={() => {
            navigation.navigate("Category", {
              categoryName: item.title,
              type: item.category,
            });
          }}
        />
      )}
      keyExtractor={(item) => `${item.id}`}
      contentContainerStyle={{ paddingLeft: 16, paddingRight: 16 }}
    />
  );
};
export default Categories;
