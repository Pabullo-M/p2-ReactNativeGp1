import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

interface props extends TouchableOpacityProps{
    texto: string
}

const ButtonComponente: React.FC<props> = ({texto, ...rest})=>{
    return(
        
            <TouchableOpacity
                style={styles.buttonComponente}
                {...rest}
            >
                <Text style={styles.buttonText}>{texto}</Text>
            </TouchableOpacity>
        
    );
}

export default ButtonComponente