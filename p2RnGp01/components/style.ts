import { StyleSheet } from "react-native";
import buttonComponente from "./button";

 export const styles = StyleSheet.create({
    containerInput:{
        // position: 'absolute',
        width: '80%'
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


})