import "./global.css";
import React, { useState } from "react";
import { GluestackUIProvider, Text, SafeAreaView, View } from "./components/ui";

export default function App() {
  const [colorMode, setColorMode] = useState<"dark" | "light">("light");

  return (
    <GluestackUIProvider mode={colorMode}>
      <SafeAreaView className="flex-1 justify-center items-center">
        <View className="h-40 w-40 bg-red-200">
          <Text className="dark:text-green-600 text-blue-600">Simple Text</Text>
        </View>
      </SafeAreaView>
    </GluestackUIProvider>
  );
}
