import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {personReturnAction, personTakeAction} from "../../toolkitRedux/toolkitSlice";

const BookShow = ({ route }) => {

    const booksArray = useSelector(state => state.toolkit.personTake);
    const dispatch = useDispatch();

    const pressTake = () => {
        dispatch(personTakeAction(route.params.id));
        console.log(booksArray);
    }

    const pressReturn = () => {
        dispatch(personReturnAction(route.params.id));
        console.log(booksArray);
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
                        <Text style={styles.gradeNumber}>{route.params.grade}</Text>
                    </View>
                    <Text style={styles.reviews}>{route.params.reviews} reviews</Text>
                </View>
            </View>
            <View style={styles.descriptionBlog}>
                <Text style={styles.descriptionBlogText}>{route.params.description}</Text>
                <Text style={styles.descriptionBlogLink}>
                    Full Synopsis
                </Text>
            </View>
            <View style={styles.line}></View>
            <TouchableOpacity onPress={booksArray.includes(route.params.id)
                                  ?
                                    pressReturn
                                  :
                                    pressTake}
                              style={booksArray.includes(route.params.id)
                                  ?
                                    [styles.itemFormButton, styles.itemFormButtonActive]
                                  :
                                    styles.itemFormButton} >
                <Text style={styles.itemFormButtonText}>{booksArray.includes(route.params.id)
                                  ?
                                    "return the book"
                                  :
                                    "Take the book"}</Text>
            </TouchableOpacity>
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
        height: 200,
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
        marginTop: 30,
        borderStyle: "solid",
        borderColor: "rgba(56, 79, 125, 0.1)",
        borderBottomWidth: 1,
    },
    itemFormButton: {
        marginTop: 30,
        marginLeft: "10%",
        width: "80%",
        height: 56,
        backgroundColor: "#6790FB",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,

    },
    itemFormButtonActive: {
        backgroundColor: "#2DCB59",
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