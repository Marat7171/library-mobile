import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";

import Books from "../src/components/Books/Books";
import Settings from "../src/components/Settings/Settings";
import CommonPage from "../src/components/CommonPage/CommonPage"
import {createStackNavigator} from "react-navigation-stack";
import {Text, View} from "react-native";


const AppNavigator = createBottomTabNavigator({
    BooksNav: {
        screen: Books,
        navigationOptions: {
            title: 'Books'
        }
    },
    SettingsNav: {
        screen: Settings,
        navigationOptions: {
            title: 'Books',
        }
    }
}, {
    initialRouteName: "BooksNav"
})

export default createAppContainer(AppNavigator);


























