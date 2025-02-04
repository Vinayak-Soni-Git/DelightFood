import {View, Text, StyleSheet} from "react-native";

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Icon} from "react-native-elements";
import HomeScreen from "../screens/HomeScreen";
import MyAccount from "../screens/MyAccount";
import SearchScreen from "../screens/SearchScreen";
import MyOrders from "../screens/MyOrders";
import ClientStackNavigator from "./ClientStackNavigator";

const ClientTab = createBottomTabNavigator()

export default function ClientTabs(){
    return (
        <ClientTab.Navigator tabBarOptions={{
            activeTintColor:'purple',
        }} >
            <ClientTab.Screen
            name={'HomeScreen'}
            component={HomeScreen}
            options={{
                headerShown:false,
                tabBarLabel:'Home',
                tabBarIcon:({color, size})=>(
                    <Icon
                        name={'home'}
                        type={'material'}
                        color={'black'}
                        size={24}
                    />
                )
            }}/>
            <ClientTab.Screen
                name={'SearchScreen'}
                component={ClientStackNavigator}
                options={{
                    headerShown:false,
                    tabBarLabel:'Search',
                    tabBarIcon:({color, size})=>(
                        <Icon
                            name={'search'}
                            type={'material'}
                            color={'black'}
                            size={24}
                        />
                    )
                }}/>
            <ClientTab.Screen
                name={'Orders Screen'}
                component={MyOrders}
                options={{
                    headerShown:false,
                    tabBarLabel:'My Orders',
                    tabBarIcon:({color, size})=>(
                        <Icon
                            name={'view-list'}
                            type={'material'}
                            color={'black'}
                            size={24}
                        />
                    )
                }}/>
            <ClientTab.Screen
                name={'AccountScreen'}
                component={MyAccount}
                options={{
                    headerShown:false,
                    tabBarLabel:'Account',
                    tabBarIcon:({color, size})=>(
                        <Icon
                            name={'person'}
                            type={'material'}
                            color={'black'}
                            size={24}
                        />
                    )
                }}/>
        </ClientTab.Navigator>
    )
}
