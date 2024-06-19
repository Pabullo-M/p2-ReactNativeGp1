import { LinearGradient } from 'react-native-linear-gradient';

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerPrincipal:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'gray'
    },
    registreSeButton:{
        paddingRight:100
    },
    registreSeText:{
        top: 4.8,
        color:'blue',
    },
    olhoSenha:{
        position: 'absolute',
        right:'15%',
        paddingBottom:'6%'
    },
    buttonFavorito:{
        position:'absolute',
        right : 5,
        marginTop: 25
    }
})