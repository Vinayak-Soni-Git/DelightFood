import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView} from "react-native";
import React from "react";
import {Routes} from "../../navigation/Routes";

export default function WelcomeScreen({navigation}) {
    return (
        <SafeAreaView style={styles.container} >
            <View>
                <View style={styles.headingTextContainer}>
                    <Text style={styles.headingText}>Discover Restaurants</Text>
                    <Text style={styles.headingText}>In Your Area</Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.signInButton} onPress={() => {
                        navigation.navigate(Routes.SignInScreen)
                    }}>
                        <Text style={styles.signInButtonText}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.createNewAccountButton}>
                        <Text style={styles.createNewAccountButtonText}>Create New Account</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    headingTextContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    headingText: {
        color: 'grey',
        fontSize: 30,
        fontWeight: 'bold',
    },
    signInButton: {
        backgroundColor: 'black',
        height: 50,
        borderRadius: 10,
        margin: 10,
        justifyContent: 'center',
    },
    signInButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonsContainer: {
        marginTop: 200,
    },
    createNewAccountButton: {
        backgroundColor: 'grey',
        height: 50,
        borderRadius: 10,
        margin: 10,
        justifyContent: 'center',
    },
    createNewAccountButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    }
})
