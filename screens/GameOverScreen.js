import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors  from "../constants/colors";
const GameOverScreen = props => {
  return (
    <View style={styles.container}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        {/* <Image source={require("../assets/success.png")} style={styles.image} /> */}
        <Image
          source={{
            uri:
              "https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg"
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.resultContainer}>
      <BodyText style={styles.resultText}>
        Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the
        number <Text style={styles.highlight}>{props.userNumber} </Text>
      </BodyText>
      </View>
      
      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    height: "100%",
    width: "100%"
  },
  imageContainer: {
    borderRadius: 200,
    borderWidth: 3,
    borderColor: "black",
    width: "80%",
    height: 300,
    overflow: "hidden",
    marginVertical: 20
  },
  resultContainer:{
    marginHorizontal: 30,
    marginVertical: 20
  },
  resultText: {
    textAlign: "center",
    fontSize: 20
  },
  highlight: {
    color: Colors.primary
  }
});

export default GameOverScreen;
