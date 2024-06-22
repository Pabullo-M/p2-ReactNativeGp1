import React from "react";
import { Alert, FlatList, Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { Filme, useFilmes } from "../../hooks/globalContext";
import { styles } from ".././favoritos/style";
import { Ionicons } from "@expo/vector-icons";
import image from '../../assets/favoritos.png';
import { useUser } from "../../hooks/userContext";
import box from '../../assets/box.png';
import { BotaoFlutuante } from "../../components/Draggable";

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

            {!filmes.find((filme)=>filme.userEmail == user?.email)?
                <Text style={styles.filmesFavoritos}>
                Lista de Favoritos Vazia
                <Image  style={styles.boxFavoritos} source={box}/>
                </Text>:
                    
                    <FlatList
                    data={filmes.filter((filme)=>filme.userEmail == user?.email)}
                    renderItem={({ item }) => (
                        
                        <View style={styles.cardFavoritos}>
                            <View style={styles.containerDescricao}>
                                <Text style= {styles.tituloFilme}>{item.Title}</Text>                       
                                <Text style={styles.descricao}>{item.Plot}</Text>
                            </View>
                            
                            <Text style={styles.nota}>{item.imdbRating}
                            <Ionicons name="star" size={19} color='gold'/>
                            </Text>
                            
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
                        </View>
                    
                        
                    )}
                    keyExtractor={item => item.imdbID}
                    />
               
            }
        </ImageBackground>
        </View>
    );
}
