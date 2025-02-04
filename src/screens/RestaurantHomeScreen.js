import {View, StyleSheet, ScrollView, Text, Dimensions} from "react-native";
import RestaurantHeader from "../components/RestaurantHeader";
import {restaurantsData} from "../global/Data";
import {Icon} from "react-native-elements";
import {TabView, TabBar} from "react-native-tab-view";
import {useState} from "react";

const SCREEN_WIDTH = Dimensions.get('window').width
const initialLayout = SCREEN_WIDTH;
export default function RestaurantHomeScreen({navigation, route}) {
    const {id, restaurant} = route.params
    const [routes] = useState([
        {key:'first', title:'MENU'},
        {key:'second', title:'INFO'},
        {key:'third', title:'REVIEWS'},
        {key:'four', title:'GALLERY'}
    ])
    const [index, setIndex] = useState(0)
    const renderTabBar = props =>(
        <TabBar {...props}
                indicatorStyle={styles.tabBarIndicatorStyle}
                tabStyle={styles.tabBarTabStyle}
                scrollEnabled={true}
                style={styles.tabBarStyle}
                labelStyle={styles.tabBarLabelStyle}
                contentContainerStyle={styles.tabBarContentContainerStyle}
        />
    )
    const updateRoute1 = ()=>{
        return (
            <View>

            </View>
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <RestaurantHeader navigation={navigation} id={id}/>
                    {restaurantsData[id].discount &&
                        <View style={styles.discountOfferTextContainer}>
                            <Text style={styles.discountOfferText}>GET {restaurantsData[id].discount}% OFF ON FOOD
                                TOTAL</Text>
                        </View>
                    }
                    <View style={styles.restaurantHeaderDetails}>
                        <View style={styles.restaurantBasicDetailsContainer}>
                            <Text style={styles.restaurantName}>{restaurantsData[id].restaurantName}</Text>
                            <Text style={styles.restaurantFoodTypes}>{restaurantsData[id].foodTypes}</Text>
                            <View style={styles.reviewDistanceContainer}>
                                <Icon name={'star'} type={'material-community'} color={'grey'} size={15}/>
                                <Text>{restaurantsData[id].averageReview}</Text>
                                <Text> ({restaurantsData[id].numberOfReviews})+</Text>
                                <Icon style={styles.markerIcon} name={'map-marker'} type={'material-community'}
                                      color={'grey'} size={15}/>
                                <Text>{restaurantsData[id].farAway} miles away</Text>
                            </View>
                        </View>
                        <View style={styles.collectDeliveryDetailsContainer} >
                            <View style={styles.collectTimeDetailContainer} >
                                <Text style={styles.collectDeliveryText} >Collect</Text>
                                <View style={styles.collectTimeContainer} >
                                    <Text style={styles.collectTime}>{restaurantsData[id].collectTime}</Text>
                                </View>
                            </View>

                            <View style={styles.deliveryTimeDetailContainer} >
                                <Text style={styles.collectDeliveryText}>Delivery</Text>
                                <View style={styles.collectDeliveryTimeContainer} >
                                    <Text style={styles.deliveryTime} >{restaurantsData[id].deliveryTime}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <TabView
                        navigationState={{index, routes}}
                        renderScene={updateRoute1}
                        onIndexChange={setIndex}
                        initialLayout={initialLayout}
                        renderTabBar={renderTabBar}
                        tabBarPosition={'top'}
                    >

                    </TabView>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    reviewDistanceContainer: {
        flexDirection: 'row',
    },
    restaurantBasicDetailsContainer: {
        margin: 10,
    },
    discountOfferTextContainer: {
        alignItems: 'center',
    },
    discountOfferText: {
        color: 'green',
        fontSize: 20,
        fontWeight: 'bold',
    },
    restaurantFoodTypes: {},
    restaurantName: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    markerIcon: {
        marginLeft: 10,
    },
    restaurantHeaderDetails: {
        flexDirection: 'row',
    },
    collectDeliveryDetailsContainer: {
        marginLeft: 10,
        alignItems:'center',
        flexDirection:'row',
    },
    collectTimeDetailContainer:{
        marginRight:10,
        justifyContent:'center',
        alignItems:'center',
    },
    deliveryTimeDetailContainer:{
        justifyContent:'center',
        alignItems:'center',
    },
    collectDeliveryText:{
        color:'black',
        fontSize:18,
        fontWeight:'bold',
    },
    collectDeliveryTimeContainer:{
        backgroundColor:'black',
        borderRadius:50,
        padding:5,
        justifyContent:'center',
        alignItems:'center',
    },
    collectTimeContainer:{
        padding:5,
        justifyContent:'center',
        alignItems:'center',
    },
    collectTime:{
        color:'black',
        fontWeight:'bold',
        fontSize:18,
    },
    deliveryTime:{
        color:'white',
        fontWeight:'bold',
        fontSize:18,
    },
    tabBarIndicatorStyle:{

    },
    tabBarTabStyle:{
        width:105
    },
    tabBarContentContainerStyle:{

    }
})
