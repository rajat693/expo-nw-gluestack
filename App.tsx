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
import { Search } from "lucide-react-native";

export default function App() {
  return (
    <GluestackUIProvider>
      <SafeAreaView className="justify-center items-center flex-1">
        <Text className="text-red-500">
          Open up App.tsx to start working on your app!
        </Text>

        <Alert className="mx-2.5" action="info" variant="solid">
          <AlertIcon as={Search} className="mr-2" />
          <AlertText>
            We have updated our terms of service. Please review and accept to
            continue using our service.
          </AlertText>
        </Alert>
      </SafeAreaView>
    </GluestackUIProvider>
  );
}
