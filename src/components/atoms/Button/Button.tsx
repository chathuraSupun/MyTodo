/* eslint arrow-body-style: 0 */
import React, { FC } from "react";
import { TouchableOpacity, Text } from "react-native";

import styles from "./Button.styles";

type Props = {
  disabled: boolean;
  onClick: () => void;
  children: any;
};

const Button: FC<Props> = ({ disabled, onClick, children }) => {
  return (
    <TouchableOpacity onPress={onClick} disabled={disabled}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
