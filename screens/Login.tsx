import { Formik } from "formik";
import * as React from "react";
import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import Context from "../context";

import axiosClient from "../api/axiosClient";
import MyButton from "../components/Button";
interface ValueForm {
  email: string;
  password: string;
}
export default function Login({ navigation }: any) {
  const { products, setIsAuthenticated } = React.useContext(Context);

  const handleSubmit = (value: ValueForm) => {
    axiosClient
      .post("/auth/login", value)
      .then((response) => setIsAuthenticated(true))
      .catch((err) => Alert.alert(err));
  };
  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      {({ handleChange, handleSubmit, values }) => (
        <SafeAreaView style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={handleChange("email")}
            value={values.email}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="Enter Email"
          />
          <TextInput
            style={styles.input}
            onChangeText={handleChange("password")}
            value={values.password}
            secureTextEntry
            autoCapitalize="none"
            placeholder="Enter Password"
          />
          <View style={styles.button}>
            <MyButton onPress={handleSubmit} title="Sign in" />
            <Button
              onPress={() => {
                navigation.navigate("Register");
              }}
              title="Sign up"
            />
          </View>
        </SafeAreaView>
      )}
    </Formik>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 150,
  },

  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
