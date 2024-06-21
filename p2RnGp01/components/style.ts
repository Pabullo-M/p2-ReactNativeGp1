import { StyleSheet } from "react-native";


 export const styles = StyleSheet.create({
    containerInput:{
         //position: 'absolute',
        width: '80%'
    },
    input: {
        height: 60,
        borderColor: '#000000',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10,
        paddingLeft:40,
        borderRadius:20,
        backgroundColor: '#FFFFFF90',
        marginTop: 15,
        textAlign: 'center'
    },
    iconImg:{
        position: 'absolute',
        top: 15,
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