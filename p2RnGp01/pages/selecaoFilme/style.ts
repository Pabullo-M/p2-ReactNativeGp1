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
    bordaFilmes:{
        backgroundColor: '#FFFFFF10',
        padding: 40, 
        borderRadius:20,
        borderColor:"#fff",
        borderWidth:2,
        opacity: 20,
        width: 270, 
        height: 410, 
        top: 20,
    }, 
    tituloFilme: {
        color: '#fff',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 10,
        marginTop: 20,
        padding: 12,
        fontSize: 22,       
        width: 250,
        alignSelf: 'center',
        opacity: 20,
        backgroundColor: '#00000050',
    },
    backgroundFavoritos: {
        justifyContent: "flex-start",
        alignItems: "center",
        flex: 1,
        resizeMode: 'cover',
        zIndex:2
    },
    buttonFavorito:{
        position: 'absolute',
        bottom: 330,
        left: 205,
    } 

})