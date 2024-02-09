import { StyleSheet } from 'react-native';

import { colors } from '../../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        padding: 24,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        borderWidth: 1,
    },
    image: {
        width: "100%",
        height: 200,
    },
    titleContainer: {
        marginVertical: 54,
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
    },
    innerTitle: {
        color: colors.orange,
        textDecorationLine: "underline",
    },
    footerText: {
        textAlign: "center",
        color: colors.blue,
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 30,
    },
});