import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const Settings = ({ navigation }) => {
    const goToBooks = () => {
        navigation.navigate('Books')
    }

    return (
        <View style={styles.books}>
            <Image style={styles.ball4} source={require("../../images/Ellipse_2.2.png")}/>
            <Text style={styles.title}>Settings</Text>
            <View style={styles.mainGroupContainer}>
                <View style={styles.groupContainer}>
                    <View style={styles.group}>
                        <Image style={styles.img} source={require('../../images/account.png')}/>
                        <View style={styles.groupContainerName}>
                            <Text style={styles.groupName}>Account</Text>
                        </View>
                        <Image style={styles.groupBack} source={require('../../images/Back.png')}/>
                    </View>
                </View>
                <View style={styles.groupContainer}>
                    <View style={styles.group}>
                        <Image style={styles.img} source={require('../../images/notifications.png')}/>
                        <View style={styles.groupContainerName}>
                            <Text style={styles.groupName}>Notifications</Text>
                        </View>
                        <Image style={styles.groupBack} source={require('../../images/Back.png')}/>
                    </View>
                </View>
                <View style={styles.groupContainer}>
                    <View style={styles.group}>
                        <Image style={styles.img} source={require('../../images/privacy.png')}/>
                        <View style={styles.groupContainerName}>
                            <Text style={styles.groupName}>Privacy</Text>
                        </View>
                        <Image style={styles.groupBack} source={require('../../images/Back.png')}/>
                    </View>
                </View>
                <View style={styles.groupContainer}>
                    <View style={styles.group}>
                        <Image style={styles.img} source={require('../../images/helpCenter.png')}/>
                        <View style={styles.groupContainerName}>
                            <Text style={styles.groupName}>Help Center</Text>
                        </View>
                        <Image style={styles.groupBack} source={require('../../images/Back.png')}/>
                    </View>
                </View>
                <View style={styles.groupContainer}>
                    <View style={styles.group}>
                        <Image style={styles.img} source={require('../../images/General.png')}/>
                        <View style={styles.groupContainerName}>
                            <Text style={styles.groupName}>General</Text>
                        </View>
                        <Image style={styles.groupBack} source={require('../../images/Back.png')}/>
                    </View>
                </View>
                <View style={styles.groupContainerLogout}>
                    <View style={styles.groupLogout}>
                        <Text style={styles.groupNameLogout}>Logout</Text>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.footerLeft}>
                    <TouchableOpacity onPress={goToBooks}>
                        <Image style={styles.footerLeftImg} source={require("../../images/footerHouse.png")}/>
                        <Text style={styles.footerLeftText}>Books</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footerRight}>
                    <TouchableOpacity>
                        <Image style={styles.footerRightImg} source={require("../../images/footerProfile.png")}/>
                        <Text style={styles.footerRightText}>Settings</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    books: {
        position: "relative",
        backgroundColor: "#E5E5E5",
        height: "100%",
    },
    footer: {
        position: "absolute",
        bottom: 0,
        height: 80,
        width: "100%",
        backgroundColor: "#FFF",
        flexDirection: 'row',
        justifyContent: "center",
        paddingTop: 10,
    },
    footerLeft: {
        textAlign: "center",
        marginRight: 60,
    },
    footerRight: {
        textAlign: "center",
    },
    footerLeftImg: {
        marginLeft: 5,
        marginBottom: 5,
    },
    footerRightImg: {
        marginLeft: 10,
        marginBottom: 7,
    },
    footerLeftText: {
        fontWeight: "normal",
        fontSize: 10,
        lineHeight: 13,
        textAlign: "center",
        letterSpacing: 0.12,
        color: "rgba(56, 79, 125, 0.45)",
    },
    footerRightText: {
        fontWeight: "normal",
        fontSize: 10,
        lineHeight: 13,
        textAlign: "center",
        letterSpacing: 0.12,
        color: "rgba(56, 79, 125, 0.45)",
    },
    title: {
        marginTop: "-20%",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 19,
        lineHeight: 24,
        textAlign: "center",
        color: "#FFFFFF",
    },
    ball4: {
        width: "100%",

    },
    mainGroupContainer: {
        marginTop: 75,
    },
    groupContainer: {
        borderStyle: "solid",
        borderColor: "rgba(56, 79, 125, 0.1)",
        borderTopWidth: 1,
    },
    group: {
        flexDirection: 'row',
        marginTop: 14,
        marginBottom: 14,
        marginLeft: "10%",
        marginRight: "10%",
    },
    groupName: {
        fontSize: 16,
        lineHeight: 22,
        color: "rgba(68, 89, 132, 0.8)",
    },
    groupContainerName: {
        marginLeft: 10,
    },
    img: {
        marginTop: 3,
    },
    groupBack: {
        marginTop: 6,
        marginLeft: "auto",
    },
    groupContainerLogout: {
        borderStyle: "solid",
        borderColor: "rgba(56, 79, 125, 0.1)",
        borderBottomWidth: 1,
        borderTopWidth: 1,
    },
    groupLogout: {
        marginTop: 14,
        marginBottom: 14,
        marginLeft: "10%",
        marginRight: "10%",
    },
    groupNameLogout: {
        fontSize: 16,
        lineHeight: 22,
        color: "#D45E5E",
    },

});

export default Settings;