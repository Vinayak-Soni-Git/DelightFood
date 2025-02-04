import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Pressable,
    Image,
    Dimensions
} from "react-native";
import Countdown from "react-native-countdown-component";
import {Icon} from "react-native-elements";
import HomeHeader from "../components/HomeHeader";
import {useState} from "react";
import {filterData, restaurantsData} from "../global/Data";
import FoodCard from "../components/FoodCard";
import {Routes} from "../navigation/Routes";

const SCREEN_WIDTH = Dimensions.get('window').width

export default function HomeScreen({navigation}) {
    const [delivery, setDelivery] = useState(true)
    const [pickUp, setPickUp] = useState(false)
    const [indexCheck, setIndexCheck] = useState('0')

    return (
        <View style={styles.container}>
            <HomeHeader navigation={navigation} />
            <ScrollView showsVerticalScrollIndicator={false}
                        stickyHeaderIndices={[0]}>
                <View>
                    <View style={styles.tabsContainer}>
                        <TouchableOpacity style={styles.tab} onPress={() => {
                            setDelivery(true)
                            setPickUp(false)
                        }}>
                            <View style={[styles.tabButton, delivery ? styles.tabOnColor : styles.tabOffColor]}>
                                <Text
                                    style={[styles.tabText, delivery ? styles.tabTextOnColor : styles.tabTextOffColor]}>Delivery</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tab} onPress={() => {
                            setDelivery(false)
                            setPickUp(true)
                            navigation.navigate(Routes.RestaurantMapsScreen)
                        }}>
                            <View style={[styles.tabButton, pickUp ? styles.tabOnColor : styles.tabOffColor]}>
                                <Text style={[styles.tabText, pickUp ? styles.tabTextOnColor : styles.tabTextOffColor]}>Pick
                                    Up</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.addressTimeContainer}>
                    <View style={styles.addressIconTextContainer}>
                        <Icon type={'material-community'} name={'map-marker'} size={26}/>
                        <Text>22 Bessie street</Text>
                    </View>
                    <View style={styles.addressIconTextContainer}>
                        <View style={styles.timeContainer}>
                            <Icon type={'material-community'} name={'clock'} size={26}/>
                            <Text>Now</Text>
                        </View>
                    </View>
                    <View>
                        <Icon type={'material-community'} name={'tune'} size={26}/>
                    </View>
                </View>
                <View style={styles.categoriesTextContainer}>
                    <Text style={styles.categoriesText}>Categories</Text>
                </View>
                <View>
                    <FlatList data={filterData}
                              horizontal={true}
                              showsHorizontalScrollIndicator={false}
                              extraData={indexCheck}
                              keyExtractor={(item) => item.id}
                              renderItem={({item, index}) => (
                                  <Pressable onPress={() => setIndexCheck(item.id)}>
                                      <View
                                          style={indexCheck === item.id ? {...styles.categoryCardSelected} : {...styles.categoryCard}}>
                                          <Image source={item.image} style={styles.categoryCardImage}/>
                                          <Text
                                              style={indexCheck === item.id ? {...styles.categoryCardTextSelected} : {...styles.categoryCardText}}>{item.name}</Text>
                                      </View>

                                  </Pressable>
                              )}/>
                </View>
                <View style={styles.categoriesTextContainer}>
                    <Text style={styles.categoriesText}>Free Delivery Now</Text>
                </View>
                <View style={styles.restaurantsContainer}>

                    <View style={styles.timerContainer} >
                        <Text style={styles.timerAlertText}>Options changing in</Text>
                        <Countdown
                            until={60}
                            size={20}
                            digitStyle={styles.digitStyle}
                            digitTxtStyle={styles.digitTextStyle}
                            timeToShow={['M', 'S']}
                            timeLabels={{M:'Minutes', S:'seconds'}}

                        />
                    </View>

                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={restaurantsData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => (
                            <View>
                                <FoodCard
                                    screenWidth={SCREEN_WIDTH * 0.8}
                                    images={item.image}
                                    restaurantName={item.restaurantName}
                                    farAway={item.farAway}
                                    businessAddress={item.businessAddress}
                                    averageReview={item.averageReview}
                                    numberOfReviews={item.numberOfReviews}
                                />
                            </View>
                        )}/>
                </View>
            </ScrollView>
            {delivery &&
            <View style={styles.floatingButtonContainer} >
                <TouchableOpacity onPress={()=>{navigation.navigate(Routes.RestaurantMapsScreen)}} >
                    <Icon name={'place'}
                          type={'material'}
                          size={32}
                          color={'white'}/>
                    <Text style={styles.mapText} >Map</Text>
                </TouchableOpacity>
            </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    tabsContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tab: {
        width: 140,
    },
    tabButton: {
        paddingHorizontal: 20,
        borderRadius: 15,
        paddingVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabText: {
        color: 'white',
        fontWeight: 'bold',
    },
    tabOnColor: {
        backgroundColor: 'black',
        color: 'white',
    },
    tabOffColor: {
        color: 'Black',
        backgroundColor: 'white',
    },
    tabTextOnColor: {
        color: 'white'
    },
    tabTextOffColor: {
        color: 'black',
    },
    addressIconTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 40,
    },
    addressTimeContainer: {
        width: '90%',
        margin: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgrey',
        padding: 5,
        borderRadius: 20,
        elevation:10,
    },
    timeContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 4,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoriesTextContainer: {
        backgroundColor: 'white',
        padding: 5,
        elevation:10,
    },
    categoriesText: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
    },
    categoryCard: {
        borderRadius: 30,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        width: 80,
        margin: 10,
        height: 100,
        elevation:10,
    },
    categoryCardSelected: {
        borderRadius: 30,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        width: 80,
        margin: 10,
        height: 100,
    },
    categoryCardImage: {
        height: 60,
        width: 60,
    },
    categoryCardText: {
        color: 'black'
    },
    categoryCardTextSelected: {
        color: 'white'
    },
    restaurantsContainer: {
        marginTop:0,
    },
    timerContainer:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    timerAlertText:{
        fontSize:24,
        padding:10,
        fontWeight:'bold',
        color:'black'
    },
    digitStyle:{
        backgroundColor:'green',
    },
    digitTextStyle:{
        color:'white',
    },
    floatingButtonContainer:{
        position:'absolute',
        bottom:10,
        right:15,
        elevation:10,
        width:80,
        height:80,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'black',
        padding:10,
    },
    mapText:{
        color:'white',

    }
})
