import {Image, Text, View, StyleSheet, TouchableOpacity, ScrollView, FlatList} from "react-native";
import {useEffect, useState} from "react";
import BooksForm from "./BooksForm";
import React from "react";
import BookItem from "./BookItem";

const RenderFooter = ({getData, deleteData}) => {
    return (
        <View style={styles.footerPaginator}>
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={getData}
                style={styles.loadMoreBtn}
            >
                <Text style={styles.btnText}>Load More</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={deleteData}
                style={styles.loadMoreBtn}
            >
                <Text style={styles.btnText}>Delete list</Text>
            </TouchableOpacity>
        </View>
    );
};

export default function Books({navigation}) {
    const [booksList, setbooksList] = useState([
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
    const [paginatItem, setPaginatItem] = useState([]);
    const [offset, setOffset] = useState(1);

    useEffect(() => getData(), []);
    useEffect(() => deleteData(), []);

    const getData = () => {
        let newArr = [];
        setOffset(offset + 2);
        newArr = booksList.filter(item => item.id <= offset);
        console.log(newArr);
        console.log(offset);
        setPaginatItem([...newArr]);
    };
    const deleteData = () => {
        setOffset(2);
        setPaginatItem([]);
    };

    return (
        <View style={styles.books}>
            <Image style={styles.ball4} source={require("../../images/Ellipse_2.2.png")}/>
            <Text style={styles.title}>Books</Text>
            <BooksForm/>
            <Text style={styles.titleRes}>Results</Text>
            <FlatList
                data={paginatItem}
                renderItem={({item}) => <BookItem item={item} navigation={navigation}/>}
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={<RenderFooter deleteData={deleteData} getData={getData}/>}/>
        </View>
    )
}


const LoadBooksButton = () => {
    return
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
    footerPaginator: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    loadMoreBtn: {
        marginLeft: 5,
        padding: 10,
        backgroundColor: '#800000',
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
            color: 'white',
            fontSize: 15,
            textAlign: 'center',
    }
})
