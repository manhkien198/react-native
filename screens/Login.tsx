import { Formik } from "formik";
import * as React from "react";
import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Context from "../context";

import axiosClient from "../api/axiosClient";
import MyButton from "../components/Button";
import * as yup from "yup";

interface ValueForm {
  email: string;
  password: string;
}
export default function Login({ navigation }: any) {
  const { products, setIsAuthenticated } = React.useContext(Context);
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email Address is Required"),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),
  });
  const handleSubmit = (value: ValueForm) => {
    axiosClient
      .post("/auth/login", value)
      .then((response) => setIsAuthenticated(true))
      .catch((err) => Alert.alert(err));
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={loginValidationSchema}
    >
      {({ handleChange, handleSubmit, values, errors, isValid, touched }) => (
        <SafeAreaView style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={handleChange("email")}
            value={values.email}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="Enter Email"
          />
          {errors.email && touched.email && (
            <Text style={styles.errorText}>{errors.email}</Text>
          )}
          <TextInput
            style={styles.input}
            onChangeText={handleChange("password")}
            value={values.password}
            secureTextEntry
            autoCapitalize="none"
            placeholder="Enter Password"
          />
          {errors.password && touched.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}
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
  errorText: {
    fontSize: 10,
    color: "red",
    paddingHorizontal: 15,
  },
});
