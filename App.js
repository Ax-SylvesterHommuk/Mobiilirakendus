import React, { useEffect } from "react";
import { Image } from "react-native";
import Splash from "./src/screens/auth/Splash";
import Signup from "./src/screens/auth/Signup";
import Signin from "./src/screens/auth/Signin";
import Home from './src/screens/app/Home';
import Favorites from './src/screens/app/Favorites';
import Profile from './src/screens/app/Profile';
import ProductDetails from "./src/screens/app/ProductDetails";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { colors } from './src/utils/colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const WEB_CLIENT_ID = "577679857097-di31grlciim1065t7n9es9qruqvpok2o.apps.googleusercontent.com";
const IOS_CLIENT_ID = "577679857097-r0pjf1oml130g57o2dk22tqsei01kqnh.apps.googleusercontent.com"
const REVERSED_CLIENT_ID = "com.googleusercontent.apps.577679857097-r0pjf1oml130g57o2dk22tqsei01kqnh"

const Tabs = () => {
    return (
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon;

          if (route.name === 'Home') {
            icon = focused
              ? require('./src/assets/tabs/home_active.png')
              : require('./src/assets/tabs/home.png');
          } else if (route.name === 'Favorites') {
            icon = focused
              ? require('./src/assets/tabs/bookmark_active.png')
              : require('./src/assets/tabs/bookmark.png');
          } else if (route.name === 'Profile') {
            icon = focused
              ? require('./src/assets/tabs/profile_active.png')
              : require('./src/assets/tabs/profile.png');
          }

          return <Image style={{ width: 24, height: 24 }} source={icon} />;
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { borderTopColor: colors.lightGray }
      })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  }
  
  const theme = {
    colors: {
      background: colors.white
    }
  }
  
  const App = () => {
    const isSignedIn = true;
  
    useEffect(() => { 
      GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/drive.readonly'],
        webClientId: WEB_CLIENT_ID,
        offlineAccess: true,
        iosClientId: IOS_CLIENT_ID
      })
    }, []);
  
    return (
      <SafeAreaProvider>
        <NavigationContainer theme={theme}>
          <Stack.Navigator>
            {
              isSignedIn ? (
                <>
                  <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}} />
                  <Stack.Screen name="ProductDetails" component={ProductDetails} options={{headerShown: false}} />
                </>
              ) : (
                <>
                  <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
                  <Stack.Screen name="Signin" component={Signin} options={{headerShown: false}} />
                  <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
                </>
              )
            }
          </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
    );
  };
  
  export default React.memo(App);