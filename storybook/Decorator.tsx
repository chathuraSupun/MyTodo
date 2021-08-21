/* eslint-disable arrow-body-style */
import React from "react";
import { View } from "react-native";

const BufferView = (storyFn: Function) => {
  return <View style={{ flex: 1, justifyContent: "center" }}>{storyFn()}</View>;
};

export default BufferView;
