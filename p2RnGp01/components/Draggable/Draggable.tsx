import { View } from "react-native"
import Draggable from "react-native-draggable"
import ButtonComponente from "../button/button"
import { styles } from './styles'

export const BotaoFlutuante=({eixoX, eixoY})=>{

    return  <View >
        <Draggable x={eixoX} y={eixoY}>
            <ButtonComponente style={styles.button} texto='X'/>
        </Draggable>
    </View>


};