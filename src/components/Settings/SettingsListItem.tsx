import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";

const SettingsListItem = ({name, img}) => {
    return (
            <View style={styles.groupContainer}>
                <View style={styles.group}>
                    <Image style={styles.img} source={img}/>
                    <View style={styles.groupContainerName}>
                        <Text style={styles.groupName}>{name}</Text>
                    </View>
                    <Image style={styles.groupBack} source={require('../../images/Back.png')}/>
                </View>
            </View>
    );
};

export default SettingsListItem;

const styles = StyleSheet.create({

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
});

export default SettingsListItem;