import { StyleSheet } from "react-native";
import Meds from "../assets/meds.png";
import Soap from "../assets/soap.png";
import Shampoo from "../assets/shampoo.png";
import Food from "../assets/diet.png";
import Clothes from "../assets/fashion.png";
import { FlatList } from "react-native-gesture-handler";
import CategoryList from "../components/CategoryList";
interface Category {
  id: number;
  title: string;
  image: HTMLImageElement;
}

const Categories = (props: any) => {
  const { navigation } = props;
  const category: Category[] = [
    {
      id: 0,
      title: "Thực phẩm chức năng",
      image: Meds,
    },
    {
      id: 1,
      title: "Sữa tắm",
      image: Soap,
    },
    {
      id: 2,
      title: "Dầu gội",
      image: Shampoo,
    },
    {
      id: 3,
      title: "Thực phẩm",
      image: Food,
    },
    {
      id: 4,
      title: "Quần áo",
      image: Clothes,
    },
  ];
  return (
    <FlatList
      data={category}
      renderItem={({ item }) => (
        <CategoryList
          title={item.title}
          image={item.image}
          onPress={() =>
            navigation.navigate("Category", {
              categoryName: item.title,
            })
          }
        />
      )}
      keyExtractor={(item) => `${item.id}`}
      contentContainerStyle={{ paddingLeft: 16, paddingRight: 16 }}
    />
  );
};
export default Categories;
