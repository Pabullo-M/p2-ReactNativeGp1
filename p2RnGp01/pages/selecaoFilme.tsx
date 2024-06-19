import { styles } from "./style";
import InputComponente from "../components/input";
import axios from "axios";
import { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface filme{
    imdbID: string
    Title: string
    Poster: string
    favorito: boolean
}

export default function selecaoFilme() {

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
            <InputComponente
                onChangeText={(titulo)=>{setTitulo(titulo)}}
                value={titulo}
                placeHolder="Digite aqui seu nome"
                icone='search'
                onSubmitEditing={()=>{getFilme(titulo)}}
            />
            <View>
                <Text>{filme?.Title}</Text>
                <Image
                    source={{uri: filme?.Poster}}
                    style={{ width: 200, height: 300 }}
                    resizeMode="cover"
                />
                {filme&&
                    <TouchableOpacity 
                        onPress={handlePress}
                        style={styles.buttonFavorito}
                    >
                        <Ionicons name={filme?.favorito ? 'star' : 'star-outline'} size={30} color={filme?.favorito ? 'gold' : 'gold'} />
                    </TouchableOpacity>
                }
            </View>
        </View>
    )

}