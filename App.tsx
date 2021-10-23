import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Books from "./src/components/Books/Books";
import LoginForm from "./src/components/LoginForm/LoginForm";

export default function App() {
    return (
        <View>
            {/*<LoginForm/>*/}
            <Books/>
        </View>
    );
}
