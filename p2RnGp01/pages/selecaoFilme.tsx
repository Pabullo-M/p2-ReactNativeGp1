import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ImageBackground, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { useFilmes } from "../hooks/globalContext";
import InputComponente from "../components/input";
import { styles } from "./style";
import image from '../assets/image.png';

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

  return (
    <View style={styles.containerPrincipal}>
      <ImageBackground source={image} style={styles.backgroundFavoritos}>
        <InputComponente
          onChangeText={(titulo) => { setTitulo(titulo) }}
          value={titulo}
          placeHolder="Digite sua busca de Filme/Serie"
          icone='search'
          onSubmitEditing={() => { getFilme(titulo) }}
        />
        <View>
          <Text>{filme?.Title}</Text>
          <Image
            source={{ uri: filme?.Poster }}
            style={{ width: 270, height: 410, top: 70 }}
          />
          {filme &&
            <TouchableOpacity
              onPress={handlePress}
              style={styles.buttonFavorito}
            >
              <Ionicons name={filme?.favorito ? 'heart' : 'heart-outline'} size={45} color='red' />
            </TouchableOpacity>
          }
        </View>
      </ImageBackground>
    </View>
  );
}
