import {Text, View, StyleSheet, Dimensions, FlatList} from "react-native";
import SearchResultCard from "../components/SearchResultCard";
import {restaurantsData} from "../global/Data";
import ProductCard from "../components/ProductCard";

const SCREEN_WIDTH = Dimensions.get('window').width

export default function SearchResultScreen({navigation, route}){
    return (
        <View style={styles.container} >
            <View>
                <Text> {restaurantsData.length} Result {route.params.item}</Text>
            </View>
            <View>
                <FlatList
                    data={restaurantsData}
                    keyExtractor={(item, index)=>index.toString()}
                    renderItem={({item, index})=>(
                        <SearchResultCard screenWidth={SCREEN_WIDTH}
                                          images={item.image}
                                          averageReview={item.averageReview}
                                          numberOfReviews={item.numberOfReviews}
                                          restaurantName={item.restaurantName}
                                          businessAddress={item.businessAddress}
                                          farAway={item.farAway}
                                          productData={item.productData}
                        onPressRestaurantCard={()=>{navigation.navigate('RestaurantHomeScreen', {id:index, restaurant:item.restaurantName})}}/>
                    )}>

                </FlatList>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})

