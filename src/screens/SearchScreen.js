import {View, Text, StyleSheet, FlatList, TouchableWithoutFeedback, ImageBackground, Dimensions} from "react-native";
import SearchComponent from "../components/SearchComponent";
import {searchFilterData} from "../global/Data";

const SCREEN_WIDTH = Dimensions.get('window').width

export default function SearchScreen({navigation}) {
    return (
        <View>
            <SearchComponent/>
            <View style={styles.restaurantResultsContainer} >
                <FlatList data={searchFilterData}
                          keyExtractor={item=>item.id}
                          renderItem={({item, index})=>(
                    <TouchableWithoutFeedback
                    onPress={()=>{
                        navigation.navigate('SearchResultScreen', {item:item.name})
                    }}>
                        <View style={styles.imageBackgroundContainer} >
                            <ImageBackground style={styles.imageBackground}
                                             imageStyle={{borderRadius:10}}
                                             source={{uri:item.image}} >
                                <View style={styles.itemNameContainer} >
                                    <Text style={styles.itemName} >{item.name}</Text>
                                </View>
                            </ImageBackground>
                        </View>
                    </TouchableWithoutFeedback>
                )} horizontal={false}
                showsVerticalScrollIndicator={false}
                numColumns={2} ListHeaderComponent={<Text style={styles.headerText} >Top Categories</Text>}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    restaurantResultsContainer:{
        alignItems:'center',
    },
    headerText:{
        color:'black',
        fontSize:20,
    },
    imageBackgroundContainer:{
        margin:5,
    },
    imageBackground:{
        width:SCREEN_WIDTH*0.4475,
        height:SCREEN_WIDTH*0.4475,
    },
    itemName:{
        color:'white',
        fontWeight:'bold',
        fontSize:20,
    },
    itemNameContainer:{
        alignItems:'center',
        justifyContent:'center',
    }
})
