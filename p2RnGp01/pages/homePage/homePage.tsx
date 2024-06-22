import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import VideoBackground from '../../components/videoBg/videoBg'; 
import { styles } from './style';
import { BotaoFlutuante } from '../../components/Draggable/Draggable';
const HomePage: React.FC = () => {
    
    const videoSource = require('../../assets/home.mp4');

    return (
        <View style={styles.container}>
            <VideoBackground source={videoSource} />
            <View style={styles.content}>
            </View>
        </View>
    );
};



export default HomePage;
