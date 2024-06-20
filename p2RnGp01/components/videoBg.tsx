import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

const VideoBackground: React.FC<{ source: any }> = ({ source }) => {
    return (
            <Video
                source={source}
                rate={1.0}
                volume={1.0}
                resizeMode="cover"
                isMuted={false}
                shouldPlay
                isLooping
                style={StyleSheet.absoluteFillObject}
            />
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default VideoBackground;