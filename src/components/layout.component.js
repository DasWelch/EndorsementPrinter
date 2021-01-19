import React from "react";
import { SafeAreaView, View, StyleSheet, Text, StatusBar } from "react-native";
import { Header, Icon } from "react-native-elements";

export default function MyLayout({ children }) {
  return (
    <View style={layoutStyles.appBase}>
      <Header
        centerComponent={{ text: "Easy 61-65" }}
        rightComponent={{ icon: "menu", color: "#fff" }}
      />
      {children}
    </View>
  );
}

// start of styles
const layoutStyles = StyleSheet.create({
  appBase: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: `#cde0e7`,
  },
  topBar: {
    backgroundColor: `#2f4f4f`,
    padding: 5,
    height: 60,
  },
});
