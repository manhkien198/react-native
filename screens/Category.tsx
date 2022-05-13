import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ProductsList from "../components/ProductsList";
import Context from "../context";
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  colors: string[];
  company: string;
  description: string;
  category: string;
  shipping: boolean;
  quantity: number;
}

export default function Category({ route, navigation }: any) {
  const { type } = route.params;
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://course-api.com/react-store-products")
      .then((res) =>
        setData(res.data?.map((x: Product) => ({ ...x, quantity: 1 })))
      )
      .catch((e) => console.log(e));
  }, []);
  const { products, addToCart } = React.useContext(Context);
  return (
    <FlatList
      data={data.filter((x: Product) => x.category === type)}
      numColumns={2}
      renderItem={({ item }: any) => (
        <View style={styles.wrapper}>
          <ProductsList
            title={item.name}
            image={item.image}
            price={item.price}
            addToCard={() => addToCart(item)}
          />
        </View>
      )}
      keyExtractor={(item: any) => item.id}
      contentContainerStyle={{ paddingHorizontal: 8, paddingTop: 20 }}
    />
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 8,
  },
});
