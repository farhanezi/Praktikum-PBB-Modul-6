import { useEffect, useState } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { enableScreens } from "react-native-screens";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import { MonitoringScreen } from "./src/screens/MonitoringScreen.js";
import { ControlScreen } from "./src/screens/ControlScreen.js";
import { ProfileScreen } from "./src/screens/ProfileScreen.js";
import { StartupScreen } from "./src/screens/StartupScreen.js";
import { assertConfig } from "./src/services/config.js";
import { tokens } from "./src/theme/tokens.js";

const Tab = createBottomTabNavigator();
const { color } = tokens;

enableScreens(true);
SplashScreen.setOptions({ duration: 450, fade: true });
void SplashScreen.preventAutoHideAsync().catch(() => {
  // The native splash module is not available on every platform (for example web).
});

function getHeaderTitle(routeName) {
  if (routeName === "Control") return "Pengaturan Batas";
  if (routeName === "Profil") return "Profil Kelompok 08";
  return "LiveTemp";
}

export default function App() {
  const [showStartup, setShowStartup] = useState(true);

  useEffect(() => {
    assertConfig();
    SplashScreen.hide();
  }, []);

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: color.bg,
      card: color.surface,
      text: color.text,
      border: color.border,
      primary: color.primary,
    },
  };

  return (
    <SafeAreaProvider>
      {showStartup ? (
        <StartupScreen onFinish={() => setShowStartup(false)} />
      ) : (
        <NavigationContainer theme={theme}>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: true,
              headerTitle: getHeaderTitle(route.name),
              headerTitleAlign: "left",
              headerTintColor: color.text,
              headerStyle: {
                backgroundColor: color.surface,
                borderBottomWidth: 1,
                borderBottomColor: color.border,
              },
              headerTitleStyle: {
                fontWeight: "600",
                fontSize: 17,
                fontFamily: "monospace",
                letterSpacing: -0.5,
              },
              tabBarActiveTintColor: color.primary,
              tabBarInactiveTintColor: color.text2,
              tabBarLabelStyle: { fontSize: 12, fontWeight: "500" },
              tabBarStyle: {
                backgroundColor: color.surface,
                borderTopWidth: 1,
                borderTopColor: color.border,
              },
              tabBarHideOnKeyboard: true,
              tabBarIcon: ({ color: iconColor }) => {
                const iconName =
                  route.name === "Monitoring"
                    ? "pulse"
                    : route.name === "Control"
                      ? "options"
                      : "people";
                return <Ionicons name={iconName} size={24} color={iconColor} />;
              },
            })}
          >
            <Tab.Screen name="Monitoring" component={MonitoringScreen} />
            <Tab.Screen name="Control" component={ControlScreen} />
            <Tab.Screen name="Profil" component={ProfileScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      )}
    </SafeAreaProvider>
  );
}
