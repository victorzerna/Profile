import React, { Component } from 'react';
import ProfileOverview from './components/profile-overview';
import FormOverview from './components/form-overview';
import FollowOverview from './components/follow-overview';

import { View, AlertIOS } from 'react-native';
import api from './../../utils/api';
import HttpUser from './../../services/Users/http-users';
//Componente de tipo clase
class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            profile: {}
        };
    }

    componentDidMount() {
        const profile = {
            name: 'Víctor Hugo Serna Suárez',
            location: 'Manizales, Caldas',
            image: 'https://cdn4.iconfinder.com/data/icons/general11/png/128/administrator.png',
            followers: 800,
            followins: 1890,
            phone: '54376864',
            twitter: '@victorserna'
        };
        
        /*this.setState({
            profile // esto es igual profile: profile
        });*/

        //Llamado al servicio
      /**
       * Llamado de forma asincrona a los servicios
       
        API.getProfile()
        .then( data => {
            
            this.setState({
                profile : data[1] // esto es igual profile: profile
            });
            data => console.log(data) 
        
        })
        .catch( error => console.log(error) );
        */

        this.invokeApiProfile();
        console.log('profile.js');

    }

    async getUsers(){
        const data = await HttpUser.getUsers();
        console.log(data);
    }

    async getUserByToken(){
        const data = await HttpUser.getUserByToken();
        console.log(data);
    }

    async invokeApiProfile(){
        const data = await api.getProfileAwait();
        console.log(data);
    }


    showAlert() {
        AlertIOS.alert(
            'Sync Complete',
            'All your data are belong to us.'
        );
    }

    changeText = text => {
        this.setState({ profile: { name: text } });
        console.log(text);
    }

    static navigationOptions = {
        title: 'View Profile',
        headerTitleStyle:{
            fondSize: 26,
        }
    }

    render() {
        return (
            <View>
                
                <ProfileOverview profile={this.state.profile} />
                <FollowOverview followings={this.state.profile.followings} followers={this.state.profile.followers} />
                <FormOverview navigation={this.props.navigation} onPress={  this.showAlert} profile={this.state.profile} onChangeText={this.changeText} />
            </View>
            //lo ubicamos dentro de un view dado que este return retorna un solo objeto
            //this.props.children
        );
    }

}

export default Profile;