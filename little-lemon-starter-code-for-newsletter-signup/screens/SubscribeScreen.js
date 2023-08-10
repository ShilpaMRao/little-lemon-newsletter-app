import * as React from "react";
import { useState } from "react";
import { validateEmail } from "../utils";
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const SubscribeScreen = () => {
  const [email, setEmail] = useState("");

  const subscribeHandler = () => {
    if (!validateEmail(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
    } else {
      Alert.alert("Subscription", "Thanks for subscribing, stay tuned!");
    }
  };
  // Add subscribe screen code here
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        // source={require("C:/Users/Admin/Shilpa/Coursera/little-lemon-starter-code-for-newsletter-signup/little-lemon-starter-code-for-newsletter-signup/assets/little-lemon-logo-grey.png")}
        source={require("../assets/little-lemon-logo-grey.png")}
        resizeMode="contain"
        accessible={true}
        accessibilityLabel="Little Lemon Logo"
      />
      <Text style={styles.text}>
        Subscribe to our newsletter for our latest delicious receipes!
      </Text>
      <TextInput
        style={styles.input}
        value={email}
        placeholder="email"
        keyboardType="email-address"
        onChangeText={setEmail}
      />
      <Pressable onPress={subscribeHandler}>
        <Text style={styles.button}>Subscribe</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  logo: {
    height: 300,
    width: 100,
    alignSelf: "center",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    color: "#495E57",
  },
  input: {
    height: 50,
    width: 370,
    alignSelf: "center",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 40,
    padding: 10,
  },
  button: {
    height: 50,
    width: 370,
    // marginVertical: 4,
    backgroundColor: "#495E57",
    alignSelf: "center",
    borderRadius: 8,
    fontSize: 20,
    textAlign: "center",
    padding: 10,
    color: "white",
  },
});
export default SubscribeScreen;
