import {View, StyleSheet, Text, TouchableOpacity, Image} from "react-native";
import {Icon} from "react-native-elements";


export default function FoodCard({onPressFoodCard, restaurantName, deliveryAvailable,
                                     discountAvailable, discountPercent, numberOfReviews,
                                 businessAddress, farAway, averageReview, images, screenWidth}){
    return(
        <TouchableOpacity style={styles.cardViewOpacityContainer} >
            <View style={{...styles.cardViewContainer, width:screenWidth}} >
                <Image source={{uri:images}} style={{...styles.image}} />
            </View>
            <View>
                <View>
                    <Text style={styles.restaurantName} >{restaurantName}</Text>
                </View>
                <View style={styles.distanceContainer} >
                    <View style={styles.distance} >
                        <Icon name={'place'}
                              type={'material'}
                        color={'grey'}
                        iconStyle={styles.distanceIcon}/>
                        <Text style={styles.farAwayText}>{farAway} Minutes</Text>
                    </View>
                    <Text style={styles.address} >{businessAddress}</Text>
                </View>
            </View>
            <View style={styles.reviewContainer} >
                <Text style={styles.averageReview} >{averageReview}</Text>
                <Text style={styles.totalReview} >{numberOfReviews} reviews</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardViewOpacityContainer: {
        borderRadius:10,
        borderColor:'black',
        margin:5,
        backgroundColor:'white',
        elevation:20,
    },
    cardViewContainer:{
    },
    image:{
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        height:150,
    },
    restaurantName:{
        fontSize:17,
        fontWeight:'bold',
        color:'black',
        marginTop:5,
        marginLeft:5,
    },
    distance:{
        flex:1,
        flexDirection:'row',
        borderRightColor:'grey',
        borderRightWidth:1,
    },
    distanceContainer:{
        flex:1,
        flexDirection:'row',
        padding:5,
        justifyContent:'center',
        alignItems:'center',
    },
    distanceIcon:{
        marginTop:3,
    },
    farAwayText:{
        paddingTop:5,
        fontSize:14,
        fontWeight:'bold',
        color:'black',
        textAlign:'center',
        justifyContent:'center',
    },
    address:{
        fontSize:15,
        paddingTop:5,
        color:'black',
        paddingHorizontal:10,
    },
    reviewContainer:{
        position:'absolute',
        top:0,
        right:10,
        backgroundColor:'transparent',
        padding:2,
        alignItems:'center',
        justifyContent:'center',
        borderTopRightRadius:5,
        borderBottomLeftRadius:12,
    },
    averageReview:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        marginTop:3,
    },
    totalReview:{
        color:'white',
        fontSize:15,
        fontWeight:'bold',
    }
})
