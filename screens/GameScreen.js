import React from "react";
import { StyleSheet, View, Text } from "react-native";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) return (generateRandomBetween = (min, max, exclude));
  else return rndNum;
};

const GameScreen = props => {
  const [currentGuess, SetCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );
  return (
    <View>
      <Text>Opponent´s Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            color={Colors.accent}
            title="LOWER"
            onPress={resetInputHandler}
          />
        </View>
        <View style={styles.button}>
          <Button
            color={Colors.primary}
            title="GREATER"
            onPress={confirmInputHandler}
          />
        </View>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%"
  },
  button: {
    width: 100
  }
});
export default GameScreen;
