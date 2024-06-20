import { LinearGradient } from 'react-native-linear-gradient';

import { ImageBackgroundBase, StyleSheet } from "react-native";

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
    text:{
        paddingTop: '10%',
        color: 'white',
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
        borderRadius:5,
        borderColor:"#fff",
        borderWidth:1,
        opacity: 20,
        width: 150, 
        height: 230,
        alignSelf: 'flex-end',
        
        
    }, 
    tituloFilme: {
        flex: 1,
        color: '#fff',
        textAlign: 'center',       
        //position: 'absolute',
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 6,        
        padding: 12,
        fontSize: 18,
        fontWeight: '700',       
        width: 210,
        margin: 2.5,        
        opacity: 20,
        top: 0,
        backgroundColor: '#00000090',
    },
    botaoRemover: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-end',
        justifyContent: 'center',        
        backgroundColor: '#FF6347',        
        borderRadius: 7,
        width: 150, 
        height: 58,
      
    },
    textoBotaoRemover: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 5,
    },
    cardFavoritos: {
        zIndex: 2,
        alignContent: 'flex-end',
        justifyContent: 'flex-end',
        borderWidth: 1,
        borderRadius: 5,
        borderColor:"#fff",
        backgroundColor: '#FFFFFF95',
        width: 370,
        height: 290,
        margin: 10,
    },
    descricao: {
        color: 'black',    
        fontSize: 15.7,
        fontWeight: '800',
        width: 205,    
        left: 7                
    },
    nota: {
        color: '#ffd700',
        textAlign: 'center',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        position: 'absolute',
        backgroundColor: '#00000095',        
        borderWidth: 1.5,
        borderColor: '#ffd700',        
        borderRadius: 6,        
        padding: 6,
        fontSize: 22,
        fontWeight: '900',
        width: 70,
        height: 40,
        left: 70,     
        top: 245,        
    },
    containerDescricao: {
        position: 'absolute',        
        top: 0,   
    }
   
    
})