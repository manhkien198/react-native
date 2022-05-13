import React, { useState } from "react";
import Context from "./context";
import { Product } from "./screens/Category";

const GlobalState = ({ children }: any) => {
  const [products, setProducts] = useState<Array<Product>>([]);
  const addToCart = (product: Product) => {
    for (let i = 0; i < products.length; i++) {
      const x = products[i];
      if (x.id === product.id) {
        x.quantity += 1;
        setProducts((prev: Array<Product>) => {
          return [...prev];
        });
        return;
      }
    }
    setProducts((prev: Array<Product>) => {
      return [...prev, product];
    });
  };
  const decreaseToCart = (product: Product) => {
    const target = products.filter((x) => x.id === product.id);
    const rest = products.filter((x) => x.id !== product.id);
    if (target[0].quantity === 1) {
      setProducts(rest);
    } else {
      target[0].quantity -= 1;
      setProducts([...rest, ...target]);
    }
  };
  const increaseToCart = (product: Product) => {
    const target = products.filter((x) => x.id === product.id);
    const rest = products.filter((x) => x.id !== product.id);
    setProducts([
      ...rest,
      { ...target[0], quantity: (target[0].quantity += 1) },
    ]);
  };
  const removeFromCart = (id: string) => {
    setProducts(products.filter((x: Product) => x.id !== id));
  };
  return (
    <Context.Provider
      value={{
        products: products,
        addToCart,
        removeFromCart,
        decreaseToCart,
        increaseToCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default GlobalState;
