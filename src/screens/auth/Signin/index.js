import React from "react";
import { Text, View } from "react-native";
import { styles } from './styles'
import Button from '../../../components/Button'
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Seperator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";
import { SafeAreaView } from "react-native-safe-area-context";

const Signin = ({ navigation }) => {

    const onBack = () => {
        navigation.goBack();
    }

    const onSignUp = () => {
        navigation.navigate('Signup');
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <AuthHeader onBackPress={onBack} title="Sign In" />
                <Input placeholder="example@gmail.com" label="Email" />
                <Input placeholder="********" label="Password" isPassword />
                <Button style={styles.button} title="Sign In" />
                <Seperator text="Or sign in with" />
                <GoogleLogin />
                <Text style={styles.footerText}>Don't have an account?
                    <Text onPress={onSignUp} style={styles.footerLink}> Sign Up</Text>
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default Signin;