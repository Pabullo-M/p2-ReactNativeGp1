import { LinearGradient } from 'react-native-linear-gradient';

import { ImageBackgroundBase, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerPrincipal:{
        flex: 1,
        zIndex:0
    },
    barraLogin:{
        width: 250,
        height: 50,
        backgroundColor: '#fff',
        borderWidth: 2,
        borderRadius: 10,        
        margin: 5,
        textAlign: 'center',
                
    },
    botaoLogin: {
        borderWidth: 5,
        borderColor: '#FFFFFF60',
        borderRadius: 7,
        backgroundColor: '#6290b3',
        width: 120,
        height: 50,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 18,
        padding: 7,
   
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
        paddingTop: '10%',
        color: 'white',
    },
    registreSeText:{
        top: 4.8,
        color:'orange',
    },
    olhoSenha:{
        position: 'absolute',
        right:'17%',
        paddingBottom:'26%'
    },
    buttonFavorito:{
        position: 'absolute',
        bottom: 330,
        left: 205,
    },
    topBar:{
        marginTop: 50
    },
    bordaOpaca:{
        justifyContent: 'center',
        backgroundColor: '#FFFFFF50',        
        borderRadius:20,
        borderColor:"#fff",
        borderWidth:2,
        padding: 25,
        opacity: 200,
        width: 320,
        height: 410,
        
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

   botaoRemover: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF6347',
        padding: 10,
        borderRadius: 5,
    },
    textoBotaoRemover: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 5,
    },
    
})