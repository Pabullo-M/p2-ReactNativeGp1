import { StyleSheet, View } from "react-native"
import Draggable from "react-native-draggable"
import ButtonComponente from "./button"

export const BotaoFlutuante=({eixoX, eixoY})=>{

    return  <View >
        <Draggable x={eixoX} y={eixoY}>
            <ButtonComponente style={styles.button} texto='X'/>
        </Draggable>
    </View>


}


const styles = StyleSheet.create({
    button: {
      width: 100,
      height: 100,
      borderRadius: 60, 
      backgroundColor: '#3498db', 
      justifyContent: 'center',
      alignItems: 'center', 
      zIndex:500
    }
  });