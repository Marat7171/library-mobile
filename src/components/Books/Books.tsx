import {Image, Text, View, StyleSheet} from "react-native";
import BooksForm from "./BooksForm";
import React from "react";

export default function Books() {
  return (
      <View style={styles.books}>
          <Text style={styles.title}>Books</Text>
          <BooksForm/>
          <Text style={styles.titleRes}>Results</Text>
          <View style={styles.booksBlog}>
              <View style={styles.booksContainerItem}>
                  <Image style={styles.booksContainerItemLeft} source={require("../../images/imageBook.png")}/>
                  <View style={styles.booksContainerItemRight}>
                      <Text style={styles.booksContainerItemRightTitle}>Remote: Office Not Required</Text>
                      <Text style={styles.booksContainerItemRightText}>Jason Fried</Text>
                      <View style={styles.booksContainerItemRightStars}>
                          <Image source={require("../../images/StarFull.png")}/>
                          <Image source={require("../../images/StarFull.png")}/>
                          <Image source={require("../../images/StarFull.png")}/>
                          <Image source={require("../../images/StarFull.png")}/>
                          <Image source={require("../../images/StarBlank.png")}/>
                      </View>
                  </View>
              </View>
          </View>
      </View>
  )
}

const styles = StyleSheet.create({
    title: {
        display: "flex",
        marginTop: "-20%",

        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 19,
        lineHeight: 24,
        textAlign: "center",
        color: "#FFFFFF",
    },
    titleRes: {
        marginLeft: "10%",
        marginTop: "5%",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 12,
        lineHeight: 15,
        display: "flex",
        letterSpacing: 1,
        textTransform: "uppercase",
        color: "rgba(56, 79, 125, 0.8)",
    },
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
        display: "flex",
        color: "rgba(56, 79, 125, 0.8)",

    },
})
