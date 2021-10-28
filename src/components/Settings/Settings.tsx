import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useDispatch} from "react-redux";
import {authSwitch} from "../../toolkitRedux/toolkitSlice";
import SettingsListItem from "./SettingsListItem";

const Settings = () => {

    const dispatch = useDispatch();

    return (
        <View style={styles.books}>
            <Image style={styles.ball4} source={require("../../images/Ellipse_2.2.png")}/>
            <Text style={styles.title}>Settings</Text>
            <View style={styles.mainGroupContainer}>
                <SettingsListItem name="Account" img={require('../../images/account.png')}/>
                <SettingsListItem name="Notifications" img={require('../../images/notifications.png')}/>
                <SettingsListItem name="Privacy" img={require('../../images/privacy.png')}/>
                <SettingsListItem name="Help Center" img={require('../../images/helpCenter.png')}/>
                <SettingsListItem name="General" img={require('../../images/General.png')}/>
                <View style={styles.groupContainerLogout}>
                    <TouchableOpacity onPress={() => dispatch(authSwitch())}>
                        <View style={styles.groupLogout}>
                            <Text style={styles.groupNameLogout}>Logout</Text>
                        </View>
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