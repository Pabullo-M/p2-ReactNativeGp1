import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerInput:{
        // position: 'absolute',
        width: '80%'
    },    
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

    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,  
      },
  
    label: {
        fontSize: 14,
        color: 'white', 
        marginLeft: 1, 
       },
      
    link: {
        marginTop: 40, 
        color: 'lightblue', 
        fontSize: 18, 
      
      },
     modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',  
      },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%', 
      },
    modalText: {
        marginBottom: 15,
      },
    modalButton: {
        marginTop: 10,  
      },
    modalButtonText: {
        color: 'red',
      },
    olhoSenha: {
        position: 'absolute',
        right: 10, 
        top: '50%',
        transform: [{ translateY: -15 }], 
      },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        position: 'relative', 
      },
      
      
})