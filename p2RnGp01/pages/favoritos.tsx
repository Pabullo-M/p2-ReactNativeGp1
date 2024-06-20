import { Alert, FlatList, Image, ImageBackground, Text, View } from "react-native";
import { Filme, useFilmes } from "../hooks/globalContext";
import { styles } from "./style";
import image from '../assets/image.png'
import { useUser } from "../hooks/userContext";

export default function Favoritos() {
    const {user}=useUser();
    const { filmes} = useFilmes();

    return(
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
                        </>
                    )}
                    keyExtractor={item => item.imdbID}
                    />
            }
        </ImageBackground>
        </View>
    )

}


