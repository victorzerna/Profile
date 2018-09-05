/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import Profile from './src/scenes/Profile';
import Contacts from './src/scenes/Contacts';
import Diary from './src/scenes/Diary';

import{ StackNavigator } from 'react-navigation';

//Aca se crean todos los screen o escenas de la navegación
const AppNavigator = StackNavigator(
    {
        ProfileScreen : { 
            screen : Profile
        },
        ContactsScreen :{
            screen : Contacts
        },
        //DiaryScreen : Diary es igual que el llamado de abajo sin navigation
        DiaryScreen: {
            screen : Diary,
            navigatiosOptions: () => ({
                title : 'Diary'
            })
        }
        
    },
    {
        initialRouteName: 'ProfileScreen',
        navigationOptions:{
            title: 'View Profile',
            headerStyle:{
                backgroundColor: '#2B1FA2',
                borderBottomColor: '#2B1FA2',
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
                fontWeight: '500',
                fontSize: 26,
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
                fontWeight: '500',
                fontSize: 10,
            }
        }
    }
);

type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);

    };


    render() {
        return (

           <AppNavigator />
        );
    }
}

//Hojas de estilo para nuestra interfaz
