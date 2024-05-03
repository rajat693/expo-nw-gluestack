import "./global.css";
import React from "react";
import {
  Heading,
  Text,
  SafeAreaView,
  GluestackUIProvider,
} from "./components/ui";

export default function App() {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <GluestackUIProvider>
        <Text size="xl">hello world</Text>
        <Heading>hello world</Heading>
      </GluestackUIProvider>
    </SafeAreaView>
  );
}
