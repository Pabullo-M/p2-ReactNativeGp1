import React from "react";
import { Alert, FlatList, Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { Filme, useFilmes } from "../../hooks/globalContext";
import { styles } from ".././favoritos/style";
import { Ionicons } from "@expo/vector-icons";
import image from '../../assets/image.png';
import { useUser } from "../../hooks/userContext";

export default function Favoritos() {
    const {user}=useUser();
    const { filmes, removerFilmeFavorito } = useFilmes();


    const handleRemoverPress = (filme:Filme) => {
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
            {!filmes.find((filme)=>filme.userEmail == user?.email)?<Text>
                Lista de Favoritos Vazia
                </Text>:
                    <FlatList
                    data={filmes.filter((filme)=>filme.userEmail == user?.email)}
                    renderItem={({ item }) => (
                        <>
                            <Text style= {styles.tituloFilme}>{item.Title}</Text>
                            <Image 
                                source={{ uri: item.Poster}}
                                style={styles.bordaFilmes}
                            />
                            <TouchableOpacity
                                style={styles.botaoRemover}
                                onPress={() => handleRemoverPress(item)}
                            >
                                <Ionicons name="heart-dislike" size={20} color="#fff" />
                                <Text style={styles.textoBotaoRemover}> Remover dos Favoritos</Text>
                            </TouchableOpacity>
                        </>
                    )}
                    keyExtractor={item => item.imdbID}
                    />
            }
        </ImageBackground>
        </View>
    );
}
