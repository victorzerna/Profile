import React from 'react';
import { View, Text, ScrollView, TextInput, Switch, Button, StyleSheet } from 'react-native';

const FormOverview = props => (
    <ScrollView style={styles.formWrapper}>
        
        <Button
            title="My Contacts"
            onPress={ () => { props.navigation.navigate('ContactsScreen',{ name: 'MTB'}) } }
        />
            
        <Text style={styles.formLabel}> Name </Text>
        <TextInput
            placeholder='Name her...'
            style={styles.formInput}
            value={ props.profile.name }
            onChangeText={ props.onChangeText }
        />

        <Text style={styles.formLabel}> @Twitter </Text>
        <TextInput
            placeholder='@Twitter her...'
            style={styles.formInput}
            value={ props.profile.twitter }
        />
        <Text style={styles.formLabel}> Phone </Text>
        <TextInput
            placeholder='Phone her...'
            style={styles.formInput}
            value={ props.profile.phone }
        />

        <Text style={styles.followTitle}> All Share Social Data </Text>
        <Switch
            onTintColor={'#394F'}
            value={true}
        />

        <Button
            onPress={ props.onPress }
            color={'#394F'}
            title={1 == 1 ? "Sync wih facebook" : "no show nothing"}
        />

    </ScrollView>
);

const styles = StyleSheet.create({

    formWrapper: {
        marginHorizontal: 25,
    },

    formLabel: {
        color: '#1EAF',
        //marginBottom: 5,
        marginVertical: 10,
    },

    formInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#2CCC',
    }
});

export default FormOverview;