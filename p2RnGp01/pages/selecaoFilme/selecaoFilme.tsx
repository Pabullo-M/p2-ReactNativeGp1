import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ImageBackground, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { useFilmes } from "../../hooks/globalContext";
import InputComponente from "../../components/input";
import { styles } from "../selecaoFilme/style";
import image from '../../assets/image.png';

interface Filme {
  imdbID: string;
  Title: string;
  Poster: string;
  favorito: boolean;
}

export default function SelecaoFilme() {
  const {filmes, setFilmes } = useFilmes();
  const [filme, setFilme] = useState<Filme | null>(null);
  const [titulo, setTitulo] = useState('');

  useEffect(() => {
    if (filme && filme.favorito) {
        const filmeExiste = filmes.find(item => item.imdbID === filme.imdbID);

        if (filmeExiste) {
            Alert.alert(`${filme.Title} já está nos favoritos`);
        } else {
            setFilmes(prevFilmes => [...prevFilmes, filme]);
        }
    }
}, [filme?.favorito]);

  const getFilme = async (titulo: string) => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?t=${titulo}&apikey=60e24515`);
      setFilme(response.data);
    } catch (error) {
      console.error('Erro ao buscar filme:', error);
    }
  };

  const handlePress = () => {
    if (filme) {
      setFilme(prevFilme => ({
        ...prevFilme!,
        favorito: !prevFilme?.favorito
      }));
    }
  };

    // const handlePress = () => {
    //     setFilme(prevFilme => {
    //         if (!prevFilme) {
    //         return prevFilme;
    //         }
    //         return (
    //             {
    //             ...prevFilme,
    //             favorito: !prevFilme.favorito
    //             }
    //     )});
    //     }
    return(
        <View style={styles.containerPrincipal}>
            <ImageBackground source={image} style={styles.backgroundFavoritos}> 
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
  );
}
