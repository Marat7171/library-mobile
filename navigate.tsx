import React from "react";
import Books from "./src/components/Books/Books";
import Settings from "./src/components/Settings/Settings";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import CommonPage from "./src/components/CommonPage/CommonPage"

const Stack = createStackNavigator();

export default function Navigate () {
    return <NavigationContainer>
        <Stack.Navigator>
            <CommonPage>
            <Stack.Screen
                name="Books"
                component={Books}
                options={{title: "Список книг"}}/>
            <Stack.Screen
                name="Settings"
                component={Settings}
                options={{title: "Настройки"}}/>
            </CommonPage>
        </Stack.Navigator>
    </NavigationContainer>;
}