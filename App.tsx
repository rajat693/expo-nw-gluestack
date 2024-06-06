import "./global.css";
import React from "react";
import {
  SafeAreaView,
  GluestackUIProvider,
  Text,
  Button,
  ButtonText,
  CloseIcon,
  Heading,
  Icon,
  Popover,
  PopoverBackdrop,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
} from "./components/ui";

export default function App() {
  const [colorMode, setColorMode] = React.useState<"dark" | "light">("light");
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <GluestackUIProvider mode={colorMode}>
      <SafeAreaView className="flex-1 justify-center items-center">
        {/* <Popover
          isOpen={isOpen}
          onClose={handleClose}
          onOpen={handleOpen}
          placement="bottom"
          size="md"
          trigger={(triggerProps) => {
            return (
              <Button {...triggerProps}>
                <ButtonText>Open dropdown</ButtonText>
              </Button>
            );
          }}
        >
          <PopoverBackdrop />
          <PopoverContent>
            <Text>Click outside to close</Text>
          </PopoverContent>
        </Popover> */}
        <Button>
          <ButtonText>button</ButtonText>
        </Button>
        <Text size="2xl">hello world</Text>
      </SafeAreaView>
    </GluestackUIProvider>
  );
}
