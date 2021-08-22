import { StyleSheet } from "react-native";
import { primaryTheme, colors, components, compVariants } from "../../../config";

const textStyles = StyleSheet.create({
  default: {
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto",
    color: colors.sandybrown,
  },
  primary: {
    color: primaryTheme.buttonText,
    textAlign: "center",
    fontWeight: "bold",
  },
});

const buttonStyles = StyleSheet.create({
  default: {
    backgroundColor: colors.navajowhite,
    borderRadius: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  primary: {
    backgroundColor: primaryTheme.buttonBackground,
    shadowColor: primaryTheme.buttonShadow,
    elevation: 3,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 50,
    shadowRadius: 5,
  },
});

const getCompVariant = (styleSet: any, variant: string) => {
  switch (variant) {
    case compVariants.Primary:
      return StyleSheet.flatten([styleSet.default, styleSet.primary]);
    default:
      return styleSet.default;
  }
};

const getComponent = (component: string) => {
  switch (component) {
    case components.Text:
      return textStyles;
    case components.View:
      return buttonStyles;
    default:
      return {};
  }
};

const getStyle = (component: string, variant: string) => {
  const compStyles = getComponent(component);
  return getCompVariant(compStyles, variant);
};

export default getStyle;
