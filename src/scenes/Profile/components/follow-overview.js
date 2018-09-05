import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FollowOverview = props => (
    <View style={styles.followContainer}>
        <View style={styles.followWrapper}>
            <Text style={styles.followTitle}> Followers</Text>
            <Text style={styles.followValue}> { props.followers } </Text>
        </View>
        <View style={styles.followWrapper}>
            <Text style={styles.followTitle}> Followins</Text>
            <Text style={styles.followValue}> { props.followings } </Text>
        </View>
    </View>


);

const styles = StyleSheet.create({
    followTitle: {
        color: '#AFAA',
    },

    followValue: {
        color: '#FAFF',
        fontSize: 24,
    },

    followContainer: {
        backgroundColor: '#2ACF',
        flexDirection: 'row',
    },

    followWrapper: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    }

});

export default FollowOverview;