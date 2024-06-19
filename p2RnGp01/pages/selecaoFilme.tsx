import { styles } from "./style";
import InputComponente from "../components/input";
import axios from "axios";
import { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, Alert, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import image from '../assets/image.png'

interface filme{
    imdbID: string
    Title: string
    Poster: string
    favorito: boolean
}

export default function SelecaoFilme() {

    const [filme, setFilme] = useState<filme>();
    const [titulo, setTitulo] = useState('');
    const [filmes, setFilmes] = useState<filme[]>([]);// vai ser o contexto global

    useEffect(()=>{
        if(filme?.favorito){
            setFilmes(prevFilmes =>({
                ...prevFilmes, filme
            }))
        }
    },[filme?.favorito])

    const getFilme = async (titulo: string)=>{
        const response = await axios.get(`http://www.omdbapi.com/?t=${titulo}&apikey=60e24515`)
        setFilme(response.data);
    }

    const handlePress = () => {
        setFilme(prevFilme => {
            if (!prevFilme) {
            return prevFilme;
            }
            return (
                {
                ...prevFilme,
                favorito: !prevFilme.favorito
                }
        )});
        }
    return(
        <View style={styles.containerPrincipal}>
            <ImageBackground source={image} style={styles.backgroundFavoritos}> 
                <View style={styles.topBar}>
                    <Text>Vai entrar a topBarNavigation</Text>
                </View>
                <InputComponente
                    onChangeText={(titulo)=>{setTitulo(titulo)}}
                    value={titulo}
                    placeHolder="Digite sua busca de Filme/Serie"
                    icone='search'
                    onSubmitEditing={()=>{getFilme(titulo)}}
                />
                <View>
                    <Text style={styles.tituloFilme}>{filme?.Title}</Text>
                    <Image
                        source={{uri: filme?.Poster}}
                        style={styles.bordaFilmes}
                    />
                    {filme&&
                        <TouchableOpacity 
                            onPress={handlePress}
                            style={styles.buttonFavorito}
                        >
                            <Ionicons name={filme?.favorito ? 'heart' : 'heart-outline'} size={50} color={filme?.favorito ? 'red' : 'red'} />
                        </TouchableOpacity>
                    }
                </View>
            </ImageBackground>
        </View>
    )

}