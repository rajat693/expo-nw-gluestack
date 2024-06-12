import "./global.css";
import React, { useState } from "react";
import {
  GluestackUIProvider,
  Text,
  SafeAreaView,
  View,
  AddIcon,
  Button,
  ButtonText,
  MenuItem,
  MenuItemLabel,
  GlobeIcon,
  Icon,
  Menu,
  SettingsIcon,
} from "./components/ui";
import { PaintBucket, PuzzleIcon } from "lucide-react-native";

export default function App() {
  const [colorMode, setColorMode] = useState<"dark" | "light">("light");

  return (
    <GluestackUIProvider mode={colorMode}>
      <SafeAreaView className="flex-1 justify-center items-center">
        {/* <View className="h-40 w-40 bg-red-200">
          <Text className="dark:text-green-600 text-blue-600">Simple Text</Text>
        </View> */}

        <Menu
          size="lg"
          // offset={5}
          placement="top"
          trigger={({ ...triggerProps }) => {
            return (
              <Button {...triggerProps}>
                <ButtonText>Menu</ButtonText>
              </Button>
            );
          }}
        >
          <MenuItem key="Community" textValue="Community">
            <Icon as={GlobeIcon} size="sm" className="mr-2" />
            <MenuItemLabel size="sm">Community</MenuItemLabel>
          </MenuItem>
          <MenuItem key="Plugins" textValue="Plugins">
            {/* PuzzleIcon is imported from 'lucide-react-native' */}
            <Icon as={PuzzleIcon} size="sm" className="mr-2" />
            <MenuItemLabel size="sm">Plugins</MenuItemLabel>
          </MenuItem>
          <MenuItem key="Theme" textValue="Theme">
            {/* PaintBucket is imported from 'lucide-react-native' */}
            <Icon as={PaintBucket} size="sm" className="mr-2" />
            <MenuItemLabel size="sm">Theme</MenuItemLabel>
          </MenuItem>
          <MenuItem key="Settings" textValue="Settings">
            <Icon as={SettingsIcon} size="sm" className="mr-2" />
            <MenuItemLabel size="sm">Settings</MenuItemLabel>
          </MenuItem>
          <MenuItem key="Add account" textValue="Add account">
            <Icon as={AddIcon} size="sm" className="mr-2" />
            <MenuItemLabel size="sm">Add account</MenuItemLabel>
          </MenuItem>
        </Menu>
      </SafeAreaView>
    </GluestackUIProvider>
  );
}
