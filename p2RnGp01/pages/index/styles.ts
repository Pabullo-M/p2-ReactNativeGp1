import { StyleSheet } from "react-native";

 export const styles = StyleSheet.create({
    
    containerPrincipal:{
        flex: 1,
        zIndex:0
    },    
    input: {
        height: 60,
        borderColor: '#FFFFFF90',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10,
        paddingLeft:40,
        borderRadius:20,
        backgroundColor: '#FFFFFF'
    },
    iconImg:{
        position: 'absolute',
        paddingTop:'5%',
        width: 30 ,
        height: 45,
        left: 10,       
       
    }, 
    buttonComponente: {
        backgroundColor: "#3498db",
        padding: 10,
        borderRadius: 5,
        width: "80%",
        alignItems: "center",
        marginTop: 20,
      },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
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
   

})