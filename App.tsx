import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Books from "./src/components/Books/Books";
import LoginForm from "./src/components/LoginForm/LoginForm";
import CommonPage from "./src/components/CommonPage/CommonPage";
import Settings from "./src/components/Settings/Settings";
import BookShow from "./src/components/BookShow/BookShow";

export default function App() {
    return (
        <View>
            {/*<LoginForm/>*/}
            {/*<Books/>*/}
            <CommonPage>
                {/*<Books/>*/}
                <Settings/>
                {/*<BookShow/>*/}
            </CommonPage>
        </View>
    );
}
