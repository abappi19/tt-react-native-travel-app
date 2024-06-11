import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
export default function OnboardingLayout() {
  return (
    <Tabs initialRouteName="home">
      <Tabs.Screen
        name="home"
        options={{
          tabBarShowLabel: false,
          tabBarIcon(props) {
            return (
              <AntDesign size={24} name="appstore-o" color={props.color} />
            );
          },
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="location"
        options={{
          tabBarShowLabel: false,
          tabBarIcon(props) {
            return (
              <Ionicons size={24} name="location-outline" color={props.color} />
            );
          },
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="message"
        options={{
          tabBarShowLabel: false,
          tabBarIcon(props) {
            return (
              <AntDesign size={24} name="message1" color={props.color} />
            );
          },
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarShowLabel: false,
          tabBarIcon(props) {
            return (
              <Ionicons size={24} name="person-outline" color={props.color} />
            );
          },
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
