import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import MyLayout from "./src/components/layout.component";
import { Tile, Text } from "react-native-elements";

export default function App() {
  const endorsement = testdata.Apendix_A.STUDENT_PILOT_ENDORSEMENTS[0];
  let headtitle =
    endorsement.lookup + " " + endorsement.title + " " + endorsement.fAR.code;

  const { body, title } = endorsement;
  const { code } = endorsement.fAR;
  const instructorName = "Zachery J Welch";
  const certNum = `3696885CFI`;
  const certExp = `7/22`;
  const date = new Date();

  return (
    <MyLayout>
      <View style={styles.container}>
        <View>
          <Text h4>
            {headtitle}
            {"\n"}
          </Text>
        </View>
        <View>
          <Text>
            {date.toLocaleDateString()} {title}:  § {code} {"\n"}
          </Text>
          <Text>
            {body} {"\n"}
          </Text>
          <Text>{instructorName} | signature</Text>
          <Text>
            {certNum} Exp. {certExp}
          </Text>
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
        lookup: `A.4`,
        title: `Pre-solo flight training`,
        fAR: {
          code: `61.87(c)(1) and (2)`,
        },
        body: `I certify that {0} has received and logged pre-solo flight training for the maneuvers and procedures that are appropriate to the {1} aircraft. I have determined {2} has demonstrated satisfactory proficiency and safety on the maneuvers and procedures required by § 61.87 in this or similar make and model of aircraft to be flown.`,
      },
    ],
  },
};

// 0 is first middle and last, 1 is make and model, 2 is the persons gender
