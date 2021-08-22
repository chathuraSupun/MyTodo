/* eslint arrow-body-style: 0 */
import React, { FC } from "react";
import { TouchableOpacity, Text } from "react-native";

import styles from "./Button.styles";
import { components, compVariants } from "../../../config";

type Props = {
  disabled?: boolean;
  onClick: () => void;
  children: any;
  variant?: string;
};

const Button: FC<Props> = ({
  disabled = false,
  onClick = () => {},
  children = "",
  variant = compVariants.Default,
}) => {
  return (
    <TouchableOpacity
      onPress={() => onClick()}
      disabled={disabled}
      style={styles(components.View, variant)}
    >
      <Text style={styles(components.Text, variant)}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
