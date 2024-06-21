import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TouchableOpacityProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useUser } from '../hooks/userContext';

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
                color={isChecked ? 'black' : 'black'}
            />
            <Text style={styles.label}>Salvar E-mail</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
    },
    label: {
        marginLeft: 8,
        fontSize: 16,
    },
});

export default CheckBox;