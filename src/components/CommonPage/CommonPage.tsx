import {Image, Text, View, StyleSheet} from "react-native";
import BooksForm from "../Books/BooksForm";
import React from "react";
import {TouchableOpacity} from "react-native-gesture-handler";

const CommonPage = ({children}) => {
    return (
            <View style={styles.books}>
                {children}
                <View style={styles.footer}>
                    <View style={styles.footerLeft}>
                        <TouchableOpacity>
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
}

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
})

export default CommonPage;