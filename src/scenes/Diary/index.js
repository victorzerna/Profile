//import liraries
import React, { Component } from 'react';
import { View, Text, SectionList, StyleSheet, Platform } from 'react-native';

import ItemContact from './../Contacts/Components/item-contact';
import CustomText from './Components/custom-text';

// create a component
class Diary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactList: []
        };
    }

    componentDidMount = () => {
        const contacts = [
            {
                name: 'Carlos Augusto',
                phone: '3117472546',
                photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWaZUqmmeP2BL9wewxwPg6yh4cABgmXLXlQ-ycXC9Bbk-3x_Ta',
                id: 1
            },
            {
                name: 'La Roca',
                phone: '3117472546',
                photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrQvZyOlzreKyPtXV1TRNaDFn-QM1qHjXhp-sgZhQfI6_r153vzw',
                id: 2
            },
            {
                name: 'La Roca',
                phone: '3117472546',
                photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8FWH4iDOnctkufGyoCEODfxvxF151wbzNu-67p8fL5vf4x5SU',
                id: 3
            },
        ];
        {/*this.setState({contactList: []}) Lista vacia para ver mensaje*/}
        this.setState({contactList: contacts})
    }

    renderItem = ({ item }) => <ItemContact navigation={this.props.navigation} contact={item} />
    sectionHeader = ({ section }) => <Text style={styles.header}> {section.key} </Text>
    keyExtractor = item => item.id.toString()

    // define your styles
    render() {
        return (
            <View>
                <CustomText/>
                <SectionList
                    renderItem={this.renderItem}
                    renderSectionHeader={this.sectionHeader}
                    sections={[
                        {
                            data: this.state.contactList, key: 'Lista Inicial'
                        },
                        {
                            data: this.state.contactList, key: 'Lista Final'
                        }
                    ]}
                    keyExtractor={this.keyExtractor}
                />
            </View>

        )
    }
}
//make this component available to the app

const styles = StyleSheet.create({
    header:{
        backgroundColor: Platform.OS== 'ios' ? '#ccc' : '#992207',
        
        ...Platform.select({
            ios:{
                paddingVertical: 5,
                marginBottom: 5,
            },
            android: {
                paddingVertical: 15,
                marginBottom: 5,
            }
        })
    }
});

export default Diary;
