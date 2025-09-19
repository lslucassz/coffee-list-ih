import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

export default function RootLayout() {  

  return (
    <ActionSheetProvider>
      <ThemeProvider value={DarkTheme}>
          <StatusBar style='light' />
          <View style={{ flex: 1 }}>
            <Stack initialRouteName='WelcomeScreen'>
              <Stack.Screen name="index" options={{ headerShown: false }} />
              <Stack.Screen name="Home" options={{ headerShown: false }} />
              <Stack.Screen name="Details" options={{ headerShown: false }} />
              <Stack.Screen name="Settings" options={{ headerShown: false }} />
              <Stack.Screen name="WelcomeScreen" options={{ headerShown: false }} />
            </Stack>
          </View>
        </ThemeProvider>
    </ActionSheetProvider>
  )
}
