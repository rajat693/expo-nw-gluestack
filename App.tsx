import "./global.css";
import React from "react";
import {
  Heading,
  Text,
  SafeAreaView,
  GluestackUIProvider,
} from "./components/ui";
import { H1, H2, H3, H4, H5, H6 } from "@expo/html-elements";

export default function App() {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <GluestackUIProvider>
        <Text size="xl">hello world</Text>
        <Heading>hello world</Heading>
        <H5>hello world</H5>
      </GluestackUIProvider>
    </SafeAreaView>
  );
}
