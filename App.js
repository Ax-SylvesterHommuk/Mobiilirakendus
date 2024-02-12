import React, { useEffect } from "react";
import {SafeAreaView} from "react-native";
import { GoogleSignin } from "@react-native-google-signin/google-signin"
import Splash from "./src/screens/auth/Splash";
import Signup from "./src/screens/auth/Signup";

const WEB_CLIENT_ID = "577679857097-di31grlciim1065t7n9es9qruqvpok2o.apps.googleusercontent.com";
const IOS_CLIENT_ID = "577679857097-r0pjf1oml130g57o2dk22tqsei01kqnh.apps.googleusercontent.com"
const REVERSED_CLIENT_ID = "com.googleusercontent.apps.577679857097-r0pjf1oml130g57o2dk22tqsei01kqnh"

const App = () => {
    useEffect(() => {
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.readonly'],
            webClientId: WEB_CLIENT_ID,
            offlineAccess: true,
            iosClientId: IOS_CLIENT_ID,
        })
    }, [])
    return (
        <SafeAreaView>
            <Signup />
        </SafeAreaView>
    );
};

export default React.memo(App)