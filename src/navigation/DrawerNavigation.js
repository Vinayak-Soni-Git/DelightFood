import {createDrawerNavigator} from "@react-navigation/drawer";
import ClientTabs from "./ClientTabs";
import {Icon} from "react-native-elements";
import BusinessConsoleScreen from "../screens/BusinessConsoleScreen";
import NavigationDrawerContent from "../components/NavigationDrawerContent";

const Drawer = createDrawerNavigator()

export default function DrawerNavigation(){
    return (
        <Drawer.Navigator drawerContent={props=><NavigationDrawerContent {...props} />}>
            <Drawer.Screen name={'clientTabs'} component={ClientTabs} options={{
                headerShown:false,
                title:'Client',
                drawerIcon:({focused, size})=>(
                    <Icon
                        name={'home'}
                        type={'material-community'}
                        color={focused?'#7cc':'black'}
                        size={size}/>
                )
            }} />
            <Drawer.Screen name={'BusinessConsoleScreen'} component={BusinessConsoleScreen} options={{
                headerShown:false,
                title:'Business Console',
                drawerIcon:({focused, size})=>(
                    <Icon
                        name={'business'}
                        type={'material'}
                        color={focused?'#7cc':'black'}
                        size={size}/>
                )
            }} />
        </Drawer.Navigator>
    )
}
