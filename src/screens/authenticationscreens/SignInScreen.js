import React from 'react';
import {View, TextInput, StyleSheet, Text, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Icon, SocialIcon} from 'react-native-elements';
import Header from "../../components/Header";
import {Routes} from "../../navigation/Routes";

const SignInScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header title={'MyAccount'} iconName={'arrow-left'} onIconPress={()=>navigation.goBack()}/>
            <View style={styles.afterHeaderContainer}>
                <View style={styles.signInHeadingContainer}>
                    <Text style={styles.signInHeading}>Sign In</Text>
                </View>
                <View style={styles.instructionTextContainer}>
                    <Text style={styles.instructionText}>Please enter the email and password</Text>
                    <Text style={styles.instructionText}>registered with your account</Text>
                </View>
                <View style={styles.inputsContainer}>
                    <View style={styles.inputContainer}>
                        <Animatable.View animation="fadeInLeft" duration={500} style={styles.iconContainer}>
                            <Icon name="email" type="material" size={25} color="#888"/>
                        </Animatable.View>
                        <TextInput
                            keyboardType="email-address"
                            style={styles.inputField}
                            placeholder="Email"
                            placeholderTextColor="black"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Animatable.View animation="fadeInLeft" duration={500} style={styles.iconContainer}>
                            <Icon name="lock" type="material" size={25} color="#888"/>
                        </Animatable.View>
                        <TextInput
                            keyboardType="visible-password"
                            style={styles.inputField}
                            placeholder="Password"
                            placeholderTextColor="black"
                        />
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={styles.signInButton} onPress={()=>navigation.navigate('RootClientTabs')}>
                        <Text style={styles.signInButtonText}>Sign In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.forgetPasswordLink}>
                        <Text style={styles.forgetPasswordLinkText}>Forget Password?</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.orContainer} >
                    <Text style={styles.or} >OR</Text>
                </View>
                <View style={styles.facebookLoginButtonContainer} >
                    <SocialIcon onPress={()=>{}} button style={styles.facebookLoginButton} title={'Sign In With Facebook'} type={'facebook'} />
                </View>
                <View style={styles.googleLoginButtonContainer} >
                    <SocialIcon onPress={()=>{}} button style={styles.googleLoginButton} title={'Sign In With Google'} type={'google'} />
                </View>
                <TouchableOpacity style={styles.newToLink}>
                    <Text style={styles.newToLinkText}>New User?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    afterHeaderContainer: {
        marginTop: 20,
    },
    inputsContainer: {
        marginTop: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        width: '90%',
        backgroundColor: 'white',
        paddingVertical: 5,
        paddingLeft: 40,
        margin: 10,
    },
    iconContainer: {
        position: 'absolute',
        left: 10,
    },
    inputField: {
        flex: 1,
        fontSize: 18,
        height: 50,
        color: 'black'
    },
    signInHeading: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
    },
    signInHeadingContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    instructionTextContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    instructionText: {
        fontSize: 18,
        color: 'grey',
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
    forgetPasswordLink: {
        margin: 15,
    },
    forgetPasswordLinkText: {
        color: 'black',
        textDecorationLine: 'underline',
        fontSize: 18,
    },
    orContainer:{
        flexDirection:'row',
        justifyContent:'center',
    },
    or:{
        fontSize:20,
        fontWeight:'bold',
    },
    facebookLoginButtonContainer: {
        alignItems:'center',
        justifyContent:'center',
        margin:10,
    },
    facebookLoginButton: {
        width:'100%',
        borderRadius:10,
    },
    googleLoginButtonContainer: {
        alignItems:'center',
        justifyContent:'center',
        margin:10,
    },
    googleLoginButton: {
        width:'100%',
        borderRadius:10,
    },
    newToLink: {
        margin: 15,
    },
    newToLinkText: {
        color: 'black',
        textDecorationLine: 'underline',
        fontSize: 18,
    },
});

export default SignInScreen;
