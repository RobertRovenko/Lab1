import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  TextInput,
} from "react-native";

export default function App() {
  let name = "Robert";

  let onButtonPress = () => {
    console.log("klick!");
  };

  const [bgColor, setbgColor] = useState("white");
  const [textColor, settextColor] = useState("black");
  const [hiddentext, sethiddentext] = useState("Try pressing the button!");
  const [nameInput, setnameInput] = useState("");
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.containerTop,
          backgroundColor: bgColor,
        }}
      >
        <Text
          style={{
            fontStyle: "italic",
            fontSize: 40,
            alignSelf: "center",
            paddingTop: "25%",
            color: textColor,
          }}
        >
          Hello {nameInput}!
        </Text>
        <Text
          style={{
            fontStyle: "italic",
            color: textColor,
            alignSelf: "flex-end",
            paddingEnd: "5%",
            position: "absolute",
            bottom: 20,
          }}
        >
          Sign up
        </Text>
      </View>

      <View
        style={{
          width: "100%",
          height: 200,
          position: "absolute",
          top: "23%",
          backgroundColor: bgColor,
        }}
      >
        <Text
          style={{
            color: textColor,
            fontSize: 20,
            position: "absolute",
            top: "5%",
            alignSelf: "flex-start",
            paddingLeft: "5%",
          }}
        >
          This my first hybrid app!
        </Text>
        <Image
          style={styles.babyYoda}
          source={{
            uri: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
          }}
        />
      </View>

      <Text
        style={{
          paddingTop: 100,
          margin: 20,
          fontSize: 20,
          fontStyle: "italic",
        }}
      >
        {hiddentext}
      </Text>
      <Button
        title="press me"
        color={"black"}
        onPress={() => {
          setbgColor("black");
          settextColor("white");
          onButtonPress();
          sethiddentext(
            "I used 3 constants to setState. \n\n bgColor, textColor and hiddenText, so i can now change my app to darktheme and change this text with a buttonpress"
          );
        }}
      ></Button>
      <Button
        title="Add"
        onPress={() =>
          setCounter((prevCounter) => {
            return prevCounter + 1;
          })
        }
      ></Button>
      <Text>{counter}</Text>
      <TextInput
        placeholder="Enter your name here:"
        onChangeText={(newTextValue) => setnameInput(newTextValue)}
      ></TextInput>

      <Text
        style={{
          color: textColor,
          position: "absolute",
          bottom: 20,
        }}
      >
        My first app! LAB made by Robert
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  babyYoda: {
    width: 100,
    height: 100,
    position: "absolute",
    alignSelf: "flex-end",
    right: "20%",
    bottom: "25%",
  },
  containerTop: {
    width: "100%",
    height: 200,
    position: "absolute",
    top: 0,
  },
});
