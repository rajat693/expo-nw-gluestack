import "./global.css";
import {
  Text,
  SafeAreaView,
  GluestackUIProvider,
} from "./components/ui";

export default function App() {
  return (
    <GluestackUIProvider>
      <SafeAreaView className="justify-center items-center flex-1">
        <Text className="text-red-500">
          Open up App.tsx to start working on your app!
        </Text>
      </SafeAreaView>
    </GluestackUIProvider>
  );
}
