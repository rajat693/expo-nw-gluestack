import "./global.css";
import React from "react";
import {
  SafeAreaView,
  GluestackUIProvider,
  Button,
  ButtonText,
  Popover,
  PopoverBackdrop,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  Text,
  Heading,
  CloseIcon,
  Icon,
  PopoverArrow,
} from "./components/ui";

export default function App() {
  const [colorMode, setColorMode] = React.useState<"dark" | "light">("light");
  
  return (
    <GluestackUIProvider mode={colorMode}>
      <SafeAreaView className="flex-1 justify-center items-center">
       
      </SafeAreaView>
    </GluestackUIProvider>
  );
}
