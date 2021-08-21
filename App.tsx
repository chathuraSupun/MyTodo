/* eslint arrow-body-style: 0 */
import React, { FC } from "react";
import { View, Text, Alert } from "react-native";

import Button from "./src/components/atoms/Button/Button";

const App: FC = () => {
  return (
    <View>
      <Text>Hello world</Text>
      <Button onClick={() => Alert.alert("status", "clicked")} disabled={false}>
        <Text>Cick me</Text>
      </Button>
    </View>
  );
};

export default App;
