import React from "react";
import { Alert, FlatList, Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { useFilmes } from "../hooks/globalContext";
import { styles } from "./style";
import image from '../assets/image.png';
import { Ionicons } from "@expo/vector-icons";

export default function Favoritos() {
    const { filmes, removerFilmeFavorito } = useFilmes();

    const handleRemoverPress = (filme) => {
        Alert.alert(
            "Remover dos Favoritos",
            `Deseja remover ${filme.Title} dos favoritos?`,
            [
                {
                    text: "Cancelar",
                    style: "cancel"
                },
                {
                    text: "Remover",
                    onPress: () => {
                        removerFilmeFavorito(filme.imdbID); 
                    },
                    style: "destructive"
                }
            ],
            { cancelable: false }
        );
    };

    return (
        <View style={styles.containerPrincipal}>
            <ImageBackground source={image} style={styles.background}>
                <FlatList
                    data={filmes}
                    renderItem={({ item }) => (
                        <View style={styles.itemContainer}>
                            <Text style={styles.tituloFilme}>{item.Title}</Text>
                            <Image
                                source={{ uri: item.Poster }}
                                style={styles.bordaFilmes}
                            />
                            <TouchableOpacity
                                style={styles.botaoRemover}
                                onPress={() => handleRemoverPress(item)}
                            >
                                <Ionicons name="heart-dislike" size={20} color="#fff" />
                                <Text style={styles.textoBotaoRemover}> Remover dos Favoritos</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    keyExtractor={item => item.imdbID}
                />
            </ImageBackground>
        </View>
    );
}
