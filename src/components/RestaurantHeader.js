import {View, StyleSheet, ImageBackground, Animated} from "react-native";
import {restaurantsData} from "../global/Data";
import {Icon} from "react-native-elements";
import {useState, useEffect} from "react";

export default function RestaurantHeader({navigation, id}) {

    const currentValue = new Animated.Value(1)
    const index2 = 10
    const [liked, setLiked] = useState(false)
    const [counter, setCounter] = useState(-2)
    const [visible, setVisible] = useState(false)

    const likeHandler = ()=>{
        if(liked === false){
            setVisible(true)
        }
        setLiked(!liked)
        setCounter(index2)
    }

    useEffect(()=>{
        if(liked === true){
            Animated.spring(currentValue, {
                toValue:3,
                friction:2,
                useNativeDriver:true
            }).start(()=>{
                Animated.spring(currentValue, {
                    toValue:1,
                    useNativeDriver:true,
                    friction:2,
                }).start(()=>{
                    setVisible(false)
                })
            })
        }
    },[liked])
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.restaurantImageBackground} source={{uri: restaurantsData[id].image}}>
                <View style={styles.iconsContainer}>
                    <View style={styles.iconContainer}>
                        <Icon name={'arrow-left'}
                              type={'material-community'}
                              size={25}
                              onPress={() => navigation.goBack()}/>
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon name={liked && (index2 == counter)?'favorite':'favorite-border'}
                              type={'material'}
                              size={25}
                              color={'red'}
                              onPress={likeHandler}/>
                    </View>
                </View>
                <View  >
                    {visible && (index2===counter) &&
                        <Animated.View style={{transform:[{scale:currentValue}]}} >
                            <Icon name={'favorite'} size={40} color={'red'} type={'material'}/>
                        </Animated.View>

                    }
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 150,
    },
    restaurantImageBackground: {
        width: '100%',
        height: '100%'
    },
    iconContainer: {
        alignItems: 'baseline',
        justifyContent: 'space-between',
        borderRadius:50,
        padding:5,
        backgroundColor:'white',
        margin:10,
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'space-between'
    }
})
