import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet,  View } from "react-native";
import MyLayout from "./src/components/layout.component";
import { Tile,Text } from "react-native-elements";

export default function App() {
  return (
    <MyLayout>
      <View style={styles.container}>
        <View>
          <Text h4>Endorsement Title and Header{"\n"}</Text>
        </View>
        <View>
          <Text>Date endoresment give(or today) and Title{"\n"}</Text>
          <Text>FAR and Description{"\n"}</Text>
          <Text>Far wording with necessary added pieces{"\n"}</Text>
          <Text>name and signature</Text>
          <Text>Cert number and expiration</Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </MyLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5
  },
});
