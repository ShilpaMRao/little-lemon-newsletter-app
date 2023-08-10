import * as React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/little-lemon-logo.png")}
        resizeMode="contain"
        accessible={true}
        accessibilityLabel="Little Lemon Logo"
      />
      <Text style={styles.welcomeText}>
        Little Lemon, your Local Mediterranean Bistro
      </Text>
      <Pressable onPress={() => navigation.navigate("Subscribe")}>
        <Text style={styles.button}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    height: 300,
    width: 300,
    marginVertical: 70,
    alignSelf: "center",
    padding: 20,
  },
  welcomeText: {
    fontSize: 25,
    textAlign: "center",
    marginVertical: 8,
    color: "#495E57",
  },
  button: {
    height: 50,
    width: 340,
    marginVertical: 120,
    backgroundColor: "#495E57",
    alignSelf: "center",
    borderRadius: 8,
    fontSize: 20,
    textAlign: "center",
    padding: 10,
    color: "white",
  },
});

export default WelcomeScreen;
