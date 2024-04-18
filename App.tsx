import "./global.css";
import {
  Text,
  SafeAreaView,
  Alert,
  AlertIcon,
  AlertText,
  InfoIcon,
  GluestackUIProvider,
} from "./components/ui";

export default function App() {
  return (
    <GluestackUIProvider>
      <SafeAreaView className="justify-center items-center flex-1">
        <Text className="text-red-500">
          Open up App.tsx to start working on your app!
        </Text>

        <Alert className="mx-2.5" action="info" variant="solid">
          <AlertIcon as={InfoIcon} className="mr-3" />
          <AlertText>
            We have updated our terms of service. Please review and accept to
            continue using our service.
          </AlertText>
        </Alert>
      </SafeAreaView>
    </GluestackUIProvider>
  );
}
