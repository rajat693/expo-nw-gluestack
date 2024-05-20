import "./global.css";
import React from "react";
import {
  Heading,
  Text,
  SafeAreaView,
  GluestackUIProvider,
  AddIcon,
  Button,
  ButtonText,
  GlobeIcon,
  Icon,
  Menu,
  MenuItem,
  MenuItemLabel,
  SettingsIcon,
  Box,
} from "./components/ui";
import { PuzzleIcon, PaintBucket } from "lucide-react-native";

export default function App() {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <GluestackUIProvider mode="light">
        <Box className="h-screen w-screen justify-center items-center">
          <Menu
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
              <Icon as={GlobeIcon} size="sm" mr="$2" />
              <MenuItemLabel size="sm">Community</MenuItemLabel>
            </MenuItem>
            <MenuItem key="Plugins" textValue="Plugins">
              {/* PuzzleIcon is imported from 'lucide-react-native' */}
              <Icon as={PuzzleIcon} size="sm" mr="$2" />
              <MenuItemLabel size="sm">Plugins</MenuItemLabel>
            </MenuItem>
            <MenuItem key="Theme" textValue="Theme">
              {/* PaintBucket is imported from 'lucide-react-native' */}
              <Icon as={PaintBucket} size="sm" mr="$2" />
              <MenuItemLabel size="sm">Theme</MenuItemLabel>
            </MenuItem>
            <MenuItem key="Settings" textValue="Settings">
              <Icon as={SettingsIcon} size="sm" mr="$2" />
              <MenuItemLabel size="sm">Settings</MenuItemLabel>
            </MenuItem>
            <MenuItem key="Add account" textValue="Add account">
              <Icon as={AddIcon} size="sm" mr="$2" />
              <MenuItemLabel size="sm">Add account</MenuItemLabel>
            </MenuItem>
          </Menu>
        </Box>
      </GluestackUIProvider>
    </SafeAreaView>
  );
}
