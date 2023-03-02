import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Welcome from "./Components/Welcome";
import { Pet } from "./Components/Pet";
import { PetQualities } from "./Components/PetQualities";

export default function App() {
  const petName = {
    firstName: "Roger",
    lastName: "Rabbit",
  };

  const qualities = [
    {
      qualOne: "cute",
      qualTwo: "adorable",
      qualThree: "lovable",
      age: 2,
    },
    {
      qualOne: "green",
      qualTwo: "sometimes yellow",
      qualThree: "purple",
      age: 34,
    },
  ];

  const constMessage = "Are these the qualities you were looking for?";

  const [finalMessage, setFinalMessage] = useState(
    "But I'm assuming it's true."
  );

  return (
    <View style={styles.container}>
      <Welcome name="Jack" age={37} professor={true} />
      <Pet petName={petName} type="Komodo Dragon" />
      <PetQualities qualities={qualities} />
      <Text>{constMessage}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
});
