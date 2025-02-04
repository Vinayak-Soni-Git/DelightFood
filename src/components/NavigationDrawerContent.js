import {Avatar, Icon} from 'react-native-elements';
import {StyleSheet, View, Text, Switch} from "react-native";
import {DrawerContentScrollView, DrawerItem, DrawerItemList} from "@react-navigation/drawer";

export default function NavigationDrawerContent(props) {
    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View style={styles.avatarContainer}>
                    <Avatar rounded
                            avatarStyle={styles.avatarStyle}
                            size={80}
                            source={{uri: 'https://th.bing.com/th/id/OIP.NbS7jYmjNa5DvAmgXtkRcAHaHa?rs=1&pid=ImgDetMain'}}>
                    </Avatar>
                    <View style={styles.userDetailsContainer}>
                        <Text style={styles.userName}>John Doe</Text>
                        <Text style={styles.userEmail}>John@gmail.com</Text>
                    </View>

                </View>
                <View style={styles.userActivityDetailsContainer}>
                    <View style={styles.userActivityDetails}>
                        <Text style={styles.myFavourite}>1</Text>
                        <Text style={styles.myFavourite}>Favourites</Text>
                    </View>

                    <View style={styles.userActivityDetails}>
                        <Text style={styles.myCart}>2</Text>
                        <Text style={styles.myCart}>Cart</Text>
                    </View>
                </View>
                <DrawerItemList {...props}/>
                <DrawerItem label={'Payment'} icon={({color, size}) => (
                    <Icon name={'credit-card-outline'}
                          type={'material-community'}
                          color={color}
                          size={size}/>
                )}/>
                <DrawerItem label={'Promotion'} icon={({color, size}) => (
                    <Icon name={'tag-heart'}
                          type={'material-community'}
                          color={color}
                          size={size}/>
                )}/>
                <DrawerItem label={'Settings'} icon={({color, size}) => (
                    <Icon name={'cog-outline'}
                          type={'material-community'}
                          color={color}
                          size={size}/>
                )}/>
                <DrawerItem label={'Help'} icon={({color, size}) => (
                    <Icon name={'credit-card'}
                          type={'lifebuoy'}
                          color={color}
                          size={size}/>
                )}/>
                <View style={styles.preferencesContainer}>
                    <Text style={styles.preferencesText}>Preferences</Text>
                    <View style={styles.switchThemeContainer}>
                        <Text style={styles.darkThemeText}>Dark Theme</Text>
                        <Switch trackColor={{false: 'grey', true: 'black'}}
                                thumbColor={'black'}
                        />
                    </View>
                </View>
            </DrawerContentScrollView>
            <DrawerItem label={'Sign Out'} icon={({color, size}) => (
                <Icon name={'logout-variant'}
                      type={'material-community'}
                      color={color}
                      size={size}/>
            )}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatarStyle: {
        borderWidth: 4,
        borderColor: 'black',
    },
    avatarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    userName: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 18
    },
    userEmail: {
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold',
    },
    userDetailsContainer: {
        margin: 10,
    },
    userActivityDetails: {
        margin: 10,
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 50,
    },
    myFavourite: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
    myCart: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
    userActivityDetailsContainer: {
        width: '80%',
        flexDirection: 'row',
        backgroundColor: 'black',
        borderRadius: 10,
        margin: 5,
    },
    preferencesContainer: {
        padding: 15,
    },
    preferencesText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 22,
    },
    darkThemeText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
    },
    switchThemeContainer: {
        margin: 10,
    }
})
