import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';

const DOMAIN = 'https://us-central1-onetimepassword-afe47.cloudfunctions.net';

class SignInForm extends Component {
  
    state = { phone: '', code: ''};
    
    handleSubmit = async () => {
        try {
            let { data } = await axios.post(`${DOMAIN}/verifyOneTimePassword`, {
                phone: this.state.phone,
                code: this.state.code
            });
            
            firebase.auth().signInWithCustomToken(data.token);
        } catch (err) {
            console.log(err);
        }
        
    }

    render() {
        return (
            <View>
                <View>
                    <FormLabel>Enter phone number</FormLabel>
                    <FormInput
                        value={this.state.phone}
                        onChangeText={phone => this.setState({phone})}
                    />
                </View>
                <View>
                    <FormLabel>Enter the code</FormLabel>
                    <FormInput
                        value={this.state.code}
                        onChangeText={code => this.setState({code})}
                    />
                </View>
                <Button
                    title="Submit"
                    onPress={this.handleSubmit}
                    />
            </View>
        );
    }
}

export default SignInForm;
