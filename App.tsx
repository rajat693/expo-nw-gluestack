import "./global.css"
import { StatusBar } from 'expo-status-bar';
import { Text, View } from './components/ui';

export default function App() {
  return (
    <View >
      <Text className='text-red-500'>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}