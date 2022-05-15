import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Context from "../context";

export default function Setting({ navigation }: any) {
  const { setIsAuthenticated } = React.useContext(Context);

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigation.navigate("Login");
  };
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleLogout}
      >
        <Text style={styles.text}>Đăng Xuất</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    alignItems: "stretch",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    marginTop: 20,
  },
  text: {
    textAlign: "center",
  },
});
