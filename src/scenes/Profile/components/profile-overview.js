import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileOverview = props => (
    <View style={styles.profileContainer}>
        <Image
            style={styles.profileImage}
            source={{ uri:  props.profile.photo  }}
        />
        <Text style={styles.profileName}> {props.profile.name} </Text>
        <Text style={styles.profileLocation}> {props.profile.username} </Text>
    </View>
);

const styles = StyleSheet.create({
    profileContainer: {
        backgroundColor: '#2B1FA2',
        alignItems: 'center',
    },

    profileTitle: {
        backgroundColor: '#1B1FA2',
        fontSize: 18,
    },

    profileName: {
        color: '#F61FA2',
        fontSize: 18,
        marginTop: 20,
    },

    profileLocation: {
        color: '#2FFF',
        fontSize: 18,
        marginBottom: 10,
    },

    profileImage: {
        width: 140,
        height: 140,
        resizeMode: 'cover',
        borderRadius: 70,
    }
});


export default ProfileOverview;