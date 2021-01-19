import React from "react";
import { SafeAreaView, View, StyleSheet, Text, StatusBar  } from "react-native";

export default function MyLayout({ children }) {
  return (
    <View style={layoutStyles.appBase}>
      <NavEntry/>
      {children}
    </View>
  );
}

function NavEntry(){
  return(
<View style={layoutStyles.topBar}>
        <Text>I am the top bar</Text>
      </View>
  );
}

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
