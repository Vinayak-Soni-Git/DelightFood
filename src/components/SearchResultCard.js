import {View, StyleSheet, ImageBackground, Text, FlatList, TouchableOpacity} from "react-native";
import {Icon} from "react-native-elements";
import ProductCard from "./ProductCard";

export default function SearchResultCard({
                                             onPressRestaurantCard,
                                             restaurantName,
                                             deliveryAvailable,
                                             discountAvailable,
                                             discountPercent,
                                             numberOfReviews,
                                             businessAddress,
                                             farAway,
                                             averageReview,
                                             images,
                                             productData
                                         }) {
    return (
        <View style={styles.container} >
            <TouchableOpacity onPress={onPressRestaurantCard} style={styles.touchableContainer} >
                <View style={styles.searchResultCard}>
                    <View style={styles.restaurantDetailsContainer}>
                        <ImageBackground style={styles.imageBackground} source={{uri: images}}/>
                        <View style={styles.reviewContainer}>
                            <Text style={styles.averageReview}>{averageReview}</Text>
                            <Text style={styles.numberOfReviews}>{numberOfReviews} Reviews</Text>
                        </View>
                        <View>
                            <Text style={styles.restaurantName}>{restaurantName}</Text>
                            <Text style={styles.farAwayText}>{farAway} Minutes</Text>
                        </View>
                        <View style={styles.distanceContainer}>
                            <View style={styles.distance}>
                                <Icon name={'place'}
                                      type={'material'}
                                      color={'black'}
                                      iconStyle={styles.distanceIcon}/>
                            </View>
                            <Text style={styles.address}>{businessAddress}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={styles.flatListContainer} >
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={productData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => (
                        <ProductCard
                            price={item.price}
                            productName={item.name}
                            image={item.image}/>
                    )}>
                </FlatList>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{

    },
    touchableContainer:{

    },
    flatListContainer:{
        padding:10,
    },
    imageBackground: {
        width: '100%',
        height: 200,
    },
    searchResultCard: {
        margin: 10,
    },
    reviewContainer: {
        position: 'absolute',
        top: 0,
        right: 10,
        margin: 10,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 12,
    },
    averageReview: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 3,
    },
    numberOfReviews: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
    restaurantName: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        paddingLeft: 10,
    },
    distanceContainer: {
        flexDirection: 'row',
        padding: 5,
    },
    distanceIcon: {
        marginTop: 3,
    },
    farAwayText: {
        paddingLeft: 10,
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
    },
    address: {
        fontSize: 15,
        color: 'black',
    },
    restaurantDetailsContainer: {
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 10,
    }
})
