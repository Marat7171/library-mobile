import React from 'react';
import Settings from "../src/components/Settings/Settings";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Books from "../src/components/Books/Books";
import BookShow from "../src/components/BookShow/BookShow";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
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
                <Tab.Screen name="Settings" component={Settings}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

function BookStack() {
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

export default AppNavigator;
