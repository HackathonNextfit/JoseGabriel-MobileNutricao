import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppTabs from "./AppTabs";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Home"
        component={AppTabs}
        options={{ gestureEnabled: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
