import React, {Component} from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import ItemContact from './Components/item-contact';
import ItemSeparator from './Components/item-separator';

class Contacts extends Component{

    constructor(props){
        super(props),
        this.state = {
            contactList:[]
        };
    }

    componentDidMount = () =>{
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

    static navigationOptions = {
        title: 'Contact',
        headerStyle:{
            backgroundColor: '#2B1FA2',
            borderBottomColor: '#2B1FA2',
        }
    }

    renderItem = ({ item }) => <ItemContact navigation={ this.props.navigation} contact ={ item }/>

    separatorComponent = () => <ItemSeparator/>

    emptyComponent =() => <Text> COntacts not found </Text>

    keyExtractor = item  => item.id.toString()

    render(){
        return(
            <View> 
                <Text>{ this.props.navigation.getParam('name', 'NO-SUPERHERO')}</Text>
               {/* <Button
                    title="Go Back"
                    onPress={ () => {this.props.navigation.goBack()}}
                />*/}
                <FlatList 
                 data={ this.state.contactList }
                 renderItem={ this.renderItem }
                 ListEmptyComponent= { this.emptyComponent}
                ItemSeparatorComponent={ this.separatorComponent}
                keyExtractor={ this.keyExtractor}
                
                />
            </View>
        );
    }

}

export default Contacts;