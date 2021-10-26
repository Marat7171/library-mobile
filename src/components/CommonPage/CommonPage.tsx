import {Image, Text, View, StyleSheet} from "react-native";
import BooksForm from "../Books/BooksForm";
import React from "react";

const CommonPage = ({children}) => {
    return (
            <View style={styles.books}>
                <Image style={styles.ball4} source={require("../../images/Ellipse_2.2.png")}/>
                {children}
                <View style={styles.footer}>
                    <View style={styles.footerLeft}>
                        <Image style={styles.footerLeftImg} source={require("../../images/footerHouse.png")}/>
                        <Text style={styles.footerLeftText}>Books</Text>
                    </View>
                    <View style={styles.footerRight}>
                        <Image style={styles.footerRightImg} source={require("../../images/footerProfile.png")}/>
                        <Text style={styles.footerRightText}>Settings</Text>
                    </View>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    books: {
        position: "relative",
        backgroundColor: "#E5E5E5",
        height: "100%",
    },
    ball4: {
        width: "100%",

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
})

export default CommonPage;