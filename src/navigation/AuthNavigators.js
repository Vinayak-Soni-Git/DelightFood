import React from 'react';
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import WelcomeScreen from "../screens/authenticationscreens/WelcomeScreen";
import SignInScreen from "../screens/authenticationscreens/SignInScreen";
import {Routes} from "./Routes";
import RestaurantMapsScreen from "../screens/RestaurantMapsScreen";
import DrawerNavigation from "./DrawerNavigation";

const AuthStack = createStackNavigator()

export default function AuthNavigators(){
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name={Routes.WelcomeScreen}
                              component={WelcomeScreen}
                              options={{
                                  headerShown:false,
                                  ...TransitionPresets.RevealFromBottomAndroid
                              }}
            />
            <AuthStack.Screen name={Routes.SignInScreen}
                              component={SignInScreen}
                              options={{
                                  headerShown:false,
                                  ...TransitionPresets.RevealFromBottomAndroid
                              }}
            />
            <AuthStack.Screen name={'RootClientTabs'}
                              component={DrawerNavigation}
                              options={{
                                  headerShown:false,
                                  ...TransitionPresets.RevealFromBottomAndroid
                              }}
            />
            <AuthStack.Screen name={Routes.RestaurantMapsScreen}
                              component={RestaurantMapsScreen}
                              options={{
                                  headerShown:false,
                                  ...TransitionPresets.RevealFromBottomAndroid
                              }}
            />
        </AuthStack.Navigator>
    )
}
