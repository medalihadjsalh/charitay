import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SigninScreen from "../SigninScreen/SigninScreen";
import SignupScreen from "../SignupScreen/SignupScreen";
import ForgetPassword from "../ForgetPassword/ForgetPassword";
import AssociationSignupScreen from "../AssociationSignupScreen/AssociationSignupScreen.js";
import NeedanhelpSignupScreen from "../Need an help SignupScreen copy/NeedanhelpSignupScreen";
import Virfy from "../Virfy";
import Onboarding from "../../components/Onboarding";
import AHome from "../AssociationHome/AHome";
import DHome from "../DisableHome/DHome";
import VHome from "../VolunteerHome/VHome";
import MapDs from "../../Map1/MapDs";
import MapVal from "../../Map1/MapVal";



const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="homepage" component={Onboarding} />
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="Virfy" component={Virfy} />
        <Stack.Screen name="Association" component={AssociationSignupScreen} />
        <Stack.Screen name="NeedHelp" component={NeedanhelpSignupScreen} />
        <Stack.Screen name="VolunteerHome" component={VHome} />
        <Stack.Screen name="DisableHome" component={DHome} />
        <Stack.Screen name="AssociationHome" component={AHome} />
        
        <Stack.Screen name="MapDs" component={MapDs} />
        <Stack.Screen name="MapVal" component={MapVal} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;