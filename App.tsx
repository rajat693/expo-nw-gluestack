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
  ChevronDownIcon,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  Tooltip,
  TooltipContent,
  TooltipText,
  CheckIcon,
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  CircleIcon,
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
} from "./components/ui";

const TestingPopover = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <Popover
      isOpen={isOpen}
      onClose={handleClose}
      onOpen={handleOpen}
      placement="bottom"
      size="md"
      trigger={(triggerProps) => {
        return (
          <Button {...triggerProps}>
            <ButtonText>Popover</ButtonText>
          </Button>
        );
      }}
    >
      <PopoverBackdrop className="opacity-85 bg-red-500" />
      <PopoverContent className="max-w-[400]">
        <PopoverHeader>
          <Heading size="lg">Welcome!</Heading>
          <PopoverCloseButton>
            <Icon as={CloseIcon} />
          </PopoverCloseButton>
        </PopoverHeader>
        <PopoverBody>
          <Text size="sm">
            Join the product tour and start creating your own checklist. Are you
            ready to jump in?
          </Text>
        </PopoverBody>
        <PopoverFooter>
          <Text size="xs" className="flex-1">
            Step 2 of 3
          </Text>
          <Button
            variant="outline"
            action="secondary"
            onPress={handleClose}
            className="mr-3"
          >
            <ButtonText>Back</ButtonText>
          </Button>
          <Button onPress={handleClose}>
            <ButtonText>Next</ButtonText>
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

const TestingSelect = () => {
  return (
    <Select>
      <SelectTrigger variant="outline" size="md">
        <SelectInput placeholder="Select option" />
        <SelectIcon className="mr-3" as={ChevronDownIcon} />
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent>
          <SelectDragIndicatorWrapper>
            <SelectDragIndicator />
          </SelectDragIndicatorWrapper>
          <SelectItem label="UX Research" value="ux" />
          <SelectItem label="Web Development" value="web" />
          <SelectItem
            label="Cross Platform Development Process"
            value="Cross Platform Development Process"
          />
          <SelectItem label="UI Designing" value="ui" isDisabled={true} />
          <SelectItem label="Backend Development" value="backend" />
        </SelectContent>
      </SelectPortal>
    </Select>
  );
};

const TestingTooltip = () => {
  return (
    <Tooltip
      placement="top"
      trigger={(triggerProps) => {
        return (
          <Button className="h-24" {...triggerProps}>
            <ButtonText>Hover on me!</ButtonText>
          </Button>
        );
      }}
    >
      <TooltipContent>
        <TooltipText>Tooltip</TooltipText>
      </TooltipContent>
    </Tooltip>
  );
};

const TestingCheckbox = () => {
  return (
    <Checkbox size="md" isInvalid={false} isDisabled={false} value={""}>
      <CheckboxIndicator>
        <CheckboxIcon as={CheckIcon} />
      </CheckboxIndicator>
      <CheckboxLabel>Label</CheckboxLabel>
    </Checkbox>
  );
};

const TestingRadio = () => {
  return (
    <RadioGroup>
      <Radio value="change" size="md" isInvalid={false} isDisabled={false}>
        <RadioIndicator>
          <RadioIcon as={CircleIcon} className="stroke-1" />
        </RadioIndicator>
        <RadioLabel>Label</RadioLabel>
      </Radio>
    </RadioGroup>
  );
};

export default function App() {
  const [colorMode, setColorMode] = React.useState<"dark" | "light">("dark");
  return (
    <GluestackUIProvider mode={colorMode}>
      <SafeAreaView className="flex-1 justify-center items-center">
        <Button
          onPress={() =>
            setColorMode((prev) => (prev === "light" ? "dark" : "light"))
          }
          className="mt-10 bg-error-500"
        >
          <ButtonText>{colorMode}</ButtonText>
        </Button>
        <TestingRadio />
      </SafeAreaView>
    </GluestackUIProvider>
  );
}
