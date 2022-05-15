import { Formik } from "formik";
import * as React from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import axiosClient from "../api/axiosClient";
import MyButton from "../components/Button";
interface ValueForm {
  name: string;
  email: string;
  password: string;
}
export default function Register({ navigation }: any) {
  const handleSubmit = (value: ValueForm) => {
    axiosClient
      .post("/auth/register", {
        ...value,
      })
      .then((res) => {
        navigation.navigate("Login");
      })
      .catch((err) => Alert.alert(err));
  };
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleSubmit, values }) => (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={handleChange("name")}
            value={values.name}
            placeholder="Enter Name"
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            onChangeText={handleChange("email")}
            value={values.email}
            placeholder="Enter Email"
            keyboardType="email-address"
            autoCapitalize="none"
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
            <MyButton onPress={handleSubmit} title="Register" />
          </View>
        </View>
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
