import {View, StyleSheet, Text} from "react-native";
import {Icon, withBadge} from "react-native-elements";

export default function HomeHeader({navigation}){

    const BadgeIcon = withBadge(0)(Icon)

    return (
        <View style={styles.header}>
            <View style={styles.iconContainer} >
                <Icon
                    name={'menu'}
                    type={'material-community'}
                    color={'white'}
                    size={32}
                    onPress={()=>{navigation.toggleDrawer()}}/>
            </View>
            <View style={styles.headerTitleContainer} >
                <Text style={styles.headerTitle} >Food Delivery</Text>
            </View>

            <View style={styles.badgeIconContainer} >
                <BadgeIcon type={'material-community'} name={'cart'} color={'white'} size={32} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        backgroundColor:'black',
        height:40,
        justifyContent:'space-between'
    },
    iconContainer:{
        alignItems:'center',
        justifyContent:'center',
        marginLeft:15,
    },
    headerTitleContainer:{
        alignItems:'center',
        justifyContent:'center',
    },
    headerTitle:{
        color:'white',
        fontSize:24,
        fontWeight:'bold',
    },
    badgeIconContainer:{
        margin:5,
    }
})
