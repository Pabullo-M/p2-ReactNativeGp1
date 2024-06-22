import React from "react";
import { TextInputProps, View, TextInput } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";

interface props extends TextInputProps{
    value: string
    placeHolder: string
    icone?: any

}

const InputComponente: React.FC<props> = ({placeHolder, value, icone, ...rest})=>{
    return(
        <View style={styles.containerInput}>
            <TextInput
                style= {styles.input} 
                {...rest}
                value={value}
                placeholder={placeHolder}
            />
            <Ionicons size={25}style={styles.iconImg} name={icone}/>
        </View>
    );
}

export default InputComponente