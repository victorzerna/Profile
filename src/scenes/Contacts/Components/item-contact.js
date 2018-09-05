//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';

// create a component
const ItemContact = ( props ) => (
    <TouchableHighlight
    onPress = {() => props.navigation.navigate('ProfileScreen')}
    underlayColor="#CCC"
    >
    

            <View style={ styles.container}>
            <View>
                <Image
                    style={ styles.image}
                    source={{ uri: props.contact.photo }}
                />
            </View>
            <View style={ styles.content}>
                <Text style={styles.contactName}> {props.contact.name}</Text>
                <Text> {props.contact.phone}</Text>
            </View>
            
        </View>
    </TouchableHighlight>
);

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
    },
    content:{
        paddingLeft: 10,
        justifyContent: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        padding: 5,
        margin: 5
    },
    contactName: {
        fontSize: 24,
        fontWeight: '200',
    }
});

//make this component available to the app
export default ItemContact;
