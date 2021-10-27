import {Image, Text, View, StyleSheet, TouchableOpacity, ScrollView, FlatList} from "react-native";
import {useState} from "react";
import BooksForm from "./BooksForm";
import React from "react";

export default function Books({navigation}) {
    const [booksList, booksListSet] = useState([
        {id: 1, Author: "Georgie", BookName: "Gookes", descrioption: "Gookes Gookes Gookes Gookes"},
        {id: 2, Author: "Gualterio", BookName: "Spaughton", descrioption: "Spaughton Spaughton Spaughton Spaughton"},
        {id: 3, Author: "Milton", BookName: "Guerrieo", descrioption: "Guerrieo Guerrieo Guerrieo Guerrieo"},
        {id: 4, Author: "Waldon", BookName: "Lubman", descrioption: "Lubman Lubman Lubman Lubman"},
        {id: 5, Author: "Lesley", BookName: "Agg", descrioption: "Agg AggAgg Agg AggAgg Agg Agg"},
        {id: 6, Author: "Bengt", BookName: "Bowerman", descrioption: "Bowerman Bowerman Bowerman Bowerman"},
        {id: 7, Author: "Alisander", BookName: "Totterdell", descrioption: "Totterdell Totterdell Totterdell"},
        {id: 8, Author: "Georgie", BookName: "Gookes", descrioption: "Gookes Gookes Gookes Gookes"},
        {id: 9, Author: "Gualterio", BookName: "Spaughton", descrioption: "Spaughton Spaughton Spaughton Spaughton"},
        {id: 10, Author: "Milton", BookName: "Guerrieo", descrioption: "Guerrieo Guerrieo Guerrieo Guerrieo"},
        {id: 11, Author: "Waldon", BookName: "Lubman", descrioption: "Lubman Lubman Lubman Lubman"},
        {id: 12, Author: "Lesley", BookName: "Agg", descrioption: "Agg AggAgg Agg AggAgg Agg Agg"},
        {id: 13, Author: "Bengt", BookName: "Bowerman", descrioption: "Bowerman Bowerman Bowerman Bowerman"},
        {id: 14, Author: "Alisander", BookName: "Totterdell", descrioption: "Totterdell Totterdell Totterdell"},
    ])

    const goToSettings = () => {
        navigation.navigate('Settings')
    }

  return (
      <View style={styles.books}>
          <Image style={styles.ball4} source={require("../../images/Ellipse_2.2.png")}/>
          <Text style={styles.title}>Books</Text>
          <BooksForm/>
          <Text style={styles.titleRes}>Results</Text>
          <FlatList data={booksList} renderItem={({item}) => {
              return <TouchableOpacity onPress={() => navigation.navigate('Book', item)}>
                  <View style={styles.booksBlog}>
                      <View style={styles.booksContainerItem}>
                          <Image style={styles.booksContainerItemLeft} source={require("../../images/imageBook.png")}/>
                          <View style={styles.booksContainerItemRight}>
                              <Text style={styles.booksContainerItemRightTitle}>{item.BookName}</Text>
                              <Text style={styles.booksContainerItemRightText}>{item.Author}</Text>
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
              </TouchableOpacity>
          }}/>
          <View style={styles.footer}>
              <View style={styles.footerLeft}>
                  <TouchableOpacity>
                      <Image style={styles.footerLeftImg} source={require("../../images/footerHouse.png")}/>
                      <Text style={styles.footerLeftText}>Books</Text>
                  </TouchableOpacity>
              </View>
              <View style={styles.footerRight}>
                  <TouchableOpacity onPress={goToSettings}>
                      <Image style={styles.footerRightImg} source={require("../../images/footerProfile.png")}/>
                      <Text style={styles.footerRightText}>Settings</Text>
                  </TouchableOpacity>
              </View>
          </View>
      </View>
  )
}

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
