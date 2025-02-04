import {Text, View, StyleSheet, Image} from "react-native";

export default function ProductCard({productName, price, image}){
    return(
        <View style={styles.container} >
            <View style={styles.productDetailsContainer} >
                <View style={styles.productNamePriceContainer} >
                    <Text style={styles.productName} >{productName}</Text>
                    <Text style={styles.productPrice} >INR {price}</Text>
                </View>
                    <Image style={styles.productImage} source={{uri:image}}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginLeft:10,
    },
    productName:{

    },
    productPrice:{

    },
    productImage:{
        width:80,
        height:80,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
    },
    productNamePriceContainer:{
        padding:10,
    },
    productImageContainer:{

    },
    productDetailsContainer:{
        flexDirection:'row',
        backgroundColor:'white',
        width:'50%',
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
    }
})
