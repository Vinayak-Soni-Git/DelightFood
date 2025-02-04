import {createStackNavigator} from "@react-navigation/stack";
import SearchScreen from "../screens/SearchScreen";
import SearchResultScreen from "../screens/SearchResultScreen";
import RestaurantHomeScreen from "../screens/RestaurantHomeScreen";

const ClientSearchStack = createStackNavigator()
export default function ClientStackNavigator(){
    return (
        <ClientSearchStack.Navigator>
            <ClientSearchStack.Screen name={'SearchScreen'}
            component={SearchScreen}
            options={
                ()=>({
                    headerShown:false,

                })
            }>
            </ClientSearchStack.Screen>
            <ClientSearchStack.Screen name={'SearchResultScreen'}
                                      component={SearchResultScreen}
                                      options={
                                          ()=>({
                                              headerShown:false,

                                          })
                                      }>
            </ClientSearchStack.Screen>
            <ClientSearchStack.Screen name={'RestaurantHomeScreen'}
                                      component={RestaurantHomeScreen}
                                      options={
                                          ()=>({
                                              headerShown:false,
                                          })
                                      }>
            </ClientSearchStack.Screen>
        </ClientSearchStack.Navigator>
    )
}

