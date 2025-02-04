import React from 'react';
import {Text, View, StyleSheet, Dimensions} from "react-native";
import {Colors, Parameters} from "../global/Styles";
import {Icon} from "react-native-elements";


export default function Header({title, iconName, onIconPress}){
    return (
        <View style={styles.header}>
            <View style={styles.iconContainer} >
                <Icon name={iconName}
                      type={'material-community'}
                      color={'white'}
                      size={28}
                      onPress={onIconPress}
                />
            </View>
            <View>
                <Text style={styles.headerText} >{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        backgroundColor:Colors.black,
        height:Parameters.headerHeight,
    },
    headerText:{
        color:'white',
        fontSize:22,
        fontWeight:'bold',
        marginLeft:30,
    },
    iconContainer:{
        marginLeft:20,
    }
})
