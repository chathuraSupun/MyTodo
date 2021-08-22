import React from "react";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";

import Button from "./Button";
import Decorator from "../../../../storybook/Decorator";
import { compVariants } from "../../../config";

storiesOf("Button", module)
  .addDecorator(Decorator)
  .add("default", () => (
    <Button onClick={action("tapped-default")}>Default Button</Button>
  ))
  .add("Primary", () => (
    <Button onClick={action("tapped-primary")} variant={compVariants.Primary}>
      Primary Button
    </Button>
  ));
