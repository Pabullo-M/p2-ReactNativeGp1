import { LinearGradient } from 'react-native-linear-gradient';

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerPrincipal:{
        flex: 1,
        zIndex:0
    },
    background: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        resizeMode: 'cover',
        zIndex:2
    },
    backgroundFavoritos: {
        justifyContent: "flex-start",
        alignItems: "center",
        flex: 1,
        resizeMode: 'cover',
        zIndex:2
    },
    registreSeButton:{
        paddingRight:100
    },
    text:{
        color: 'white',
    },
    registreSeText:{
        top: 4.8,
        color:'orange',
    },
    olhoSenha:{
        position: 'absolute',
        right:'15%',
        paddingBottom:'6%'
    },
    buttonFavorito:{
        position:'absolute',
        right : 15,
        marginTop: 100
    },
})