import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const BookShow = ({ route, navigation }) => {

    const goToSettings = () => {
        navigation.navigate('Settings')
    }

    return (
        <View style={styles.books}>
            <Image style={styles.ball4} source={require("../../images/Ellipse_2.2.png")}/>
            <Text style={styles.title}>Book</Text>
            <Image style={styles.arrowImage} source={require("../../images/arrow-left.png")}/>
            <View style={styles.bookNameMainContainer}>
                <Image style={styles.image} source={require("../../images/MainBookImage.png")}/>
                <View style={styles.bookNameContainer}>
                    <Text style={styles.bookName}>{route.params.BookName}</Text>
                    <Text style={styles.bookAuthor}>{route.params.Author}</Text>
                    <View style={styles.grade}>
                        <Image style={styles.gradeImage} source={require('../../images/BookShowStar.png')}/>
                        <Text style={styles.gradeNumber}>4.68</Text>
                    </View>
                    <Text style={styles.reviews}>2,464 reviews</Text>
                </View>
            </View>
            <View style={styles.descriptionBlog}>
                <Text style={styles.descriptionBlogText}>{route.params.descrioption}</Text>
                <Text style={styles.descriptionBlogLink}>
                    Full Synopsis
                </Text>
            </View>
            <View style={styles.line}></View>
            <TouchableOpacity style={styles.itemFormButton} >
                <Text style={styles.itemFormButtonText}>Take the book</Text>
            </TouchableOpacity>
            {/*<View style={styles.footer}>*/}
            {/*    <View style={styles.footerLeft}>*/}
            {/*        <TouchableOpacity>*/}
            {/*            <Image style={styles.footerLeftImg} source={require("../../images/footerHouse.png")}/>*/}
            {/*            <Text style={styles.footerLeftText}>Books</Text>*/}
            {/*        </TouchableOpacity>*/}
            {/*    </View>*/}
            {/*    <View style={styles.footerRight}>*/}
            {/*        <TouchableOpacity>*/}
            {/*            <Image style={styles.footerRightImg} source={require("../../images/footerProfile.png")}/>*/}
            {/*            <Text style={styles.footerRightText}>Settings</Text>*/}
            {/*        </TouchableOpacity>*/}
            {/*    </View>*/}
            {/*</View>*/}
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
    image: {},
    arrowImage: {
        position: "absolute",
        left: "10%",
        top: "-18%",
    },
    bookNameMainContainer: {
        flexDirection: 'row',
        marginLeft: "10%",
        marginTop: 26,
    },
    bookNameContainer: {
        marginTop: "17%",
        marginLeft: "5%",

    },
    bookName: {
        fontSize: 20,
        lineHeight: 25,
        color: "#384F7D",
    },
    bookAuthor: {
        fontSize: 16,
        lineHeight: 20,
        color: "rgba(56, 79, 125, 0.8)",
    },
    grade: {
        marginTop: 15,
        flexDirection: 'row',
    },
    gradeNumber: {
        marginLeft: 14,
        fontSize: 12,
        lineHeight: 15,
        color: "#384F7D",
    },
    gradeImage: {
        position: "absolute",
        top: 2,
    },
    reviews: {
        fontSize: 10,
        lineHeight: 13,
        color: "rgba(56, 79, 125, 0.8)",
    },
    descriptionBlog: {
        marginTop: 30,
        marginLeft: "10%",
        marginRight: "10%",
    },
    descriptionBlogText: {
        fontSize: 14,
        lineHeight: 22,
        color: "rgba(56, 79, 125, 0.8)",
    },
    descriptionBlogLink: {
        marginTop: 10,
        fontSize: 14,
        lineHeight: 22,
        textDecorationLine: "underline",
        color: "#384F7D",
    },
    line: {
        marginTop: 33,
        borderStyle: "solid",
        borderColor: "rgba(56, 79, 125, 0.1)",
        borderBottomWidth: 1,
        //border: "1px solid rgba(56, 79, 125, 0.1)",
    },
    itemFormButton: {
        marginTop: 40,
        marginLeft: "10%",
        width: "80%",
        height: 56,
        backgroundColor: "#6790FB",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,

    },
    itemFormButtonText: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: 18,
        letterSpacing: 2,
        textTransform: "uppercase",
        color: "#FFFFFF",
    },

});

export default BookShow;