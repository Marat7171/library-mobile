import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const Settings = () => {
    return (
        <View>
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
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        marginTop: "-20%",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 19,
        lineHeight: 24,
        textAlign: "center",
        color: "#FFFFFF",
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