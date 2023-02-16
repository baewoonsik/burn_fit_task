import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";

import HomePage from "./screens/HomePage";
import CalendarPage from "./screens/CalendarPage";
import LibraryPage from "./screens/LibraryPage";
import Mypage from "./screens/Mypage";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const NavigationTab = createBottomTabNavigator();

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <NavigationTab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ size, color }) => {
              switch (route.name) {
                case "Home":
                  return <FontAwesome5 name="home" size={size} color={color} />;
                case "Calendar":
                  return (
                    <FontAwesome5
                      name="calendar-alt"
                      size={size}
                      color={color}
                    />
                  );
                case "Library":
                  return (
                    <FontAwesome5 name="dumbbell" size={size} color={color} />
                  );
                case "Mypage":
                  return <FontAwesome5 name="user" size={size} color={color} />;
              }
            },
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <NavigationTab.Screen name="Home" component={HomePage} />
          <NavigationTab.Screen name="Calendar" component={CalendarPage} />
          <NavigationTab.Screen name="Library" component={LibraryPage} />
          <NavigationTab.Screen name="Mypage" component={Mypage} />
        </NavigationTab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
