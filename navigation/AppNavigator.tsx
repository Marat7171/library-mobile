import React from 'react';
import Settings from "../src/components/Settings/Settings";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Books from "../src/components/Books/Books";
import BookShow from "../src/components/Books/BookShow";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="BooksList"
                           screenOptions={{
                               headerShown: false
                           }}>
                <Tab.Screen name="Books" component={BookStack}/>
                <Tab.Screen name="Settings" component={Settings}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

function BookStack() {
    return <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}>
        <Stack.Screen
            name="BooksScreen"
            component={Books}
        />
        <Stack.Screen
            name="BookShowScreen"
            component={BookShow}
        />
    </Stack.Navigator>
}

export default AppNavigator;
