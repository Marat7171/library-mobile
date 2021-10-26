import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const BookShow = () => {
    return (
        <View>
            <Text style={styles.title}>Book</Text>
            <Image style={styles.arrowImage} source={require("../../images/arrow-left.png")}/>
            <View style={styles.bookNameMainContainer}>
                <Image style={styles.image} source={require("../../images/MainBookImage.png")}/>
                <View style={styles.bookNameContainer}>
                    <Text style={styles.bookName}>Pet Sematary</Text>
                    <Text style={styles.bookAuthor}>Stephen King</Text>
                    <View style={styles.grade}>
                        <Image style={styles.gradeImage} source={require('../../images/BookShowStar.png')}/>
                        <Text style={styles.gradeNumber}>4.68</Text>
                    </View>
                    <Text style={styles.reviews}>2,464 reviews</Text>
                </View>
            </View>
            <View style={styles.descriptionBlog}>
                <Text style={styles.descriptionBlogText}>Sometimes dead is better....When the Creeds move into a
                    beautiful old house in rural Maine, it all seems too good to be true: physician father, beautiful
                    wife, charming little daughter, adorable infant son -- and now an idyllic home....</Text>
                <Text style={styles.descriptionBlogLink}>
                    Full Synopsis
                </Text>
            </View>
            <View style={styles.line}></View>
            <TouchableOpacity style={styles.itemFormButton} >
                <Text style={styles.itemFormButtonText}>Take the book</Text>
            </TouchableOpacity>
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