import React from "react";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";

import Button from "./Button";
import Decorator from "../../../../storybook/Decorator";

storiesOf("Button", module)
  .addDecorator(Decorator)
  .add("default", () => (
    <Button onClick={action("tapped-default")}>click me</Button>
  ));
