import React from "react";
import { Product } from "./screens/Category";
export default React.createContext({
  order: [],
  isAuthenticated: false,
  products: [],
  setIsAuthenticated: (payload: boolean) => {},
  addToCart: (product: Product) => {},
  removeFromCart: (id: string) => {},
  decreaseToCart: (product: Product) => {},
  increaseToCart: (product: Product) => {},
});
