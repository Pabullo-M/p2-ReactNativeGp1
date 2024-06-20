import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import VideoBackground from '../../components/videoBg'; 
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: 'white',
    },
});

export default HomePage;
