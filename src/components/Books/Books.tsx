import {Image, Text, View, StyleSheet, TouchableOpacity, FlatList} from "react-native";
import {useEffect, useState} from "react";
import React from "react";
import BookItem from "./BookItem";
import BookSearchForm from "./BookSearchForm";
import {useSelector} from "react-redux";


export const usePosts = (posts, query) => {
    if (query == '') return null;

    return posts.filter(post => post.Author.toLowerCase().includes(query.toLowerCase()) ||
        post.BookName.toLowerCase().includes(query.toLowerCase()))

}


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
    const booksList = useSelector(state => state.toolkit.booksList);
    const [paginatItem, setPaginatItem] = useState([]);
    const [offset, setOffset] = useState(1);
    const [filter, setFilter] = useState('');
    const searchedBooks = usePosts(booksList, filter);

    useEffect(() => getData(), []);
    useEffect(() => deleteData(), []);

    const getData = () => {
        let newArr = [];
        setOffset(offset + 2);
        newArr = booksList.filter(item => item.id <= offset);
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
            <BookSearchForm setFilter={setFilter}/>
            <Text style={styles.titleRes}>Results</Text>
            <FlatList
                data={searchedBooks || paginatItem}
                renderItem={({item}) => <BookItem item={item} navigation={navigation}/>}
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={<RenderFooter deleteData={deleteData} getData={getData}/>}/>
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
        letterSpacing: 1,
        textTransform: "uppercase",
        color: "rgba(56, 79, 125, 0.8)",
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
