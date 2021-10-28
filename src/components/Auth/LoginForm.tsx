import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LoginFormInner from "./LoginFormInner";



export default function LoginForm() {
    return (
        <View style={styles.signIn}>
            <Image source={require('../../images/Ellipse_2.png')}/>
            <Image style={styles.ball2} source={require('../../images/Ellipse.png')}/>
            <Image style={styles.ball3} source={require('../../images/Ellipse_2.1.png')}/>
            <View>
                <Text style={styles.title}>Sign In</Text>
                <LoginFormInner/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    signIn: {
        position: "relative",
        backgroundColor: "#E5E5E5",
        height: "100%",
    },
    title: {
        marginTop: "20%",
        marginLeft: "10%",
        fontSize: 32,
        lineHeight: 40,
        color: "#384F7D",
    },
    ball2: {
        position: "absolute",
        left: "75.3%",
        right: "-9.07%",
        top: "13.79%",
        bottom: "69.46%",
    },
    ball3: {
        position: "absolute",
        left: "62.13%",
        right: "23.03%",
        top: "43.62%",
        bottom: "49.53%",
    }
});