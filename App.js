import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import MyLayout from "./src/components/layout.component";
import { Tile, Text } from "react-native-elements";

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
    paddingBottom: 5,
  },
});

const testdata = {
  Apendix_A: {
    STUDENT_PILOT_ENDORSEMENTS: [
      {
        code: `A.4`,
        title: `Pre-solo flight training`,
        fAR: {
          Code: 61.87,
          subs: [c1, c2],
        },
        body: `I certify that [First name, MI, Last name] has received and logged pre-solo flight training for the maneuvers and procedures that are appropriate to the [make and model] aircraft. I have determined [he or she] has demonstrated satisfactory proficiency and safety on the maneuvers and procedures required by § 61.87 in this or similar make and model of aircraft to be flown.`,
      },
    ],
  },
};
