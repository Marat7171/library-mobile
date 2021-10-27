import {Formik, Form, Field } from "formik";
import {Image, StyleSheet, TextInput, View} from "react-native";
import React from "react";

const MyReactNativeForm = ({setFilter}) => {
    const search = (e) => {
        setFilter(e);
        console.log(e);
    };

    return (
        <View style={styles.form}>
            <TextInput style={styles.itemFormInput}
                       onChangeText={search}
            />
            <Image style={styles.magnifier} source={require("../../images/magnifier.png")}/>
        </View>
    );
};

export default MyReactNativeForm;

const styles = StyleSheet.create({
    form: {
        position: "relative",
        display: "flex",
        marginTop: "7%",
    },
    itemFormInput: {
        paddingLeft: "12%",
        paddingRight: "8%",
        marginLeft: "10%",
        borderRadius: 8,
        height: 50,
        width: "80%",
        backgroundColor: "#FFFFFF",
        color: "#384F7D",

    },
    magnifier: {
        position: "absolute",
        left: 60,
        top: 17,
    }
});