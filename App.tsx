import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Books from "./src/components/Books/Books";
import LoginForm from "./src/components/LoginForm/LoginForm";
import CommonPage from "./src/components/CommonPage/CommonPage";
import Settings from "./src/components/Settings/Settings";
import BookShow from "./src/components/BookShow/BookShow";
import MainStack from "./navigate";
import AppNavigator from "./navigation/AppNavigator";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Books"
                           screenOptions={{
                               headerStyle: {
                                   backgroundColor: '#f4511e',
                               },
                               headerTintColor: '#fff',
                               headerTitleStyle: {
                                   marginLeft: '50%',
                                   fontWeight: 'bold',
                                   textAlign: 'center',
                               }
                           }}>
                <Tab.Screen name="Books" component={BookStack}/>
                <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
    );



    // return (
    //     <View>
    //         {/*<LoginForm/>*/}
    //         {/*<Books/>*/}
    //         <CommonPage>
    //             {/*<Books/>*/}
    //             <Settings/>
    //             {/*<BookShow/>*/}
    //         </CommonPage>
    //     </View>
    // );
}

    function BookStack () {
    return <Stack.Navigator>
            <Stack.Screen
                name="Books"
                component={Books}
            />
            <Stack.Screen
                name="Book"
                component={BookShow}
            />
        </Stack.Navigator>
    }