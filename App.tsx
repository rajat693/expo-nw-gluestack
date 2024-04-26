import React from "react";
import { Image, GluestackUIProvider } from "./components/ui";

export const App = () => {
  return (
    <GluestackUIProvider>
      <Image
        source={require("./assets/gluestack-ui-logo.png")}
        alt="gluestack-logo"
      />
    </GluestackUIProvider>
  );
};
