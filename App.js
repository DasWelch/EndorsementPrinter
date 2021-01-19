import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import  MyLayout  from "./src/components/layout.component";

export default function App() {
  return (
    <MyLayout>

        <View>
          <Text> Endorsement Title and Header</Text>
        </View>
        <View>
          <Text>Date endoresment give(or today) and Title</Text>
          <Text>FAR and Description</Text>
          <Text>Far wording with necessary added pieces</Text>
          <Text>name and signature</Text>
          <Text>Fill Cert number and expiration</Text>
        </View>

        <StatusBar style="auto" />

    </MyLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
