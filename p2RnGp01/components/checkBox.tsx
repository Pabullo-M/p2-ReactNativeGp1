import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CheckBox: React.FC = () => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    return (
        <TouchableOpacity style={styles.container} onPress={toggleCheckbox}>
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