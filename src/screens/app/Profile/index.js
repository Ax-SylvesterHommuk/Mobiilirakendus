import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import ListItem from '../../../components/ListItem';
import Button from '../../../components/Button';

const Profile = ({ navigation }) => {
    const num = 5;

    const onLogout = () => {
        console.log("Logout");
    };

    const onSettingsPress = () => {
        navigation.navigate("Settings");
    };

    const onNewListingPress = () => {
        navigation.navigate("CreateListing");
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Header title="Profile" showLogout onLogout={onLogout} />
                    <Text style={styles.name}>User name</Text>
                    <Text style={styles.email}>Email</Text>

                    <ListItem title="My Listings" subtitle={`Already have ${num} listings`} />
                    <ListItem title="Settings" subtitle="Account, FAQ, Contact" onPress={onSettingsPress} />
                </View>
                <Button onPress={onNewListingPress} title="Add New Listing" />
            </View>
        </SafeAreaView>
    );
};

export default Profile;