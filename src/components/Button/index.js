import React from "react";
import { Pressable, Text } from "react-native";
import { styles } from "./styles";

const Button = ({ title }) => {
    const handlePress = () => {
        console.log("Button pressed");
    }

    return (
        <Pressable hitSlop={20} onPress={handlePress}>
            <Text style={styles.container}>{title}</Text>
        </Pressable>
    );
}

export default Button;