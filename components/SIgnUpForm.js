import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

const DOMAIN = 'https://us-central1-onetimepassword-afe47.cloudfunctions.net';

class SignUpForm extends Component {
  
    state = { phone: ''};

    handleSubmit = async () => {
        try {
        await axios.post(`${DOMAIN}/createUser`, { phone: this.state.phone });
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <View>
                <FormLabel>Enter phone number</FormLabel>
                <FormInput
                    value={this.state.phone}
                    onChangeText={phone => this.setState({phone})}
                />
                <Button
                    title="Submit"
                    onPress={this.handleSubmit}
                    />
            </View>
        );
    }
}

export default SignUpForm;
