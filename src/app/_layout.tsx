import { Stack } from 'expo-router';
import { StackScreen } from 'react-native-screens';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="settings" />
      <Stack.Screen name="newAccount" />
      <Stack.Screen name="loginUser" />
      <Stack.Screen name="appActions" />
    </Stack>
  );
}
