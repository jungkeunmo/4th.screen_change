import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import Home from "./src/screens/Home";
import Feed from "./src/screens/Feed";
import Setting from "./src/screens/Setting";

const App = () => {
  const [cr, setcr] = useState("");

  const screen1Handler = () => {
    setcr("gray");
  };

  const screen2Handler = () => {
    setcr("blue");
  };

  const screen3Handler = () => {
    setcr("yellow");
  };

  return (
    <View style={styles.viewBox}>
      <View style={styles.viewBoxH}>
        {cr === "gray" ? <Home /> : cr === "blue" ? <Feed /> : <Setting />}
      </View>

      <View style={styles.viewBoxF}>
        <View style={{ flex: 3, backgroundColor: "gray" }}>
          <Button title="Home" onPress={() => screen1Handler()}></Button>
        </View>

        <View style={{ flex: 3, backgroundColor: "blue" }}>
          <Button title="Feed" onPress={() => screen2Handler()}></Button>
        </View>

        <View style={{ flex: 3, backgroundColor: "yellow" }}>
          <Button title="Setting" onPress={() => screen3Handler()}></Button>
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  viewBox: {
    flex: 1,
    flexDirection: "column",
  },

  viewBoxH: {
    flex: 9,
    justifyContent: "center",
    alignItems: "center",
  },

  viewBoxF: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },

  viewBoxButton: {
    flex: 3,
    backgroundColor: "red",
  },
});
