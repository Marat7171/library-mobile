import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const BookItem = ({navigation, item}) => {
    let count = 1;
    let countKey = 0;
    const array = ['star', 'star', 'star', 'star', 'star'];

    return (
            <TouchableOpacity onPress={() => navigation.navigate('BookShowScreen', item)}>
                <View style={styles.booksBlog}>
                    <View style={styles.booksContainerItem}>
                        <Image style={styles.booksContainerItemLeft}
                               source={require("../../images/imageBook.png")}/>
                        <View style={styles.booksContainerItemRight}>
                            <Text style={styles.booksContainerItemRightTitle}>{item.BookName}</Text>
                            <Text style={styles.booksContainerItemRightText}>{item.Author}</Text>
                            <View style={styles.booksContainerItemRightStars}>
                                {array.map(() => {
                                    if (count <= 5 && item.grade >= count) {
                                        countKey = countKey + 1;
                                        count = count + 1;
                                        return <Image key={countKey} source={require("../../images/StarFull.png")}/>
                                    }
                                    countKey = countKey + 1;
                                    return <Image key={countKey} source={require("../../images/StarBlank.png")}/>
                                })}
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
    );
};


const styles = StyleSheet.create({

    booksBlog: {
        marginTop: "5%",
        marginLeft: "10%",
        marginRight: "10%",
    },
    booksContainerItem: {
        backgroundColor: "#FFFFFF",
        flexDirection: 'row',
        width: "100%",
        height: 147,
        padding: "5%",
        borderRadius: 10,
    },
    booksContainerItemLeft: {
        width: 71,
        height: 107,
    },
    booksContainerItemRight: {
        marginLeft: "5%",
        width: '50%',
    },
    booksContainerItemRightStars: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100,
        marginTop: 20,
    },
    booksContainerItemRightTitle: {
        fontSize: 18,
        lineHeight: 23,
        color: "#384F7D",
    },
    booksContainerItemRightText: {
        paddingTop: 10,
        fontSize: 14,
        lineHeight: 18,
        color: "rgba(56, 79, 125, 0.8)",

    },
})


export default BookItem;