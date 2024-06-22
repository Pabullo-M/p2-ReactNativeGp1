import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useUser } from '../../hooks/userContext';
import { styles } from './styles'

interface props extends TouchableOpacityProps{
    isChecked: boolean
}


const CheckBox: React.FC<props> = ({isChecked, ...rest}) => {




    return (
        <TouchableOpacity style={styles.container}
             {...rest}>
            <Ionicons 
                name={isChecked ? 'checkbox-outline' : 'square-outline'}
                size={24} 
                color={isChecked ? 'white' : 'white'}
            />
            <Text style={styles.label}>Salvar E-mail</Text>
        </TouchableOpacity>
    );
};


export default CheckBox;